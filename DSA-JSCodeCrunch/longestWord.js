// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

let str='Web Development Tutorial'

function longestWord(str){
    let str1=str.split(" ")
    let output=str1[0]
    console.log(str1)
    for (let i=1;i<str1.length;i++){
        if(output.length<str1[i].length){
            output=str1[i]
        }
    }
    return output
}

console.log(longestWord(str))