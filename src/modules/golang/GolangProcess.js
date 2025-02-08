import "@/modules/golang/wasm_exec.js";

class GolangProcess {
    constructor() {
        this.worker = new Worker(new URL('@/modules/golang/GolangWorker.js', import.meta.url), { type: 'module' })

        this.worker.onmessage = (event) => {

            const { type, result, error } = event.data;

            if (type === 'error' || type === 'stderr') {
                this.onError(error);
            }
            if (type === 'stdout') {
                this.onOutput(result);
            }
            if (type === 'stdin') {
                let input = prompt("STDIN:");
                this.worker.postMessage({ type: "stdin", result: input });
            }
            if (type === 'result') {
                this.onResult(result);
            }
        };
    }

    sendCode(code, name, env, args) {
        this.worker.postMessage({code, name, env, args});
    }

    terminate() {
        this.worker.terminate();
    }
}

export { GolangProcess };
