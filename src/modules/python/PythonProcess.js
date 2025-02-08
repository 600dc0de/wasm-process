class PythonProcess {
    constructor() {
        this.worker = new Worker(new URL('@/modules/python/PythonWorker.js', import.meta.url), { type: 'module' })

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

    sendCode(code) {
        this.worker.postMessage(code);
    }

    terminate() {
        this.worker.terminate();
    }
}

export { PythonProcess };
