/* const add = function(frist, second){
    return frist + second;
} */
const add = (num1, num2)=> num1 + num2;const result = add(5, 10);
console.log(result);

// more arrow function && big arrow function 

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return somthing use the return
const doMath = (x, y, z) =>{
    const fristSum = x +y;
    const secondSum = y + z;
    const miltiplayResult = y * z;
    const result = miltiplayResult / 2;
    return result;
}
// spread operator 
const max = Math.max(12, 85, 999, 78);
console.log(max);

const numbers = [12, 89, 28, 890, 10];
const largest = Math.max(...numbers)
console.log(...numbers);
console.log(largest);

//

const number2 = [90, 80, ... numbers,90,10];
console.log(number2);