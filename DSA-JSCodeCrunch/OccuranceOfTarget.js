//Count occurance of the given number
let str="google"
let target= "g"

let num = [2,3,4,5,6,7,7,7,2,2,2,2,2]
target =7
function countNumber(num,target){
    let alpha= num.split("") //String is used we need to split it
    console.log(alpha)
   return alpha.filter((x)=> x === target).length
}

console.log(countNumber(num,target))