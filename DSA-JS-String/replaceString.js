const str = 'Welcome GeeksforGeeks, Welcome geeks';

function stringInd(str){
    return str.replace(/Welcome/g , "Hello ")
}

console.log(stringInd(str))

//Hello  GeeksforGeeks, Hello  geeks