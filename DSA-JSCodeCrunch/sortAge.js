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
      return arr.sort((person1,person2)=>person1.age-person2.age)
  }
  
  console.log(sortAge(arr))

  //Output
//   [
//     { name: 'Bhuvi', age: 20 },
//     { name: 'Rohit', age: 30 },
//     { name: 'Raina', age: 33 },
//     { name: 'Virat', age: 40 }
//   ]
  