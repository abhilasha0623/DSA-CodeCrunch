function possibleCombinations(str){
    let combination=[]  
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            combination.push(str.slice(i,j))
        }
    }
    return combination
  }
  
  
  
  
  
  console.log(possibleCombinations('Dog'));
  //[ 'D', 'Do', 'Dog', 'o', 'og', 'g' ]