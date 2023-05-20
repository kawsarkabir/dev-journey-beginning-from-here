// array declare
let arr = [10, 20, 30, 40, 50];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// sum of arry number
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("sumation of arr", sum);
// array length
// console.log(arr.length);

// set arr index
arr[2] = 890;
// console.log(arr);

//find the indexOfElements of arry
let findIndex = arr.indexOf(10);
// console.log(findIndex);

// added the fast element
let addedF = arr.unshift(89);
console.log(arr);

// added last element of the arry
let lastE = arr.push(900);
// console.log(arr);

// remove the fast Elements
let removeF = arr.shift();
console.log(arr);

// remove last elements
let removeL = arr.pop();
console.log(removeL);
console.log(arr);

// find the even number of arry

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

//  slice
console.log(arr);
arr.splice(2, 0, 70);
console.log(arr);

// array search in javascript
let arr10 = [23, 88, 90, 28, 100];
let find = 23;
let isFound = false;
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] === find) {
    console.log("data found", i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("data not found");
}

// multidimensional Array
let marks = [
  [12, 19, 10, 89],
  [90, 12, 34, 80],
  [34, 60, 70, 45],
];
for (let i = 0; i < marks.length; i++) {
  for (let j = 0; j < marks[i].length; j++) {
    console.log(marks[i][j]);
  }
}

// array reserved
let arr4 = [70,12, 29, 09, 10, 23, 18, 30];
for (let i = 0; i < (arr4.length / 2); i++) {
  let temp = arr4[i];
  arr4[i] = arr4[arr4.length - 1 - i];
  arr4[arr4.length - 1 - i] = temp;
}
console.log(arr4);

// simple way using methods reserved 
console.log(arr4.reverse());


let arr70 = [1, 2, 3, 4,5]
for(let i = 0; i< (arr70.length / 2); i++){
    let temp1 = arr70[i]
    arr70[i] =arr70[arr70.length - 1 - i]
    arr70[arr70.length - 1 - i] = temp1
}
console.log(arr70);

