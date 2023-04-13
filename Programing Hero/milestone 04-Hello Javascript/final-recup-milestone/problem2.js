// problem 1
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana');
console.log(fruits);
console.log(index); 

//  banana reaplace mango 
fruits[1] = 'mango';
console.log(fruits);

fruits.pop();
console.log(fruits);
// added watermelon
fruits.push('watermelon');
console.log(fruits);

// problem 2 

let myScore = 85;
let tomScore = 66;
let janeScore = 95;
let peterScore = 56;
let johnScore = 40;
let score = 40;

if( score >= 80){
    console.log('A');
} 
else if(score >= 60){
    console.log('B');
}
else if(score >= 50){
    console.log(C);
}
else if(score >= 40){
    console.log('D');
}
else{
    console.log('F');
}

// problme 3 
const num1 = 100;
const num2 = 920;
const num3 = 3907;
if(num1 > num2 && num1 > num3){
    console.log('largest number is num1: ' + num1);
}
else if(num2 > num1  && num2 > num3){
    console.log('largest number is num2: ' + num2);
}
else{
    console.log('deinitly largest number is num3 : ' + num3);
}


