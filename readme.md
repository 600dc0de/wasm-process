## WASM process

WASM process позволяет управлять wasm модулями как процессами в OC

- поддержка стандартных потоков ввода / вывода
- аргументы и переменные окружения
- код возврата
- встроенные модули для PHP, Python, Golang

### DEMO

    yarn install && yarn serve
    
### Установка

    yarn add wasm-process

### Использование

    import {WasmProcess, Modules} from "@/WasmProcess";

    // указываем имя wasm модуля (встроенные модули в объекте Modules)

    this.pm = new WasmProcess(Modules.PYTHON);

    // обработчики вывода

    this.pm.onOutput((out) => {
        console.log("std output: " + out);
    });
    this.pm.onError((error) => {
        console.log("std error: " + error);
    });
    this.pm.onResult((code) => {
        console.log("Result code: " + code);
    });

    // выполнение кода

    this.pm.run(
        {foo:1, bar: 2},               // envs
        ['-c', 'print(2 + 2 ** 10)'],  // args
    );

### Зависимости

Для php используется [php-wasm](https://php-wasm.seanmorr.is/)  
Для python используется [pydiode](https://pyodide.org/en/stable/)  

### Аналоги

https://livecodes.io/docs/  
https://wasmer.io/  

### Roadmap

- virtual file system
- работа с id процессов
- networking
- управление модулями для интерпретаторов
- управление зависимостями
- performance debug tools
- лог запусков
- параллельное выполнение
