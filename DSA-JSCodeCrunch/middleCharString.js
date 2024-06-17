//get the middle Character from the string given below:

//output//  agnificien

function getMiddle(str){
    let str1 =str.split("") 
    console.log(str1)
    //return str1.substring(1,str.length-2)
    return str.substring(1,str.length-1)
   
}
console.log(getMiddle('magnificient')); 