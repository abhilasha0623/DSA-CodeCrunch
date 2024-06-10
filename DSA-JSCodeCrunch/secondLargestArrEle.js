//find the second largest number in the array

let num=[2,5,8,3,4,66,22,54,33,0,334,234,763]

function secondLargest(num){
let result=num.sort((a,b)=>b-a)
return result[1]
}

console.log(secondLargest(num))