import { PhpWeb } from 'php-wasm/PhpWeb.mjs';

class PhpProcess {
    constructor() {

        ////////////// testing features
        this.php = new PhpWeb({ini: `
            date.timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}
            tidy.clean_output=0
            expose_php=1
        `, sharedLibs: [
            `php${PhpWeb.phpVersion}-xml.so`,
            `php${PhpWeb.phpVersion}-dom.so`,
        ], files: [
            {
                name: 'icudt72l.dat',
                parent: '/persist/',
                url: 'https://unpkg.com/php-wasm-intl/icudt72l.dat'
            }
        ], persist: {mountPath: '/persist'}});
        //////////////

        this.outputBuffer = '';
        this.errorBuffer = '';

        this.php.addEventListener('output', (event) => {
            event.detail.forEach((part) => {
                this.outputBuffer += part;
                this.onOutput(this.outputBuffer);
            });
        });

        this.php.addEventListener('error', (event) => {
            event.detail.forEach((part) => {
                this.errorBuffer += part;
                this.onError(this.errorBuffer);
            });
        });

        this.result = null;
    }

    sendInput(input) {
        // TODO how call?
        console.log('php input: ' + input);
        this.php.inputString(input);
    }

    async sendCode(code, name, env, args) {
        this.outputBuffer = '';
        this.errorBuffer = '';

        const exitCode = await this.php.run(code);
        this.onResult(exitCode);
        this.terminate();
    }

    async terminate() {
        await this.php.refresh();
        await this.php.flush();
    }
}

export { PhpProcess };
