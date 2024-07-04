//How to remove falsy values from an array in JavaScript ?
//false
// zero(0,-0)
// empty string(“”, ‘ ‘ , ` `)
// BigIntZero(0n,0x0n)
// null
// undefined
// NaN
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

function checkFalsy(arr){
  return arr.filter(Boolean);
}

function checkFalsy(arr){
  return arr.filter(Boolean);
}

console.log(checkFalsy(arr))


//Output
// [ 23, 'gfg', true, 12, 'hi', [] ]