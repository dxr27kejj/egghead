// /**
//  * Quicksort algorithm using TypeScript
//  */

 export function quickSort(array: number[]): number[] {
 	array = array.slice();
 	partition(array, 0, array.length);
 	return array;
 }

// /**
//  * Partitions the [start, before) index of the array
//  */

function partition(array: number[], start: number, before: number): void {
	const length = before - start;
	if(length <= 1) return;

	const pivotIndex = start + Math.floor(Math.random() * length);
	[array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

	const pivot = array[start];
	let pivotRank = start;

	for (let index = start + 1; index < before; index++) {
		if (array[index] < pivot) {
			pivotRank++;
			[array[index], array[pivotIndex]] = [array[pivotIndex], array[index]];

		}
	}

	if (pivotRank !== start) {
		[array[pivotIndex], array[start]] = [array[start], array[pivotIndex]];
	}

	partition(array, start, pivotRank);
	partition(array, pivotRank + 1, before);
}
