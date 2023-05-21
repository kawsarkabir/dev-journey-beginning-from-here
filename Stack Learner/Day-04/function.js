// funcion declaration
function funcName() {
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
}
// funcName()

function add() {
  let a = 10;
  let b = 90;
  console.log(a + b);
}
// add()

// invoking a function
// add()

// Function Arguments and Parameters in Javascript
const sum2 = (a, b) => a + b;
// console.log(sum2(1, 2));

function add2(a, b) {
  return a + b;
}
// console.log(add2(90,10));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

//  retrun something of function
function addALl() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
let result = addALl(1, 2, 3);
// console.log(result);

// annther example
function person(name, email) {
  return {
    name: name,
    email: email,
  };
}
let p1 = person("kawsar kabir", "devkawsarkabir@gmail.com");
// console.log(p1);

//  funciron expretion
let addition = function (a, b) {
  return a + b;
};
addition(10, 90);

// setTimeout(function (){
//     // console.log('I will call after 5 second')
// }, 5000)

// inner function
/* function somthing(great, name){
    function sayHi(){
        console.log(great, name);
    }
    sayHi()
} */
// somthing('Good Morning!', 'KAWSAR KABIR')

// find the frist name

function something(great, name) {
  function getFName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  let message = great + " " + getFName();
  console.log(message);
}
something("Good Morning", "Developer Kawsar");



 
