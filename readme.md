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

#### Базовый пример

    import {WasmProcess, Langs} from "@/WasmProcess";

    // создаем новый процесс
    const pm = new WasmProcess(Langs.PYTHON);

    // обработчики вывода
    pm.onOutput((out) => {
        console.log("std output: " + out);
    });
    pm.onError((error) => {
        console.log("std error: " + error);
    });
    pm.onResult((code) => {
        console.log("Result code: " + code);
    });

    // выполнение кода
    pm.sendCode(
        'print(2 + 2 ** 10)',          // code
        'script.py',                    // name
        {foo:1, bar: 2},               // envs
        ['-c', 'print(2 + 2 ** 10)']   // args
    );

#### Работа с ID процессов

    // получить ID процесса
    const processId = pm.getId();
    console.log("Process ID:", processId);

    // получить процесс по ID
    const process = WasmProcess.getProcess(processId);

    // получить все процессы
    const allProcesses = WasmProcess.getAllProcesses();
    console.log("Active processes:", allProcesses);

    // получить статус процесса
    console.log("Status:", pm.getStatus());

#### Метрики производительности

    // получить метрики выполнения
    const metrics = pm.getMetrics();
    console.log("Execution time:", metrics.executionTime, "ms");
    console.log("Memory usage:", metrics.memoryUsage, "bytes");

#### Логирование

    // получить логи выполнения
    const logs = WasmProcess.getLogs(50); // последние 50 записей
    console.log("Execution logs:", logs);

    // очистить логи
    WasmProcess.clearLogs();

#### Виртуальная файловая система

    import {VirtualFileSystem} from "@/WasmProcess";

    const vfs = WasmProcess.getVirtualFS();

    // создать директорию
    vfs.mkdirp('/app/src');

    // записать файл
    vfs.writeFile('/app/src/test.py', 'print("Hello from VFS")');

    // прочитать файл
    const file = vfs.readFile('/app/src/test.py');
    console.log(file.content);

    // список файлов в директории
    const files = vfs.readdir('/app/src');
    console.log(files.entries);

    // статистика файловой системы
    const stats = vfs.getStats();
    console.log("Files:", stats.files, "Total size:", stats.totalSize);

#### Управление зависимостями

    import {DependencyManager} from "@/WasmProcess";

    const depManager = WasmProcess.getDependencyManager();

    // зарегистрировать зависимость
    depManager.registerDependency('python', 'numpy', '1.24.0');
    depManager.registerDependency('python', 'pandas', '2.0.0');

    // отметить как установленную
    depManager.markAsInstalled('python', 'numpy');

    // получить все зависимости для языка
    const pythonDeps = depManager.getDependencies('python');
    console.log("Python dependencies:", pythonDeps);

    // проверить установку
    const isInstalled = depManager.isInstalled('python', 'numpy');
    console.log("numpy installed:", isInstalled);

    // статистика зависимостей
    const stats = depManager.getStats();
    console.log("Dependency stats:", stats);

### Зависимости

Для php используется [php-wasm](https://php-wasm.seanmorr.is/)  
Для python используется [pydiode](https://pyodide.org/en/stable/)  

### Аналоги

https://livecodes.io/docs/  
https://wasmer.io/  

### Roadmap

- ✅ virtual file system - реализована виртуальная файловая система
- ✅ работа с id процессов - добавлена система ID и registry для управления процессами
- ✅ performance debug tools - метрики производительности (время выполнения, использование памяти)
- ✅ лог запусков - система логирования всех событий процессов
- ✅ управление зависимостями - менеджер зависимостей для модулей
- ✅ параллельное выполнение - уже реализовано
- ⏳ networking - планируется
- ⏳ управление модулями для интерпретаторов - частично реализовано (Langs)
