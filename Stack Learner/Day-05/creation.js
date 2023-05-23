// creation and execution of context
function a(){
    b()
    console.log( 'I am Func a');
}
 
function b(){
    c()
    console.log( 'I am Func b');
}
 
function c(){
    console.log( 'I am Func c');
}

let x = 200
a()
console.log(' I am Global');


// creation phase
// execution phase
