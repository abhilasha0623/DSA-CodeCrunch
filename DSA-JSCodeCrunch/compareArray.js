let ar1=[1,2,3]
let ar2=[1,2,4]

function compareElements(ar1,ar2){
for (let i=0;i<ar1.length;i++){
if(ar1[i]!== ar2[i]){
return false
}
}
return true;
}

console.log(compareElements(ar1,ar2))