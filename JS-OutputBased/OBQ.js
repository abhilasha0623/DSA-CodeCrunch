//Q-1
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

//Answer
console.log(1 < 2 < 3);
console.log(true < 3);
console.log(1 < 3); // True converted as 1 during comparison
True

//Answer
console.log(3 > 2 > 1);
console.log(true > 1);
console.log(1 > 1); // False converted as 0 during comparison
False

//Q-2
function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);

//   output: 3,2,3
//   In non-strict mode, the regular JavaScript functions allow duplicate named parameters.
//    The above code snippet has duplicate parameters on 1st and 3rd parameters. 
//    The value of the first parameter is mapped to the third argument which is passed to the function.
//     Hence, the 3rd argument overrides the first parameter.

// Note: In strict mode, duplicate parameters will throw a Syntax Error.

//Q-3

const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));

//ReferenceError: arguments is not defined






