import { PythonProcess } from "@/PythonProcess";
import { GolangProcess } from "@/GolangProcess";
import { PhpProcess } from "@/PhpProcess";

// polyfill
if (!WebAssembly.instantiateStreaming) {
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

class WasmProcess {

    constructor(language) {
        if (language === Langs.PYTHON) {
            this.executor = new PythonProcess();
            return;
        }
        if (language === Langs.PHP) {
            this.executor = new PhpProcess();
            return;
        }
        if (language === Langs.GO) {
            this.executor = new GolangProcess();
            return;
        }
        console.error("Unsupported language: " + language);
    }

    sendInput(input) {
        this.executor.sendInput(input);
    }
    sendCode(code, name, env = {}, args = []) {
        this.executor.sendCode(code, name, env, args);
    }

    onOutput(cb) {
        this.executor.onOutput = cb;
    }
    onError(cb) {
        this.executor.onError = cb;
    }
    onResult(cb) {
        this.executor.onResult = cb;
    }

    terminate() {
        this.executor.terminate();
    }
}

const Langs = Object.freeze({
    PHP: 'php',
    PYTHON: 'python',
    GO: 'go',
});

export { WasmProcess, Langs };