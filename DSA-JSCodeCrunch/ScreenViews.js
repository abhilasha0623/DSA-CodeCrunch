let arr=[6,3,4,11,10,14,17]


function maxViewers(arr){
    let maxVal=arr[0]
  let output=[]
    for (let i=1;i<arr.length;i++){
        console.log(maxVal)
        if(arr[i]>maxVal){
            maxVal=arr[i]
            output.push(arr[i])
        }
    }
    return output;
}

console.log(maxViewers(arr))


//output [6,11,14,17]