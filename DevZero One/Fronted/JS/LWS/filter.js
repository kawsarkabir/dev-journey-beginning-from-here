const numbers = [1, 2, 3, 4,5, 6, 6, 7];
const result = numbers.filter((currentValue, index, arr) =>{
    return currentValue > 4;
});
console.log(numbers);
console.log(result);