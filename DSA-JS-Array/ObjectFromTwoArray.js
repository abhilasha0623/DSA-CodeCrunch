//How to create an object from two arrays in JavaScript?
let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"]

function objectCreate(a,b){
   if (a.length != b.length || 
        a.length == 0 || 
        b.length == 0) {
        return null;
    }
    
       return Object.assign(...a.map((k, i) =>({ 
          
                          [k]: b[i]})))
}
console.log(objectCreate(a,b))


//{ '1': 'ram', '2': 'shyam', '3': 'sita', '4': 'gita' }