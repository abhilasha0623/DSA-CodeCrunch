//How to sort an array of objects by property values ?

let Input=[
    { name: "Ram", age: 17 },
    { name: "Mohan", age: 30 },
    { name: "Shyam", age: 15 },
    { name: "Shyam", age: 17 },
]

function sortAge(inp){
    return inp.sort((a,b)=>a.age-b.age)
}
console.log(sortAge(Input))

//Out
// [
//     { name: 'Shyam', age: 15 },
//     { name: 'Ram', age: 17 },
//     { name: 'Shyam', age: 17 },
//     { name: 'Mohan', age: 30 }
// ]