//Add all the numbers in the given array of elemnts only numbers
//output 72
let arr=["234",345,456,"323abc",454,231,234]
//let arr =[234,453,345,21,234] question examples
function  sumDigit(arr){
		let val=arr.toString().split();
		console.log(val)
		 return val.reduce((sum,digit)=>{
		if(!isNaN(digit)){
				sum = sum + parseInt(digit)
		}
		return sum
		},0)
   
}

console.log(sumDigit(arr))