//Find the two letters are anagram of each other?

// let str1="silent" 
// let str2="liste"   //False

// let str1="silent" 
// let str2="listen"   //True


function checkAnagram(str1,str2){
    let stng1=str1.split("").sort().join("")
    console.log(stng1)
     let stng2=str2.split("").sort().join("")
    console.log(stng2)
 return stng1 === stng2?true:false;
}

console.log(checkAnagram(str1,str2))