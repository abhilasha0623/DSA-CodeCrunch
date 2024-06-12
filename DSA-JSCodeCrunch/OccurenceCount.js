//find the frequency of occurence using reduce method
//output
// {
//     hello: 4,
//     java: 2,
//     world: 2
//   }
let arr=["hello","world","java","hello","java","hello","world","hello"]

function occurance(p){
let result = p.reduce((arr,cur)=>{
if (cur in arr){
arr[cur]++
}else{
arr[cur]=1
}
return arr
},{})
return result
}

console.log(occurance(arr))