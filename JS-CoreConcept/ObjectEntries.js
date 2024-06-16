//Entries Method
// [["firstName", "John"], ["lastName", "Doe"], ["age", 50], ["eyeColor", "blue"]]

const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
  let personDetails = Object.entries(person)
  
  console.log(personDetails)