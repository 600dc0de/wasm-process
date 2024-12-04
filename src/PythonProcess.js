class PythonProcess {
    constructor() {
        this.worker = new Worker(new URL('@/PythonWorker.js', import.meta.url), { type: 'module' })

        // route messages and errors to callbacks
        this.worker.onmessage = (event) => {
            const { type, result, error } = event.data;

            if (type === 'error' || type === 'stderr') {
                this.onError(error);
            }
            if (type === 'stdout') {
                this.onOutput(result);
            }
            if (type === 'result') {
                this.onResult(result);
            }
        };
    }

    sendInput(input) {
        // TODO
        console.log('python input: ' + input)
    }

    sendCode(code) {
        this.worker.postMessage(code);
    }

    terminate() {
        this.worker.terminate();
    }
}

export { PythonProcess };
