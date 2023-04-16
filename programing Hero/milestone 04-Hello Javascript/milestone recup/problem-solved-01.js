/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples. 
=======================================================================*/
let momGiveMoney = 1000;
let applePrice = 400;
let orangePrice = 300;
let totalCost = applePrice + orangePrice;
let shopkeeperReturn = momGiveMoney - totalCost;
console.log(shopkeeperReturn);
// ===========================================================

/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.
=====================================================================================================*/
let mathematics =  75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;
let average =(mathematics + biology + chemistry + physics + bangla) / 5;
let getAvarage = parseFloat( average.toFixed(2));
console.log(getAvarage);
/* John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line.

Practice Problem 3

Sample Input:
I am going to be
an awesome web developer
Output:
I am going to be an awesome web developer 
=============================================================================================================*/
let fLine = 'I am going to be'
let lLine = 'an awesome web developer.'
let fullLine = fLine + ' ' + lLine;
console.log(fullLine);
/* Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.
Input:
The first line of the input contains the number.
Output:
Print the remainder.
Practice Problem 4
Sample Input:
119
Output:
4
=============================================================================== */
let number = 119;
let remainder = number % 5;
console.log(remainder);