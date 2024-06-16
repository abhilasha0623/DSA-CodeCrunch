//capitalize each beginning letter of the array
//Hello World
function capitalizeWords(str){
    let word= str.split(" ");
    console.log(word)
   let captilized= word.map((ele)=>{
        let firstLetter=ele.charAt(0).toUpperCase();
        let lastLetter = ele.slice(1)
        console.log(lastLetter)
       return firstLetter + lastLetter
    })
    return captilized.join(" ")
 }
 
 console.log(capitalizeWords("hello world"))