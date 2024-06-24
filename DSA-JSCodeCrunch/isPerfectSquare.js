function isPerfectSqroot(n){
    return Math.sqrt(n)%1 == 0
}

console.log(isPerfectSqroot(15)) // false
console.log(isPerfectSqroot(16)) // true