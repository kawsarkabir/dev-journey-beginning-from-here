// Operator 6 type 
/* 
1. ArithMetic
2. Assingment
3. Comparison
4. Logical
5.Condition
6. Type
*/

// arithmetic operator +, -, *, /, ++, --, **

let a = 19
a++ //increment
++a // pre increment
console.log(a);

let b = 20;
b--
--b
console.log(b);


// ======= Assingment Operator  +=, -=, *=, /=, %=,

let a1 = 10
let a2 = 90
// +=
console.log(a1 += b);
console.log(a1 -+ b);
console.log(a1 *= a2);
console.log(a1 /= a2);
console.log(a1 %= a2);

// ******* Comparison Operartor >, >=, <, <=, ==, ===, !=, !==

let x1 = 10;
let x2 = 90;
console.log(x1 > x2); // false
console.log(x1 < x2); // true
console.log(x1 >= x2); // false
console.log(x1 <= x2); // ture
console.log(x1 == x2); // false
console.log(x1 === x2); // fasel



//  ******** Logical Operator &&, ||
const number1  = 10
const number2 = 90
console.log(number1 > 1000 && number2< 20000)
console.log(number1 > 1000 || number2< 20000)




// JS MAth Function 
console.log(Math.E);
console.log(Math.PI);

let num90 = 90.49
console.log(Math.abs(num90)); // abs means Exitly man ki seta ber kora

//without floart number output
console.log(Math.floor(num90));

// 1 biddi kore dobe
console.log(Math.ceil(num90));


// 
console.log(Math.round(num90));
// math.max
console.log(Math.max(19, 190, 27));
console.log(Math.min(290, 290, 8));


//  power ar ber korar function 
console.log(Math.pow(2, 3));


//  square ber korte use kra hoi
console.log(Math.sqrt(64));


//  generate random number 
let numran = Math.floor(Math.random()*6+1)
console.log(numran);



//  Date Funcition
let date = new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());