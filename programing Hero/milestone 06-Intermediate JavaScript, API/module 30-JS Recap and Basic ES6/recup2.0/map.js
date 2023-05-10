// normal way
// const numbers = [2, 3, 4, 5, 29, 89];
/* const output = [];
for (const number of numbers) {
  const doubled = number * 2;
  output.push(doubled);
}
console.log(output); */

/* function getDouble(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
  }
  return output;
}
const result = getDouble(numbers)
console.log(result); */
/* 
const makeDouble = numbers.map(x => x*2)
console.log(makeDouble);

const fiveTimes = [1, 2, 3,4,5].map(a => a* 5);
console.log(fiveTimes); */



const nums = [12, 34, 39, 90];
const friends = ['Aa' , 'Bb', 'Cc', 'Dd', 'Ee'];
const ABCD = friends.map(f => f[0]);
// console.log(ABCD);

const nameL = friends.map(l => l.length)
// console.log(nameL);


const products = [
    {id: 1, name:'laptop', price:8400},
    {id:2, name:'computer', price: 90000},
    {id:3, name:'mouse', price: 3300}
];
const items = products.map(product => product.name)
// console.log(items);

const ABCDE = [12]
