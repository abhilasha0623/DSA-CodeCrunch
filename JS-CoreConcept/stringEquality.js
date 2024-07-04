let str1 = "Hello";
let str2 = "Hello";
let str3 = "World";
console.log(str1 == str2); //true
console.log(str1 == str3); //false

// We can see that str1 and str2 point at the same location in the memory 
// while a new space is created for str3 as it has a different value. 
// In this way string constant pool saves memory by making the same value string point 
// to the same location in the memory.

let str4 = new String("John");
let str5 = new String("John");
let str6 = new String("Doe");
console.log(str4 == str5);
console.log(str4 == str6);

//We can see in the image that even though str1 and str2 are having the
//  same value but because of the new keyword they are referring to different 
//  locations in the memory. Hence, they return false when compared.