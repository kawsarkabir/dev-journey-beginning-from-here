// excution context in JaVaScript 
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

// excution of a function 
// excution of c function 
//excution of b function
// excution of global function 


// stack ar kaz hlo => last in fast 