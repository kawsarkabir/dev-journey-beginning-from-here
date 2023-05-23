//  closure in javascript 
// closure is when a function is able to remember and accesc its lexcial scope even when that funcion executin outside its lexical scope


// able to remember and accesc its lexcial scope
/* function test(){
    let msg = (' i am learning closure');
    function sayMsg(){
        console.log(msg);
    }
    sayMsg()
} */
function test(){
    let msg = (' i am learning closure');
     return function(){
        console.log(msg);
    }
}
let sayMsg = test()
sayMsg()