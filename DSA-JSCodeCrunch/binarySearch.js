//Perform binary Search for the following array and find the index of the target


let arr=[1, 2, 3, 4, 5, 6, 7, 8];
let target=6;
 function binarySearch(arr,target){
 let left=0;
 let right=arr.length-1
 while(left<=right){
 let mid=Math.floor((left+right)/2)
 if(arr[mid]=== target){
 return mid
 }else if (arr[mid]<target){
 return left= mid+1
 }else if (arr[mid]>target){
 return right=mid-1;
 }
 }
 return -1
 }

