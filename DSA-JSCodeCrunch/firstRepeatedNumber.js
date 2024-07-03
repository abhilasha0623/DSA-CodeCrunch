let a = [2,3,2,6,0,3,7,3,9];

function repeatedNum(a){
  return a.find((ele,index)=>a.indexOf(ele)!==index)
}

console.log(repeatedNum(a))
//2

//Solution 2

function test(a){
    for(let i=0;i<a.length;i++){
      for(let j=i+1;j<a.length;j++){
        if(a[i] == a[j]){
          return a[i];
        }
      }
    }
     
    }
    let result = test(a);
    console.log(result);