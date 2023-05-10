// normal function 
function add(num1, num2){
    sum = num1 + num2;
    return sum;
}
const result = add(10, 90);
console.log(result);

// defult perameter
function add1(num1, num2=0){
    sum = num1 - num2;
    return sum;
}
const result1 = add1(10, 5);
console.log(result1);

// another exap:
function myName(fastName, lastName ='Ahmed'){
    const fullName = fastName + ' ' + lastName;
    return fullName;
}
const name = myName('kawsar')
console.log(name);