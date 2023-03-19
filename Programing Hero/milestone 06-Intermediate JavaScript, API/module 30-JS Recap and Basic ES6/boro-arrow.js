const add = (frist , second) => frist + second;
const getFulName = (first, second) => frist + '' + second;
const multiply = (a, b) => a * b;


// no perameter
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

//  one parameter sinple version 
const fiveItems = num => num * 5;

// multiline arrow function
const doMath = (x , y, z) => {
    const fristSum = x + y;
    const secondSum = z - y;
    const multipleResult = fristSum * secondSum;
    const result = multipleResult / 2;
    return result;
}