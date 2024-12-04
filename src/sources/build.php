<?php

// сборка go модулей

$sourceDir = __DIR__ . '/go';
$outputDir = __DIR__ . '/../../public/go';

`mkdir -p $outputDir`;
foreach (glob("$sourceDir/*") as $file)
{
    [$name, $ext] = explode('.', basename($file));
    `cd $sourceDir && mkdir -p $name && cp $file $name/main.go`;
    `cd $sourceDir/$name && go mod init $name`;
    `cd $sourceDir/$name && GOOS=js GOARCH=wasm go build -ldflags '-s -w' -o $name.wasm`;
    `mv $sourceDir/$name/$name.wasm $outputDir/$name.wasm && rm -Rf $sourceDir/$name`;
}

// сборка sources.json

function collectCode(string $dir): array
{
    $result = [];
    foreach (scandir($dir) as $item) {
        if ($item[0] === '.') continue;
        if ($item === 'build.php') continue;

        $path = "$dir/$item";
        if (is_dir($path)) {
            $result[$item] = collectCode($path);
        } elseif (preg_match('/\.(go|py|php)$/', $item)) {
            $name = pathinfo($item, PATHINFO_FILENAME);
            $result[$name] = file_get_contents($path);
        }
    }
    return $result;
}

$data = collectCode(__DIR__);
file_put_contents(
    __DIR__ . '/sources.json',
    json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
);


