/* const numbers = [1, 2, 3, 4, 5, 6, 7,7];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

 */

const numbers = [2, 4, 9, 10]; 
const output = [];
// functional way to same jinis
function getDouble(numbers){
    for(const number of numbers){
        const doubled = doubleItOld(number);
        output.push(doubled);
    }
    return output;
}
const result = getDouble(numbers);
console.log(numbers);
console.log(result);

// another way 
function doubleItOld(number){
    return number * 2;
}
// double ar kaz ta akhn arrow func korbe
const doubleIt = num => num * 2;