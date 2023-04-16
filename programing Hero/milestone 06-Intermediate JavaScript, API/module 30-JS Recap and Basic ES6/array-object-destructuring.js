const fish = {
    name: 'k2', 
    color: 'black',
    address: 'chandpur',
    phone: '018823',
    price: '3090'
}
/* const phone = fish.phone
const price = fish.price
const address = fish.address
const name = fish.name
const color = fish.color */
 const {phone} = fish

// console.log(phone, price, address, name, color)

const {age} = {name: 'kawsar', age: '34', profeson: 'development'}
console.log(age);


// array destructuring
const [frist, another] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(frist, another);

const nayoks = ['sakib', 'kingkhan', 'k2'];
const [king, lost, notun] = nayoks;
console.log(notun);


function getName(){
    return ['alim', 'halim'];
}
const [baba , chaca] = getName();
console.log(baba, chaca);