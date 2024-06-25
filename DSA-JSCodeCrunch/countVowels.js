//Count Vowels in the given string

let str="hello"

function countVowels(str){
    let strg= str.split("");
    let count =0;
    console.log(strg)
    let vowels=["a","e","i","o","u"]
    for(let i=0;i<strg.length;i++){
        if (vowels.includes(strg[i])){
            count+=1
        }
    }
    return count
}

console.log(countVowels(str)) //2