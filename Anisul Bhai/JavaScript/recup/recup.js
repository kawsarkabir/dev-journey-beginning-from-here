// how to show output in javascript 
// 1. document.write('HEllo world');
// console.log('HEllo world);
// alert('HEllo world);
// .innerHTML

// how to add Javascript in html file
/* 
1, inline javascript (tag)
2, internal javascript(head or body)
3. Extarnal javascript (another file)
*/

// kewword data type and commnet 
/* 
some keyword in javascript: return , var, let , const, for, while, function, new, etc...
*/
// 
// data type in javascript

/* 
let numberDataType = 10;
console.log(numberDataType);
*/
// string dataType
/* 
let myName = 'kawsar kabir';
console.log(myName);
*/
// bolean data Type
/* 
var isTrue = true;
console.log(isTrue);
*/


// how to variable declaration in javascript
// var variableName  = 'kabir';
// console.log(variableName);

// variable namming convention in javascript
// var 99prices = true; // pthome number use kora jaba na eta wrong;
// var while = 90; variable ar nam keywords use kora jaba na eta wrong

// var #samble = '123' // fast a samble use kora jabe na but $ sing use kora jabe 


// let variableName = 'kawsar';  recomendet eay camel case 

// toFixed
// var num = 2;
// console.log(num);

// convert number to string
var convertTostring = 100;
// console.log(convertTostring.toString());

// toFixed
var number = 2.9040
// console.log(number.toFixed(2));

//  to precision 
var number1 = 2.9040;
// console.log(number1.toPrecision(2));

// how to add or concatenate strings
/* let name1 = 'kawsar';
let name2 = 'kabir';
let name = name1 + ' ' + name2;
console.log(name); */


// library functions for string 
// var text = 'kawsar kabir'
// console.log(text.length);

/* let text1 = prompt('Enter Your Name: ');
console.log(text1.length);
 */
const text2 = 'kabir';
// console.log(text2.charAt(2));

const upperCase = 'kawsar';
// console.log(upperCase.toUpperCase());

// lowerCAse
const text3 = 'kawsarkabir';
// console.log(text3.toLowerCase());

// concat here 
// console.log( text2.concat(text3));

// slice funcion 

const slice1 = 'i love bangladesh';
// console.log(slice1.slice(7, 17));


// oparator 


// arithmatic oparator 
// + , -, *, /, %
/* var x = 10;
var y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); */

// assingment oparator 
// =>  =, +=, -=, *=, /=, %=, **=

/* console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x *= y); */



// make your own calculator

/* var num1 = prompt('Enter Your Fast Number: ');
var num2 = prompt('Enter Your Second Number: ');
num1 = parseInt(num1);
num2 = parseInt(num2);
var sum = num1 + num2;
var sub = num1 - num2;
var multiply = num1 * num2;
var fagfol = num1 / num2;
console.log(sum, sub, multiply, fagfol); */

// javascript bangla tutorial 11 : Area of various shapes

/* var base = prompt('Enter Base: ')
var height = prompt('Enter Height: ')
var area = base * height;
console.log('Area = :' + area); */
 


// javascript bangla tutorial 12 : how to make temperature converter

/* var farenHeight = parseFloat(prompt('Enter the farenHeight: '))
var cels = (farenHeight - 32) * ( 5 / 9);
console.log(cels);

var cels = parseFloat(prompt('enter the celscias: '));
var farenHeight = cels * (9/5) + 32;
console.log(farenHeight); */

// javascript bangla tutorial 13 : Relational and Logical Operator
/* var num1 = 20;
var num2 = 25;
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2); */


// find the bigest number using javascript
/* var number1 = 1;
var number2 = 2;
var number3 = 3;
console.log(number1 > number2 && number3 > number2);
//  or ar using ||
console.log(number1 > number2 || number3 > number2); */

// find the even or odd number 
/* var number = 11;
if(number % 2 == 0){
    console.log('even');
}else{
    console.log('odd');
} */

// else if using 
/* var num = 9;
if(num > 0){
    console.log('positive');
}
else if(num < 0){
    console.log('negative');
}
else{
    console.log('zero');
} */

// task 4 : grade point 
/* var mark = prompt('Enter Your Number: ');
if(mark >= 90){
    console.log('tumi golden paicho');
}
else if(mark>= 80){
    console.log('tumi a+ paicho');
}
else if (mark >= 70){
    console.log('tumi a paicho');
}
else if(mark >= 60){
    console.log('tumi b paicho');
}
else if(mark >= 50){
    console.log('tumi c paicho');
}
else if(mark >= 40){
    console.log('tumi d paicho');
}
else if(mark >= 33){
    console.log('tumi e paicho');
}
else{
    console.log('bhai tumi fail');
} */

// javascript bangla tutorial 16 : programs using logical operators


// javascript bangla tutorial 17 : switch

//  0- Zero, 1- 9 
/* var digit = prompt('Enter any digit: ');
if(digit == 0){
    console.log('zero');
}
else if(digit == 1){
    console.log('one');
}
else if(digit == 2){
    console.log('two');
}
else if(digit == 3){
    console.log('three');
}
else if(digit == 4){
    console.log('four');
}
else if(digit == 5){
    console.log('five');
}
else if(digit == 6){
    console.log('six');
}
else if(digit == 7){
    console.log('seven');
}
else if(digit == 8){
    console.log('eight');
}
else if(digit == 9){
    console.log('nine');
}
else{
    console.log('not a valid number');
} 
 */

// switch 
/* var digit = prompt('enter any number');
switch (digit){
    case '0':
        console.log('zero');
        break;
    case '1':
        console.log('one');
        break;
    case '2':
        console.log('two');    
        break;
    case '3':
        console.log('three');
        break;
    case '4':
        console.log('four');
        break;
    case '5':
        console.log('five');
        break;
    case '6':
        console.log('six');
        break;
    case '7':
        console.log('seven');
        break;
    case '8':
        console.log('eight');
        break;
    case '9':
        console.log('nine');
        break;
    default:
        console.log('not a number');
}  */



/* var letter = prompt('enter a letter: ')
letter = letter.toLowerCase();
switch(letter){
    case 'a':
        console.log('vowel');
    case 'e':
        console.log('vowel');
    case 'i':
        console.log('vowel');
    case 'o':
        console.log('vowel');
    case 'u':
        console.log('vowel');
    default:
        console.log('consunent');
} */

// multiple condition in switch 
/* switch(letter){
    case 'a':
    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log('its vowel');
    default:
        console.log('consunent letter');
} */

// javascript bangla tutorial 18 : how to use for loop in javascript (part-1)


/* for (var x = 1; x<=10; x++){
    console.log(x);
} */
// even number using for loop 
for (var i = 2; i<=100; i+=2){
    console.log(i);
}
// odd number in 
for (var i = 1; i<=100; i+=2){
    console.log(i);
}

// 1-5 sumation
var sum = 0;
for (var i = 1; i<=5; i+= 1){
    sum = sum + i;
    console.log(sum);
}


// 2 numbers sumation in for loop 
var num1 = prompt('enter a frist number: ');
var num2 = prompt('enter a 2nd number: ');
var sum = num1 + num2;
console.log(sum);


// using for loop 
 for (var x = 1; x<= 5;  x++){
    var num1 = prompt('enter a frist number: ');
    var num2 = prompt('enter a 2nd number: ');
    var sum = num1 + num2;
    console.log(sum);
 }