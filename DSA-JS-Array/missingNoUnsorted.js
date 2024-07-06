let arr=[2,6,8,3,5,7]

function missingNo(arr){
    let sum=1
    for(let i=2;i<-arr.length+1;i++){
        sum=sum+i;
        sum=sum-a[i-2]
    }
    return sum
}


console.log(missingNo(arr))
//Output: 1