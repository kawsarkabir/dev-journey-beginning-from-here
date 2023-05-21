/* What is Functional Programming ? 
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In functional programming, programs are constructed by composing and applying functions, where functions are considered first-class citizens and can be passed as arguments, returned as results, and stored in data structures.

Here are some key characteristics and concepts associated with functional programming:

Pure Functions: In functional programming, functions are pure, meaning they produce the same output for the same input and have no side effects. They don't modify external state or rely on mutable data. Pure functions are deterministic and easier to reason about, test, and debug.

Immutability: Functional programming emphasizes immutable data, where once a value is assigned, it cannot be changed. Instead, new values are created by transforming existing ones. This avoids issues related to shared mutable state and simplifies concurrency and parallelism.

Higher-Order Functions: Functional programming languages typically support higher-order functions, which are functions that can take other functions as arguments or return them as results. This enables the composition and combination of functions, leading to more modular and reusable code.

Recursion: Instead of using iterative loops, functional programming encourages the use of recursion to express repetition. Recursive functions call themselves with modified input parameters until a termination condition is met.

Referential Transparency: Functional programs strive for referential transparency, meaning that a function's return value can be replaced with its result without affecting the program's behavior. This property allows for optimization, caching, and reasoning about code.

Avoidance of State and Side Effects: Functional programming minimizes or eliminates mutable state and side effects, such as modifying global variables or performing I/O operations. By isolating and controlling state changes, functional programs become more predictable and easier to understand and test.
*/




// There Main Terms 
/* 
1. Pure Functions
2. Frist Class Funcltion 
3. Higher Order Functions
*/

// Function Acts Like a vlue 





// pure Function in Javascript 
`What is pure Function ?
*Its Returns the same result if given the same arguments
*its does not cause any observable side effects
`

function sqr(n){
    return n*n
}
console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(2));


let n = 10
function change(){
    n = 100
}
change()
console.log(n);


 let point = {
    x:343,
    y:90
 }
 function pointPrint(point){
    point.x = 100
    point.y = 200
    console.log(point);
 }
 pointPrint(point)
 console.log(point);



function add(x){
    return x%2 === 0
}
console.log(add(97));

// trems 2 is here 
let y = 10;

function change2(){
    let y = 19
}
console.log(y);


let point2 ={
    d:200,
    e:900
}
function printPoint(point2){
    point2.d = 400
    point2.e = 1800
    console.log(point2);
}
printPoint(point2)
console.log(point2);

//  ********* First Class Function 

function add(a, b){
    return a + b
}

// A function can be stored in a variable 
let sum = add
console.log(sum(90,110));


// A funcion  can be stored in an array
let arr = []
arr.push(add)
console.log(arr[0](10, 90));
// A funciton can be stored in an object 
let obj = {
    sum:add
}
console.log(obj.sum(900, 100));
// WE can create Function as Need

setTimeout(function(){
    // console.log('yoyo yoyo');
}, 100)



//  higher order funciton 
// We can Pass Function as an Afguments
// We can return Function from Another function 

function add(a, b){
    return a + b
}

function manipulate(a, b, func){
    let c = a + b
    let d = a - b

    function multipy(){
        let m = func(a, b)
        return c*d*m
    }
    return multipy
}

let multiply = manipulate(3, 4, add)
console.log(multiply());
