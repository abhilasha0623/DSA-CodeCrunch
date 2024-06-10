// Promise Chaining Concept; 

let getUsers= new Promise((resolve,reject)=>{
    const user = {
    name:"abhi",
    address:"bengaluru",
    permission:["db","hr","bt"]
    }
    resolve(user)
    if(user.permission.includes("hr")){
      throw new Error("This user is not permitted");
    }
    })

    getUsers.then((user)=>{
    console.log(`${user.name}`)
    return user.address;
    }).then((add)=>
    console.log(`the address is ${add}`))
    .catch((error)=>{
    console.log(error)
    })


    //Chaining a Promise With an example of incremental number update
    //finally doesnot have any arguments like then


    let number= new Promise((resolve,reject)=>{
        resolve(10)
    })

    number.then((num)=>{
         return num+10
    }).then((num)=>{
       return num+10
    }).then((num)=>{
     num= num+10
        console.log(num)
    }).finally(()=>{
    console.log("completed")
    })