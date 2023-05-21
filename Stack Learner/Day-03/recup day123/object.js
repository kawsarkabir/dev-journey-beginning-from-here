// object declare 
const shoppingCart ={
    mouse: 1, 
    mobile:2, 
    computer:4, 
    shop: 'Gunsan-12/23 Dhaka, Bangladesh'
}
// console.log(shoppingCart);
shoppingCart.headphone = 'mauno-610'
console.log(shoppingCart);


// accessing object propertiess
console.log(shoppingCart.mobile)

// remove obj properties 
delete shoppingCart.headphone
console.log(shoppingCart);



// comparison in two object 
let obj1 = {
    a:10, 
    b:20
}
let obj2 ={
    a:10, 
    b:20
}
if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true);
}else{
    console.log(false);
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


// Iterate Object properties 

let obj = {
    x: 10, 
    y:20, 
    z:30
}
// kunu upadan ase kina seta jante 
// console.log('x' in obj); // true
// console.log('p' in obj); // false


for(let i in obj){
    console.log(i);
    console.log(obj[i]);
}


// object methods 
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// exiting object theke arekta object create korbe jevabe
let obj3 = Object.assign({}, obj)
obj3.x = 100
console.log(obj);
console.log(obj3);