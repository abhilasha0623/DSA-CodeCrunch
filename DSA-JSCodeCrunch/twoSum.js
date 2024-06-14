//Find the pair of arays which gives the sum of target value
let nums=[1,2,3,4,5,6,7,8,9]
function twoSum(nums, target) {
let sum=[]
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        sum.push(nums[i],nums[j])
      }
    }
  }
  return sum
}

console.log(twoSum(nums,9))

function twoSum(arr,target){
let sum=[]
let hash={}
arr.forEach((val)=>{
let diff =  target-val;
if (hash[diff.toString()]!== undefined){
sum.push([val,diff])
}
hash[val.toString()]=val
})
return sum;
}
