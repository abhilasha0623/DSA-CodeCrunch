//find the missing elements in thae array from 1 to 10 sorted arrray
//output  [4, 6, 8]
let arr=[1,2,3,5,7,9,10]

function missingEle(arr){
let missEle=[]
let minNum=Math.min(...arr)
let maxNum=Math.max(...arr)
for(let i=minNum; i<maxNum;i++){
 if(arr.indexOf(i)<0) {
 //when indexOf(4) is searched we dont get hence it return -1,which is less than 0 hence push the i to new array
 missEle.push(i)
 }
}
return missEle
}

console.log(missingEle(arr))