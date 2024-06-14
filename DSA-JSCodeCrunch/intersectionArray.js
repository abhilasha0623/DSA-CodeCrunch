//find the intersection elements in the array

let a1= [2,3,4,5]
let a2=[2,5,1,6,7]

function intersection(a1,a2){
let result = [];
		for(let i=0;i<a1.length;i++){
				if(a2.includes(a1[i])){
					result.push(a1[i])
				}
		}
    return result
}
console.log(intersection(a1,a2))