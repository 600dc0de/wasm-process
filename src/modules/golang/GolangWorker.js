import "@/modules/golang/wasm_exec.js";

let init = (async () => {
    // eslint-disable-next-line no-undef
    self.go = new Go();

    const decoder = new TextDecoder("utf-8");

    // Instance-specific output and error buffers
    self.outputBuf = '';
    self.errorBuf = '';

    global.fs.read = async function(fd, buffer, offset, length, position, callback) {
        if (fd !== 0) {
            callback(null, 0);
            return;
        }
        self.postMessage({ type: 'stdin' });

        Atomics.wait(self.controlArray, 1, 0);

        const bufLen = Atomics.load(self.controlArray, 0);
        const bytes = self.sharedArray.slice(0, bufLen);
        Atomics.store(self.controlArray, 1, 0);

        const toRead = Math.min(length, bytes.length - position);
        for (let i = 0; i < toRead; i++) {
            buffer[offset + i] = bytes[position + i];
        }
        callback(null, toRead);
    };

    global.fs.writeSync = function(fd, buf) {
        if (fd === 1) {
            self.outputBuf += decoder.decode(buf);
            self.postMessage({ type: 'stdout', result: self.outputBuf });
        }
        if (fd === 2) {
            self.errorBuf += decoder.decode(buf);
            self.postMessage({ type: 'stderr', result: self.errorBuf });
        }
        return buf.length;
    };
})();

self.onmessage = async (event) => {
    await init;

    self.go.exit = (result) => {
        self.postMessage({ type: 'result', result });
    };

    self.go.env = event.data.env;
    self.go.argv = event.data.args;

    self.inputBuffer = event.data.inputBuffer;
    self.sharedArray = new Uint8Array(self.inputBuffer);
    self.controlArray = new Int32Array(self.inputBuffer, self.inputBuffer.byteLength - 8, 2);

    self.outputBuf = '';
    self.errorBuf = '';

    const path = "/go/" + event.data.name + ".wasm";

    let result = await WebAssembly.instantiateStreaming(fetch(path), self.go.importObject);

    self.go.run(result.instance).catch((err) => {
        self.postMessage({ type: 'error', error: err.message });
    });
};
