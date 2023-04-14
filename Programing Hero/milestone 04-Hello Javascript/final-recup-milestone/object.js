// object 
let student = {
    id: 115,
    name: 'kawsar kabir',
    class: 'diploma in CST',
    marks: 3.67
}
console.log(student);
console.log(student.name);

const myLantop = {
    brand: 'Hp',
    price: 33500,
    stroge:'256GB'
}
console.log(myLantop);
console.log(myLantop.price);

// set the value
myLantop.stroge = '512GB';
console.log(myLantop);
 
// properties fo object
let shopingCart ={
    books : 3,
    sunglass: 1, 
    Keyboard: 3,
    mouse:1, 
    pen: 23
}

// when you know spefific the properties name then you use dot nataion 
let penCount = shopingCart.pen;

// alternative systems
let penCount2 = shopingCart['pen'];

// find the keys of object
let properties = Object.keys(shopingCart);
console.log(properties);

// find the value of ibject
let values = Object.values(shopingCart);
console.log(values);
console.log(shopingCart);


// throught of looping in object

let shopingCart2 ={
    books : 3,
    sunglass: 1, 
    Keyboard: 3,
    mouse:1, 
    pen: 23
}

const keys = Object.keys(shopingCart2);
console.log(keys);
const value = Object.values(shopingCart2)
console.log(value);

for(let i = 0; i < keys.length; i++){
    console.log(keys[i]);
}


// for in 

for(let prop in shopingCart2){
    console.log(prop);
}
