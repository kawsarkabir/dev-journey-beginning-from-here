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
