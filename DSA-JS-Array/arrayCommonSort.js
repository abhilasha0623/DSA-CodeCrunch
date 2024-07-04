//How to get the same value from another array and assign to object of arrays ?

//How to create an object from two arrays in JavaScript?
let arr1 = [1, 2, 3, 4, 5, 
    77, 876, 453];

// Define second array
let arr2 = [1, 2, 45, 4, 231, 453];

let newAr=[]

function newArrayFilter(arr1,arr2){
for (let i=0;i<arr1.length;i++){
if(arr2.includes(arr1[i])){
    newAr.push(arr1[i])
}
}
return newAr
}

console.log(newArrayFilter(arr1,arr2))
//[ 1, 2, 4, 453 ]