<?php

function calculator(float $a, float $b, string $operation): ?float
{
    return match ($operation) {
        '+' => $a + $b,
        '-' => $a - $b,
        '*' => $a * $b,
        '/' => $a / $b,
        default => null,
    };
}

echo calculator(10, 5, '+');