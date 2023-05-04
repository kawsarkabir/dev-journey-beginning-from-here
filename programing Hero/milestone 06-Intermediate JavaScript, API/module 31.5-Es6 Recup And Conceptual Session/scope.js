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
/* function add(x , y){
    const total = x + y ;
    return total;
}
// not acces 
console.log(x, y);
const result = add(10, 20);
console.log(result); */



/* const x = 9;
{
    const y = 10;
    console.log('inside block: ', y);
}
console.log('outside block : ', y); */

//
const a = 9;
{
    const a = 10;
    console.log('inside block: ', a);
}
console.log('outside block : ', a);
