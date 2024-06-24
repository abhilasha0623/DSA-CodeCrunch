//Extract number from the string
function extractNum(str){
    let numArray=[]
    let strVal = str.split("")
    console.log(strVal)
    for(let i=0;i<strVal.length;i++){
      if(!isNaN(strVal[i])){
        numArray.push(strVal[i])
      }  
    }
    return numArray
}
console.log(extractNum("jhkj7682834")) //[7,6,8,2,8,3,4]