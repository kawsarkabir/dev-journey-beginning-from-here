// max
const max = Math.max(12, 14, 17, 80);
console.log(max);
// 
const numbers = [12, 78, 59, 30,56];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const number2 = [numbers];
numbers.push(590);
console.log(numbers);
console.log(number2);
// copy arrays into
const number3 = [1,2 ,33, 56, 89, 90, ...numbers ,90,78 ];