//Sort an array of object

const arr = [
    {
      name: "Virat",
      age: 40
    },
      {
      name: "Rohit",
      age: 30
    },
      {
      name: "Bhuvi",
      age: 20
    },
      {
      name: "Raina",
      age: 33
    }
  ]
  
  function sortAge(arr){
   return arr.map((val)=>{return val.age}).sort((a,b)=>a-b)
  }
  
  console.log(sortAge(arr))
  //[20,30,33,40]
  