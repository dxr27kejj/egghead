"use strict";
/**
 * Sorts an array using insertion sort
 */
exports.__esModule = true;
function insertionSort(array) {
    array = array.slice();
    console.log(array);
    for (var i = 1; i < array.length; i++) {
        var current = array[i];
        console.log({ section: array.slice(0, i), current: current });
        var j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    console.log(array);
    return array;
}
exports.insertionSort = insertionSort;
insertionSort([4, 3, 2, 1]);
