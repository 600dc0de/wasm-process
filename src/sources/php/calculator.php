<?php

function calculator($a, $b, $operation) {
    switch ($operation) {
        case '+': return $a + $b;
        case '-': return $a - $b;
        case '*': return $a * $b;
        case '/': return $b != 0 ? $a / $b : 'Деление на ноль';
        default: return 'Неизвестная операция';
    }
}

echo calculator(10, 5, '+');