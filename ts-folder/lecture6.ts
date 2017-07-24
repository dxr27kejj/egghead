// /**
//  * Bubble sort using TypeScript
//  */

export function bubbleSortConcept(array: number[]): number[] {
	array = array.slice();
	console.log(array);
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j+1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				console.log(array);
			}
		}
	}
	return array;
}
bubbleSortConcept([4, 3, 2, 1]);

// /**
//  * Idiomatic bubble sort iimplementation
//  */

export function bubbleSort(array: number[]): number[] {
	array = array.slice();
	while (true) {
		let swapped = false;
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j+1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return array;
}