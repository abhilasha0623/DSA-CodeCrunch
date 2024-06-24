//Find the maximum number in the below array
 
function findMax(arr){
    let max=0
    if(arr.length === 0){
        return -1
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
           max= arr[i]
        }
    }
    return max
}

console.log(findMax([6,10, 9, 8, 7, 6]))  //10