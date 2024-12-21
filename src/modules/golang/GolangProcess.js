import "@/modules/golang/wasm_exec.js";

class GolangProcess {
    constructor() {
        // eslint-disable-next-line no-undef
        this.go = new Go();

        const decoder = new TextDecoder("utf-8");
        const self = this;

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
                self.onOutput(self.outputBuf);
            }
            if (fd === 2) {
                self.errorBuf += decoder.decode(buf);
                self.onError(self.errorBuf);
            }
            return buf.length;
        };
    }

    async sendCode(code, name, env = {}, args = []) {
        this.go.exit = this.onResult;
        this.go.env = env;
        this.go.argv = args;

        this.outputBuf = '';
        this.errorBuf = '';

        let result = await WebAssembly.instantiateStreaming(fetch("go/" + name + ".wasm"), this.go.importObject)
        this.go.run(result.instance).catch((err) => {
            this.onError(err.message || "Неизвестная ошибка");
        });
    }

    terminate() {
    }
}

export { GolangProcess };
