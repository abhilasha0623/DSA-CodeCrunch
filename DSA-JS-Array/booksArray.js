const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] ,age:21},
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"],age:26 },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"],
    age:18 },
  ];
  
  
  
  function booksarrray(friends){
      let booksDetails= friends.reduce((ac,c)=>{
         return [...ac,...c.books]
      },[])
      return booksDetails
  }
  
  console.log(booksarrray(friends))
  
//OutPut
//   [
//     'Bible',
//     'Harry Potter',
//     'War and peace',
//     'Romeo and Juliet',
//     'The Lord of the Rings',
//     'The Shining'
//   ]