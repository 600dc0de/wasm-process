<?php

function daysUntil($date) {
    $target = strtotime($date);
    $today = strtotime(date('Y-m-d'));
    return ceil(($target - $today) / 86400);
}

echo daysUntil('2024-12-31');