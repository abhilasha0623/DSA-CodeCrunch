//Write a JavaScript function that returns a string that has letters in alphabetical order.

let str="webmaster"
function sortAlphabets(str){
    let str1=str.split("")
    console.log(str1)
    return str1.sort()
    
}

console.log(sortAlphabets(str))