// /**
//  * Case insensitive sorting for string arrays
//  */
var foo = [
    'Alpha',
    'beta',
    'Gamma',
    'delta'
];
foo.sort();
foo.forEach(function (x) { return console.log(x); });
// A -> G -> b -> d
foo.sort(function (a, b) { return a.toLowerCase()
    .localeCompare(b.toLowerCase()); });
foo.forEach(function (x) { return console.log(x); });
// A -> b -> d -> G 
