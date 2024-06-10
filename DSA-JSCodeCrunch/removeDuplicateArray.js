//Get Unique and duplicate elements in an array

let arr=[1,3,2,3,4,5,6,6,5,8,7]
//Filter method [1, 3, 2, 4, 5, 6, 8, 7]
function uniqueArrayEle(arr){
return arr.filter((ele,index)=>arr.indexOf(ele) === index)
}
//new Set method [1, 3, 2, 4, 5, 6, 8, 7]
function uniqueArrayEleSetMethod(arr){
return [...new Set(arr)]
}
//Get the duplicated Elements [3, 6, 5]
function duplicatedArrayEle(arr){
return arr.filter((ele,index)=>arr.indexOf(ele) !== index)
}




console.log(uniqueArrayEle(arr))
console.log(uniqueArrayEleSetMethod(arr))
console.log(duplicatedArrayEle(arr))