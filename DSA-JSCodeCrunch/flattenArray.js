console.log(flattenArray([1, [2, 3], [4, [5]]]));


function flattenArray(arr){
    return arr.flat(Infinity);
}