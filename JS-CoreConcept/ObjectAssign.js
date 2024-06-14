//Object Method
//Output
// {
//     age: 30,
//     firstName: "abhi",
//     lastName: "gowda"
//   }


const person={
    firstName:"abhi",
    lastName:"gowda",
    age:30
    }
    
    let personCopy=Object.assign({},person)
    
    console.log(personCopy)