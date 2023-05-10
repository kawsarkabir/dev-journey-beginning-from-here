// var vs let vs const 
var age = 18;
age = 19; // resign possible 
console.log(age);

// let 
let name = 'kawsar';
name = 'kawsar kabir' // resign possible
console.log(name);

// const 
const isTrue = true;
// isTrue = false; // resign not posibale 
// console.log(isTrue);

let numbers = [12, 23, 45, 89];
for(let i = 0; i<=numbers.length; i++){
    const number = numbers[i];
    console.log(number); // ist ok but 
}
console.log(number); // number is not difine cz let, const is a block scope that's way can't access the numebr variable