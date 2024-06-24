const original = { name: "John", address: { city: "New York" } };
const deepCopy=JSON.parse(JSON.stringify(original))
console.log(deepCopy)
deepCopy.mobile="23455677"
console.log(deepCopy)
console.log(original)

//Output
// { name: 'John', address: { city: 'New York' } }
// { name: 'John', address: { city: 'New York' }, mobile: '23455677' }
// { name: 'John', address: { city: 'New York' } }
