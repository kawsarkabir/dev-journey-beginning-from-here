function myFunc (){
    console.log(`Hello, it's My Function !`);
}
myFunc();


// sumation crate a function 
function sum (a, b){
    let sum = a + b;
    console.log(sum);
}
sum(10, 5);
sum(6, 8);
sum(90, 10)

// deaclare a function 
function startFan(){
    console.log('stand up');
    console.log('walk towards the switch');
    console.log('press the switch');
}
startFan()

// perameters
function bringSingara(money){
    console.log(`${'tk disen ? '}` + money);
    console.log('ai nen singara');
    
}
bringSingara(100);

function add (a, b, c, d, e){
    add = a + b + c + d + e;
    console.log(add);
}
add(1, 2, 3, 4, 5);

// return 
function added( num1, num2){
    console.log(num1, num2);
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}
added(1, 2);

// another retun function 
let myTk = 200;
function bringSingara2 (money){
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return quantity;
}
let singara = bringSingara2(myTk);
console.log(singara);

/* // function sumaryyyy && example 
function functionName(perameters){
    console.log('function body');
    return;
}
functionName() //call function  */

function getTotal(assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + assingment3;
    const averages = total / 3;
    return averages;
}
const assingment1Marks = 60;
const assingment2Marks = 58;
const assingment3Marks = 59;
let myAverages = getTotal(assingment1Marks, assingment2Marks, assingment3Marks)
console.log(myAverages);

