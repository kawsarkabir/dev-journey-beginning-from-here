// 19-7 multiple ways to get and set object property

var shoppingCart ={
    books:3,
    sunglass: 1,
    keyboard:5,
    mouse:4,
    pen:25
}
// when you know the property name use dot nataion
var penCount =shoppingCart.pen;
console.log(penCount);

// alternative systems
var penCount2 = shoppingCart['books'];
console.log(penCount2);
console.log(shoppingCart);

// find the object keys
var properties = Object.keys(shoppingCart);
console.log(properties);

//  find the object values
var propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);




// set propertu value
console.log(shoppingCart);
// systems 1
shoppingCart.mouse = 10;
console.log(shoppingCart);
//systems 2
shoppingCart['mouse'] = 30;
console.log(shoppingCart);

// system 3
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
