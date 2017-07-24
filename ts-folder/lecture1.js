/**
 * Understand the FizzBuzz coding problem and its solution
 */
for (var index = 1; index < 101; index++) {
    var isFizz = index % 3 === 0;
    var isBuzz = index % 5 === 0;
    var result = isFizz && isBuzz
        ? 'FizzBuzz'
        : isFizz
            ? 'Fizz'
            : isBuzz
                ? 'Buzz'
                : index;
    console.log(result);
}
