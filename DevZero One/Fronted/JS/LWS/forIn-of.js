for(let i = 1; i<=5; i++){
    // console.log(i);
}
// for in 
const myObj = {
    name: 'JavaScript',
    estd: 1995,
    founder: 'Brendan Eich'
}
/* for(property in myObj){
    console.log(property);
} */
/* for(property of myObj){
    console.log(property);
} */


// defuilt paremetars


// console.log(Object.keys(myObj));
// console.log(Object.value(myObj));
// console.log(Object.entries(myObj));

// spread operator
function myFunc(x = 0){
    return x
}
// console.log(myFunc());

// spread operator 
let numbers = [1, 2, 3];
let numbers2 = [...numbers, 4, 5];
// console.log(numbers2);

// rest operator 
function myFun (...params){
    console.log(params);
}
myFun(12, 34, 55);
