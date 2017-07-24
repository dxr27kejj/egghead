/**
 * Sorts an array using insertion sort
 */

export function insertionSort(array: number[]): number[] {
    array = array.slice();
    console.log(array);
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        console.log({ section: array.slice(0, i), current });
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current; 
    }
    console.log(array);
    return array;
}
insertionSort([4, 3, 2, 1]);