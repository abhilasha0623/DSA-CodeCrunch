function disemvowel(str){
    let strVal = str.toLowerCase().split("")
    let removeVowels=[]
    console.log(strVal)
    let vowels=["a","e","i","o","u"]
    for(let i=0;i<strVal.length;i++){
        if (!vowels.includes(strVal[i])){
            removeVowels.push(strVal[i])
        }
    }
    return removeVowels.join("")
}
console.log(disemvowel('This website is for losers LOL!')); 

//// 'Ths wbst s fr lsrs LL!'e