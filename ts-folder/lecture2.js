/**
 * Sort arrays in TypeScript
 */
var arr = ['foo', 'bar'];
var copy = arr.slice().sort();
console.log({ arr: arr });
console.log({ copy: copy });
var foo = [1, 3, 22];
foo.sort();
console.log(foo.map(function (x) { return x.toString(); }));
// 1, 22, 3
foo.sort(function (a, b) { return a - b; });
console.log(foo);
// 1, 3, 22
var movies = [
    {
        name: 'The Shawshank Redemption',
        year: 1994
    },
    {
        name: 'The Godfather',
        year: 1972
    },
    {
        name: 'The Godfather: Part II',
        year: 1974
    },
    {
        name: 'The Dark Knight',
        year: 2008
    },
];
movies.sort(function (a, b) { return a.year - b.year; });
console.log(movies.map(function (movie) { return movie.name; }));
