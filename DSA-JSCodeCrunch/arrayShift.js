let ar=[1,3,0,4,0,4,2,1,0,0,3,4,5,6,7]

function arrayShift(ar){
    let nonZeroArray=[];
    let zeros=0;
  for (let i=0;i<ar.length;i++){
      if(ar[i]!=0){
          nonZeroArray.push(ar[i])
      }else{
          zeros++
          console.log(zeros)
      }
}
for(let i=0;i<zeros;i++){
    nonZeroArray.push(0)
}
 
 return nonZeroArray
}


console.log(arrayShift(ar))