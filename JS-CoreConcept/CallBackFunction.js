function outerFunction(a,b,callBack){
    let result=a + b;
    callBack(result)
}
function displaySum(val){
    console.log("The sum of the two values are:" + val)
}



outerFunction(2,4,displaySum)