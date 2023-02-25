var mobile = {
    brand: 'samsung',
    price: 90000,
    stroge: '64Gb',
    camera: 12
}
// console.log(mobile.brand='lenovo');
// console.log(mobile.brand);



// 19-7 multiple ways to get and set object property

/* var shoppingCartss = {
    book: 3,
    sunglass: 2,
    keyboard:1,
    mouse:9,
    pen:1
}
// jokhn ami jani j pen object akhane ase 
var penCount = shoppingCartss.pen
//alternative systems way
// same to previes 
var penCount2 = shoppingCart['pen']
// all value get korar systems
var properties = Object.keys(shoppingCart)
console.log(properties);
var propertyValue = Object.values(shoppingCart)
console.log(propertyValue);
// console.log(shoppingCart); */



// 19-8 (advanced) Looping through an Object and Object summary


var shoppingCart = {
    book: 3,
    sunglass: 2,
    keyboard:1,
    mouse:9,
    pen:1
}
const keys = Object.keys(shoppingCart)
console.log(keys);

const values = Object.values(shoppingCart)
console.log(values);

for (var i = 0; i < keys.length; i++){
    var propertyName=(keys[i]);
    var propertyValue=(values[i]);
    console.log(propertyName, propertyValue);

}


// easy systems for in 
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}
