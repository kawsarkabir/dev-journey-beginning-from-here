// how to insert in last elements of array

let arr = [1, 2, 3, 4, 5];
arr[arr.length] = 10;
console.log(arr);

//  how to work push in javascript
const myPush = (arr, value) => (arr[arr.length] = value);
console.log(myPush(arr, 190));
console.log(arr);

// how to work in push in javascript
let arr1 = [12, 24, 39, 20];
arr1[arr1.length] = 100;
console.log(arr1);

arr1.push(200);
console.log(arr1);

const myPush1 = (arr1, value) => (arr1[arr1.length] = value);

console.log(myPush1(arr1, 990));
console.log(arr1);


// how to work in javascript i narray 
let ar = [1, 2, 3, 4]
const push=(ar, valuee)=>(ar[ar.length]=valuee)
console.log(push(ar, 303));
console.log(ar);
