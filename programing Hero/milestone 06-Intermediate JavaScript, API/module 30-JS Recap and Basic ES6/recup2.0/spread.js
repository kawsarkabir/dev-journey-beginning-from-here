const max = Math.max(12, 89, 100);
console.log(max);

const arr = [12, 49, 100];

// spread oparator 
const largest = Math.max(...arr);
// console.log(arr);
// console.log(largest);

//  another example  here 
const number1 = [1, 3, 4, 5,39, 290];
console.log(number1);
const number2 = [...number1];
console.log(number2);
number1.push(1)
console.log(number1);
console.log(number2);
number2.push(2)
console.log(number2);