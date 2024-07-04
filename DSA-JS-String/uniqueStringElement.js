function findUnique(str) {
    return [...str].reduce((acc, curr) => {
        return acc.includes(curr) ? acc : acc + curr;
    }, "")
}

console.log(findUnique("Geeksforgeeks"))
console.log(findUnique("Geeksforgeeks Is great"))


//Output
// Geksforg
// Geksforg Iat