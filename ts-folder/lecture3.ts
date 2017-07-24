// /**
//  * Case insensitive sorting for string arrays
//  */

 const foo = [
 	'Alpha',
 	'beta',
 	'Gamma',
 	'delta'
 ];
 foo.sort();
 foo.forEach(x => console.log(x));
 // A -> G -> b -> d

 foo.sort((a, b) => a.toLowerCase()
 .localeCompare(b.toLowerCase()));
 foo.forEach(x => console.log(x));
 // A -> b -> d -> G