// local scope 
/* function localScope() {
    var local = 'I am local to my own function';
    console.log(local);
 }
 
 localScope();
 console.log(local);
 */
//   globar scope 

/* var globalVar = 'I am a Global Variable';
function globalScope() {
   console.log('Inside a Function: ' + globalVar);
}
globalScope();
console.log('Outside: ' + globalVar); */


function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
}
  
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
  
let result = linearSearch(numbers, target);
  
if (result === -1) {
    console.log(`Target value not found in the array.`);
} 
else{
    console.log(`Target value found at index: ${result}`);
}