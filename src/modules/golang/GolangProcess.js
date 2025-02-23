
const BUFFER_SIZE = 1024;
const inputBuffer = new SharedArrayBuffer(BUFFER_SIZE);
const sharedArray = new Uint8Array(inputBuffer);
const controlArray = new Int32Array(inputBuffer, BUFFER_SIZE - 8, 2); // Флаги управления
const encoder = new TextEncoder();

function sendStringToWorker(str) {
    const encoded = encoder.encode(str);
    if (encoded.length > BUFFER_SIZE - 8) {
        throw new Error("Строка слишком длинная!");
    }

    sharedArray.set(encoded, 0);

    Atomics.store(controlArray, 0, encoded.length); // Длина строки
    Atomics.store(controlArray, 1, 1); // Флаг "готово"
    Atomics.notify(controlArray, 1); // Оповещаем воркер
}

class GolangProcess {
    constructor() {
        this.worker = new Worker(new URL('@/modules/golang/GolangWorker.js', import.meta.url), { type: 'module' })

        this.worker.onmessage = (event) => {

            const { type, result } = event.data;

            if (type === 'error' || type === 'stderr') {
                this.onError(result);
            }
            if (type === 'stdout') {
                this.onOutput(result);
            }
            if (type === 'stdin') {
                let input = prompt("STDIN:");
                sendStringToWorker(input);
            }
            if (type === 'result') {
                this.onResult(result);
            }
        };
    }

    sendCode(code, name, env, args) {
        this.worker.postMessage({code, name, env, args, inputBuffer});
    }

    terminate() {
        this.worker.terminate();
    }
}

export { GolangProcess };
