// scope in javaScriipt
/* 
1. global Scope
2. local scope
3. block scope
*/
/* const x = 10;
if(true){
    console.log('inside scope: ' + x);
    const y = 90;
}
console.log('outside scope: ' + x);
// not access
console.log('outside block scope: ' + y); */

// 
function add(x , y){
    const total = x + y ;
    return total;
}
// not acces 
console.log(x, y);
const result = add(10, 20);
console.log(result);