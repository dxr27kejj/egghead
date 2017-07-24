"use strict";
exports.__esModule = true;
/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
function binarySearch(array, element, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = array.length - 1; }
    if (end < start)
        return -1;
    var middle = Math.floor((start + end) / 2);
    return element === array[middle]
        ? middle
        : element < array[middle]
            ? binarySearch(array, element, start, middle - 1)
            : binarySearch(array, element, middle + 1, end);
}
exports.binarySearch = binarySearch;
console.log(binarySearch([1, 2, 3, 4], 2));
