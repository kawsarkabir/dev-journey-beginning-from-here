/*
You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.


*/

/* var fruits = ['apple', 'banana', 'orange'];
var bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex); */

// a) replace the banana

/* fruits[1] = 'mango'
console.log(fruits);
// b) remove the orange and watermelon add

fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits); */

// problem 2 here
/*
 You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else.
*/

// problme 3 find the leargest number in 
var num1 = 193;
var num2 = 9;
var num3 = 45;
if(num1 > num2){
     if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else {
    console.log(num2);
}