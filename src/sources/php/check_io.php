<?php

foreach ($argv as $arg) {
    fwrite(STDOUT, "arg: " . $arg . PHP_EOL);
}

foreach ($_ENV as $key => $value) {
    fwrite(STDOUT, "env: " . $key . "=" . $value . PHP_EOL);
}

$stdinContent = fread(STDIN, 1024);
if ($stdinContent !== false && $stdinContent !== '') {
    fwrite(STDOUT, "from stdin: " . $stdinContent . PHP_EOL);
}

fwrite(STDOUT, "stdout message!" . PHP_EOL);
fwrite(STDERR, "stderr message!" . PHP_EOL);

$exitCode = (count($argv) > 1) ? 42 : 0;
exit($exitCode);
