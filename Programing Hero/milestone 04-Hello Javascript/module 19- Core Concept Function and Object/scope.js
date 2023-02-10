// local scope 
/* function localScope() {
    var local = 'I am local to my own function';
    console.log(local);
 }
 
 localScope();
 console.log(local);
 */
//   globar scope 

var globalVar = 'I am a Global Variable';
function globalScope() {
   console.log('Inside a Function: ' + globalVar);
}
globalScope();
console.log('Outside: ' + globalVar);