var numbers = [1, 2, 3, 4,5];
const result = numbers.reduce((prevValue, currentValue) =>{
    return prevValue + currentValue;
})
console.log(result);