const arr = ['apples' , 'banana', 'price', 'etc'];
console.log(arr);
let friendsAge = [1, 3, 2, 56,39, 80];
console.log(friendsAge);

// friendsAge.length means array length
console.log(friendsAge.length);

// find the element form the exiting index value
const indexNumber = arr.indexOf('price');
console.log(indexNumber);

// find the element of the arry
let myFriendsAge = [23, 12, 89, 23, 18, 10, 102];
let indexValue = myFriendsAge[2];
console.log(indexValue);

// set the value of index number 
myFriendsAge[2] = 103;
console.log(myFriendsAge);

// added last element of array
arr.push('egg');
console.log(arr); 

// remove the last element of the arrya 
arr.pop();
console.log(arr);


// fast element added in array
console.log(friendsAge);
friendsAge.unshift(700);
console.log(friendsAge);

// remove fast element
friendsAge.shift();
console.log(friendsAge);

