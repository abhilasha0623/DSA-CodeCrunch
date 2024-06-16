//Display current date in javascript


let date =new Date()

console.log(date)

let dd =String(date.getDate()).padStart(2, "0");
let mon =String(date.getMonth()).padStart(2, "0");
let year =date.getFullYear();
console.log(dd+ "/" + mon + "/" +year)