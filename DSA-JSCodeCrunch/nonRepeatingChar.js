console.log(firstNonRepeatingChar("swiss"));
// Output: "w"

console.log(firstNonRepeatingChar("hello"));
// Output: "h"

function firstNonRepeatingChar(a){
    let obj1={}
    let str1=a.split("")
    console.log(str1)
    for(let i=0;i<str1.length;i++){
      if(!obj1[str1[i]])  {
          obj1[str1[i]]=1
      }else{
          obj1[str1[i]]+=1; 
      }
    }
  for (key in obj1) {
    if (obj1[key] == 1) {
      return key;
    }
  }
}