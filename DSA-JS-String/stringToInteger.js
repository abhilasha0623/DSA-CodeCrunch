// How to convert a string into a integer without using parseInt() function in JavaScript ?

let str = "100";
let output=  (+str)
console.log(typeof(output)) //Number

let str1="a b c"
let output1= Number(str1)
console.log(typeof(output1)) //Number

let str2="4"
let output3= str2*1
console.log(typeof(output3)) //Number