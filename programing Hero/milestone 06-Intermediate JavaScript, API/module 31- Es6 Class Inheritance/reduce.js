// map , forEach, filter, find, reduce

const numbers =  [1, 2, 3, 4, 5];
const total = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(total);
// 
const total2 = numbers.reduce((previous, current) => {
    console.log(previous , current);
    return previous + current;
});
console.log(total2);
