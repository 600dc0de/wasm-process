import { PhpWeb } from 'php-wasm/PhpWeb.mjs';

class PhpProcess {
    constructor() {
        this.php = new PhpWeb();

        this.php.addEventListener('output', (event) => {
            const data = event.detail.join("\n");
            this.onOutput(data)
        });
        this.php.addEventListener('error', (event) => {
            const data = event.detail.join("\n");
            this.onError(data)
        });

        this.result = null;
    }

    sendInput(input) {
        // TODO
        console.log('php input: ' + input);
        // this.php.inputString(input);
    }

    async sendCode(code) {
        const exitCode = await this.php.run(code);
        this.onResult(exitCode);
    }

    async terminate() {
        await this.php.refresh();
    }
}

export { PhpProcess };
