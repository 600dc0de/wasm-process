import { PythonProcess } from "@/modules/python/PythonProcess";
import { GolangProcess } from "@/modules/golang/GolangProcess";
import { PhpProcess } from "@/modules/php/PhpProcess";
import { DependencyManager } from "@/DependencyManager";
import { VirtualFileSystem } from "@/VirtualFileSystem";

// polyfill
if (!WebAssembly.instantiateStreaming) {
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

// Process registry and ID generator
class ProcessRegistry {
    constructor() {
        this.processes = new Map();
        this.nextId = 1;
        this.executionLogs = [];
    }

    generateId() {
        return this.nextId++;
    }

    register(process) {
        const id = this.generateId();
        this.processes.set(id, process);
        return id;
    }

    get(id) {
        return this.processes.get(id);
    }

    remove(id) {
        return this.processes.delete(id);
    }

    getAll() {
        return Array.from(this.processes.entries()).map(([id, process]) => ({
            id,
            language: process.language,
            status: process.status,
            createdAt: process.createdAt
        }));
    }

    addLog(entry) {
        this.executionLogs.push({
            ...entry,
            timestamp: new Date().toISOString()
        });
    }

    getLogs(limit = 100) {
        return this.executionLogs.slice(-limit);
    }

    clearLogs() {
        this.executionLogs = [];
    }
}

const registry = new ProcessRegistry();

class WasmProcess {

    constructor(language) {
        this.id = registry.generateId();
        this.language = language;
        this.status = 'initializing';
        this.createdAt = new Date().toISOString();
        this.metrics = {
            startTime: null,
            endTime: null,
            executionTime: null,
            memoryUsage: null
        };

        if (language === Langs.PYTHON) {
            this.executor = new PythonProcess();
        } else if (language === Langs.PHP) {
            this.executor = new PhpProcess();
        } else if (language === Langs.GO) {
            this.executor = new GolangProcess();
        } else {
            console.error("Unsupported language: " + language);
            this.status = 'error';
            return;
        }

        this.status = 'ready';
        registry.register(this);

        registry.addLog({
            processId: this.id,
            event: 'created',
            language: this.language
        });
    }

    getId() {
        return this.id;
    }

    getStatus() {
        return this.status;
    }

    getMetrics() {
        return this.metrics;
    }

    sendInput(input) {
        this.executor.sendInput(input);
        registry.addLog({
            processId: this.id,
            event: 'input',
            data: input
        });
    }

    sendCode(code, name, env = {}, args = []) {
        this.status = 'running';
        this.metrics.startTime = performance.now();

        registry.addLog({
            processId: this.id,
            event: 'execution_started',
            language: this.language,
            args: args
        });

        this.executor.sendCode(code, name, env, args);
    }

    onOutput(cb) {
        this.executor.onOutput = (output) => {
            registry.addLog({
                processId: this.id,
                event: 'stdout',
                data: output
            });
            cb(output);
        };
    }

    onError(cb) {
        this.executor.onError = (error) => {
            this.status = 'error';
            registry.addLog({
                processId: this.id,
                event: 'stderr',
                data: error
            });
            cb(error);
        };
    }

    onResult(cb) {
        this.executor.onResult = (result) => {
            this.status = 'finished';
            this.metrics.endTime = performance.now();
            this.metrics.executionTime = this.metrics.endTime - this.metrics.startTime;

            if (performance.memory) {
                this.metrics.memoryUsage = performance.memory.usedJSHeapSize;
            }

            registry.addLog({
                processId: this.id,
                event: 'execution_completed',
                resultCode: result,
                executionTime: this.metrics.executionTime,
                memoryUsage: this.metrics.memoryUsage
            });

            cb(result);
        };
    }

    terminate() {
        this.status = 'terminated';
        registry.addLog({
            processId: this.id,
            event: 'terminated'
        });
        this.executor.terminate();
        registry.remove(this.id);
    }

    // Static methods for process management
    static getProcess(id) {
        return registry.get(id);
    }

    static getAllProcesses() {
        return registry.getAll();
    }

    static getLogs(limit) {
        return registry.getLogs(limit);
    }

    static clearLogs() {
        registry.clearLogs();
    }
}

const Langs = Object.freeze({
    PHP: 'php',
    PYTHON: 'python',
    GO: 'go',
});

// Global instances
const dependencyManager = new DependencyManager();
const virtualFS = new VirtualFileSystem();

// Add static methods to access global instances
WasmProcess.getDependencyManager = () => dependencyManager;
WasmProcess.getVirtualFS = () => virtualFS;

export { WasmProcess, Langs, DependencyManager, VirtualFileSystem };