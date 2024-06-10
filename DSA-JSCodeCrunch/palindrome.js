// Write a JavaScript function to check if a given string is a palindrome
// (reads the same forwards and backwards). 


let str="madama"
function checkPalindrome(str){
let res = str.split("").reverse().join("")
 return res=== str? "Palindrome" : "NotPalindrome"
}

console.log(checkPalindrome(str))