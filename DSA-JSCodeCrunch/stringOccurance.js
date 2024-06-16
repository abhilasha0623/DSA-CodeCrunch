//Find the character frequency of the given word
//[ g: 2, o: 2, l: 1, e: 1 ]
function capitalizeWords(str){
    let word= str.split("");
    console.log(word)
  let countNumber = word.reduce((ar,alpha)=>{
      if(alpha in ar){
          ar[alpha]++
      }else{
          ar[alpha]=1;
      }
      return ar
  },[])
   return countNumber
 }
 
 console.log(capitalizeWords("google"))