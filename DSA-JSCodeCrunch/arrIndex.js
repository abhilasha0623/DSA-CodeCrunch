//Find the index of the give array Element

const arr = [1, 8, 4, 6, 3, 9];
let target = 9;

function searchIndex(arr,target){
for (let i=0;i<arr.length;i++){
 if(arr[i]===target){
 return i
 }
}
}

console.log(searchIndex(arr,target))