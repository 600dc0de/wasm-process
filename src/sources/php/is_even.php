<?php

function isEven($number) {
    return $number % 2 == 0 ? "Чётное" : "Нечётное";
}

echo isEven(7);