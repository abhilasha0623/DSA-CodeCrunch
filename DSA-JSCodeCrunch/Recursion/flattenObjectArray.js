let arr=[1,2,3,{key:2},[4,[5,6]],7,8]

// function flattening(arr){
//     return arr.flat(Infinity)
// }

// console.log(flattening(arr))
function flattening(arr,flatenArryEle){
  
   for (let i=0;i<arr.length;i++){
       if(Array.isArray(arr[i])){
           flattening(arr[i],flatenArryEle)
       }else{
           
           flatenArryEle.push(arr[i])
       }
   }
   return flatenArryEle
}

console.log(flattening(arr,[]))




