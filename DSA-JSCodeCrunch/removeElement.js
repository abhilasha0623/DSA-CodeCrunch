console.log(removeElement([1, 2, 3, 4, 2], 2));
// Output: [1, 3, 4]

function removeElement(a,d){
    let remArray=[]
    for(let i=0;i<a.length;i++){
        if(d !== a[i]){
            remArray.push(a[i])
        }
    }
    return remArray
}