<?php

function worker(int $id, array $jobs, array &$results): void
{
    foreach ($jobs as $job) {
        echo "Worker $id started job $job\n";
        Fiber::suspend();
        echo "Worker $id finished job $job\n";
        $results[] = $job * 2;
    }
}

$jobs = [1, 2, 3, 4, 5];
$results = [];

$fibers = [];
foreach (range(1, 3) as $id) {
    $fibers[] = new Fiber(fn () => worker($id, $jobs, $results));
}

foreach ($fibers as $fiber) {
    $fiber->start();
}

while (count($results) < count($jobs)) {
    foreach ($fibers as $fiber) {
        if ($fiber->isSuspended()) {
            $fiber->resume();
        }
    }
}

print_r($results);