// String containing multiple spaces
let str = "   Welcome    to   Geeks    for   Geeks   ";

// Remove multiple spaces with single space
let newStr = str.replace(/\s+/g, ' ');

// Display the result
console.log(newStr);

//OR

// String containing multiple spaces
let str1 = "   Welcome    to   Geeks    for   Geeks   ";

// Replace multiple spaces with single space
let newStr1 = str.trim().split(/[\s,\t,\n]+/).join(' ');

// Display the result
console.log(newStr);

//Output
//Welcome to Geeks for Geeks