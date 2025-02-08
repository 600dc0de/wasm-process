import "@/modules/golang/wasm_exec.js";

let init = (async () => {
    // eslint-disable-next-line no-undef
    self.go = new Go();

    const decoder = new TextDecoder("utf-8");

    // Instance-specific output and error buffers
    self.outputBuf = '';
    self.errorBuf = '';

    global.fs.read = function(fd, buffer, offset, length, position, callback) {
        if (fd !== 0) {
            callback(null, 0);
            return;
        }

        const input = prompt("STDIN:");

        if (input === null) {
            callback(null, 0);
            return;
        }

        const bytes = new TextEncoder().encode(input);
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

    self.outputBuf = '';
    self.errorBuf = '';

    const path = "/go/" + event.data.name + ".wasm";

    let result = await WebAssembly.instantiateStreaming(fetch(path), self.go.importObject);

    self.go.run(result.instance).catch((err) => {
        self.postMessage({ type: 'error', error: err.message });
    });
};
