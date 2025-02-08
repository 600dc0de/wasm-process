// pyodideWorker.js
self.importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js');

function postMessageAndWait(worker, message) {
    return new Promise((resolve) => {
        function handleResponse(event) {
            worker.removeEventListener("message", handleResponse);
            resolve(event.data);
        }
        worker.addEventListener("message", handleResponse);
        worker.postMessage(message);
    });
}

let pyodideReadyPromise = (async () => {
    /* global loadPyodide */
    self.pyodide = await loadPyodide();

    self.outputBuf = '';
    self.errorBuf = '';

    self.waitWrite = false;

    self.pyodide.setStdout({
        batched: false,
        write: (data) => {
            const decoder = new TextDecoder('utf-8');
            const result = decoder.decode(data);
            self.outputBuf += result;
            self.postMessage({ type: 'stdout', result: self.outputBuf });
            return result.length;
        }
    });
    self.pyodide.setStderr({
        batched: false,
        write: (data) => {
            const decoder = new TextDecoder('utf-8');
            const error = decoder.decode(data);
            self.errorBuf += error;
            self.postMessage({ type: 'stderr', error: self.errorBuf });
            return error.length;
        }
    });

    self.pyodide.setStdin({
        stdin: async () => {
            const data = await postMessageAndWait(self, {type: 'stdin'});
            return data.result;
        }
    });
})();

self.onmessage = async (event) => {
    await pyodideReadyPromise;

    try {
        const result = await self.pyodide.runPythonAsync(event.data);
        self.postMessage({ type: 'result', result });
    } catch (error) {
        self.postMessage({ type: 'error', error: error.message });
    }
    self.outputBuf = '';
    self.errorBuf = '';
};
