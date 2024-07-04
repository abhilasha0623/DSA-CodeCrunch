//Reorder an Array According to Given Indexes

function reorder(originalArray, ind) {
    return ind.map(
        index => originalArray[index]);
}

const originalArray = 
    ['HTML', 'CSS', 'JavaScript', 'React.js'];
const ind = [3, 1, 2, 0];

console.log(reorder(originalArray, ind) )

//[ 'React.js', 'CSS', 'JavaScript', 'HTML' ]