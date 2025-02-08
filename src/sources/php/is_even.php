<?php

function isEven(int $number): string
{
    return $number % 2 == 0 ? "Чётное" : "Нечётное";
}

echo isEven(7);