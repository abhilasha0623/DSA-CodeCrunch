let num=[234,765,456]

function squsreSum(num){
    let sum=0
    let n = num.toString().split("")
    console.log(n)
    for(let i=0;i<n.length;i++){
        if(!isNaN(n[i])){
        sum += n[i]*n[i]
        console.log(sum)
        }
    }
    return sum
}

console.log(squsreSum(num)) //216