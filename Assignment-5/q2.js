let numbers = [42, 7, 19, 88, 23];

let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

console.log("Original Array:", numbers);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);

let ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);

let descending = [...numbers].sort((a, b) => b - a);
console.log("Descending Order:", descending);
