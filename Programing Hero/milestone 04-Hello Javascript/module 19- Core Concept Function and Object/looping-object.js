// 19-8 (advanced) Looping through an Object and Object summary

var shoppingCart ={
    books:3,
    sunglass: 1,
    keyboard:5,
    mouse:4,
    pen:25
}
// find the object keys
var keys = Object.keys(shoppingCart);
console.log(keys);

//  find the object values
var values = Object.values(shoppingCart);
console.log(values);



for( var i =0; i< keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}


//  fo rin loop 
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}