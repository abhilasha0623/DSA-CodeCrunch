function sum (x){
    return function(y){
        return x+y;
    }
}

let Total=sum(5)

console.log(Total(3))

// It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution.
//  The closure has three scope chains. Own scope where variables defined between its curly brackets Outer function's variables
// Global variables