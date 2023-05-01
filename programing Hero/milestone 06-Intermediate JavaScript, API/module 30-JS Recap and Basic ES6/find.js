// pothom j man tare pabe oitarei se output diye dibe kz ses
const numbers = [1, 2, 3, 45, 6, 7, 8,10];
const fives = numbers.find(num => num % 5 ==0);
console.log(fives);

// filter 
const vivajjoByFive = numbers.filter(vivajjoNum => vivajjoNum % 5 === 0);
console.log(vivajjoByFive);