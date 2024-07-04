let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


    let cumSum=0
    let cumulativeTotal= inputArray.map((ele)=>
   { cumSum=cumSum+ele
    return cumSum
    })
    console.log(cumulativeTotal)
 

console.log("The cumulative Sum :"+cumulativeTotal[(cumulativeTotal.length)-1] )

//Output
// [
//     1,  3,  6, 10, 15,
//    21, 28, 36, 45, 55,
//    66
//  ]
//  The cumulative Sum :66