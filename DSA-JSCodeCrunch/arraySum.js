/*
Find the Sum of All Elements in an Array
*/


let num=[1,3,4,5,6]

function sumArray(num){
let sum=0;
for(let i=0;i<num.length;i++){
sum+=num[i]
}
return sum
}

console.log(sumArray(num))