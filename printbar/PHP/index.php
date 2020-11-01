<?php

/**
 * Возвращает массив с наиболее часто встречающимися словами и их количеством
 *
 * @param string $text     Текст со словами
 * @param int $limit       Максимальное количество возвращаемых слов
 * @return array
 */
function takeFiveMostFrequentWords(string $text, int $limit = 5)
{
    // Создание массива со словами из изначальной строки и подсчёт элементом в нём
    $wordsArray = explode(" ", $text);
    $amountOfWords = array_count_values($wordsArray);

    // Сортировка массива в порядке убывания и выбор первых $limit элементов в нём
    arsort($amountOfWords);
    array_splice($amountOfWords, $limit);

    return $amountOfWords;
}

$inputString = "aa aa aa aa bb bb bb bb cc cc cc dd dd dd ee ee ff ff ff ff ff";

$result = takeFiveMostFrequentWords($inputString);

echo '5 наиболее частых слов:<br><pre>' . print_r($result, true) . '</pre>';
