<?php

$stdOut = fopen('php://stdout', 'w');
$stdErr = fopen('php://stderr', 'w');
$stdIn = fopen('php://stdin', 'r');

$argv = get_defined_vars();
/*
foreach ($argv as $arg) {
    fwrite($stdOut, "arg: " . $arg . PHP_EOL);
}
*/

var_dump(glob('/persist/*'));

foreach ($_ENV as $key => $value) {
    fwrite($stdOut, "env: " . $key . "=" . $value . PHP_EOL);
}

$stdinContent = fread($stdIn, 1024);
if ($stdinContent !== false && $stdinContent !== '') {
    fwrite($stdOut, "from stdin: " . $stdinContent . PHP_EOL);
}

fwrite($stdOut, "stdout message!" . PHP_EOL);
fwrite($stdErr, "stderr message!" . PHP_EOL);

$exitCode = (count($argv) > 1) ? 42 : 0;
exit($exitCode);