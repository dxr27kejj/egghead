"use strict";
/**
 * Sorts an array using merge sort
 */
exports.__esModule = true;
function mergeSort(array) {
    console.log(array);
    if (array.length <= 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
exports.mergeSort = mergeSort;
/** Merge (conquer) step of mergeSort */
function merge(left, right) {
    var array = [];
    var lIndex = 0;
    var rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
        var lItem = left[lIndex];
        var rItem = right[rIndex];
        if (lItem == null) {
            array.push(rItem);
            rIndex++;
        }
        else if (rItem == null) {
            array.push(lItem);
            lIndex++;
        }
        else if (lItem < rItem) {
            array.push(lItem);
            lIndex++;
        }
        else {
            array.push(rItem);
            rIndex++;
        }
    }
    console.log({ left: left, right: right, array: array });
    return array;
}
console.log(mergeSort([4, 3, 2, 1]));
