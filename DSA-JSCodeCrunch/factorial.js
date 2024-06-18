//Find the factorial of the given number

function factorial (n){
    if(n === 0){
        return 1;
    }
    return n* factorial(n-1)
}

console.log(factorial(2)) // 2
console.log(factorial(5)) //120