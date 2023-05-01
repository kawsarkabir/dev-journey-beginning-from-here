const numbers = [12,  45, 5, 66];
const half = numbers.map(n => n /2);
console.log(half);
// another exp:
const third = numbers.map(t => t/3);
console.log(third);

// 
const friends = ['Tom Hanks', 'Komfu king', 'serKhan Ali', 'tumiAmi'];
const fristLetterOfTheArry = friends.map( fL => fL[0]);
console.log(fristLetterOfTheArry);

const nameLength = friends.map(friendLength => friendLength.length);
console.log(nameLength);

// object theke access
const products = [
    {id:1, name:'mobile', brand:'samsung', price:'90k'},
    {id:2, name:'watch', brand:'iphone', price:'80k'}
];
const items = products.map(product => product.name);
console.log(items);
