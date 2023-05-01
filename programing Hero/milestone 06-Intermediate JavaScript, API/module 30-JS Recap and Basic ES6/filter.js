const numbers = [1, 2, 3, 45, 6, 7, 8,10];
const bigName = numbers.filter(num => num > 20);
console.log(bigName);

const tiny = numbers.filter(tiny => tiny >= 10);
console.log(tiny);
// even find the filter 
const even = numbers.filter(number => number % 2 === 0);
console.log(even);

// odd number find with the filter
const odd = numbers.filter(number => number % 2 != 0);
console.log(odd);

const products = [
    {id:1, name:'mobile', brand:'samsung', price:'900'},
    {id:2, name:'watch', brand:'iphone', price:'8000'}
];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);