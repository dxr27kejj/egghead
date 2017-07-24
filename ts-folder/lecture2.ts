/**
 * Sort arrays in TypeScript
 */

const arr: ReadonlyArray<string> = ['foo', 'bar'];
const copy = arr.slice().sort();
console.log({ arr });
console.log({ copy });

const foo = [1, 3, 22];
foo.sort();
console.log(foo.map(x => x.toString()));
// 1, 22, 3

foo.sort((a, b) => a - b);
console.log(foo);
// 1, 3, 22

const movies = [
	{
		name: 'The Shawshank Redemption',
		year: 1994,
	},
	{
		name: 'The Godfather',
		year: 1972,
	},
	{
		name: 'The Godfather: Part II',
		year: 1974,
	},
	{
		name: 'The Dark Knight',
		year: 2008,
	},
];
movies.sort((a, b) => a.year - b.year);
console.log(movies.map(movie => movie.name));
