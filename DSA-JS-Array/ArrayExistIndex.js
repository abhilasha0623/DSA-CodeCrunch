//How to Check a Value Exist at Certain Array Index in JavaScript ?

let arr = [1, 2, 3, 4, 5];
let n = 3;


function checkNumberExist(arr,n){
    if(n in arr){
        return arr.indexOf(n)
    }
}

console.log(checkNumberExist(arr,n))