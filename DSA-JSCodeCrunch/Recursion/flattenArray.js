function flattening(arr,flatenArryEle){
  
    for (let i=0;i<arr.length;i++){
        if(typeof arr[i] === "number"){
            flatenArryEle.push(arr[i])
        }else{
            flattening(arr[i],flatenArryEle)
        }
    }
    return flatenArryEle
 }
 
 console.log(flattening(arr,[]))

 
 let arr=[1,2,3,[4,[5,6]],7,8]
 