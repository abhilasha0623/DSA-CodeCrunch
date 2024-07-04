// Sort the array and then pick the 
// first three largest elements

const inputArray = [12, 56, 7, 89, 43, 21];
function Largest(inputArray){
   let sorted = inputArray.sort((a,b)=>b-a) 
   const[frst,secnd,third]=sorted
   return [frst,secnd,third]
}

console.log(Largest(inputArray))

//Output
//[ 89, 56, 43 ]