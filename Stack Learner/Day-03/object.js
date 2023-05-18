//  object declare
const person = {
    name:'kawsar kabir', 
    phone: '018823',
    isSingle:true,
    address:{
        street:'mirpur 27/28',
        more:'dhaka bangladesh'
    }
}

// ====== object Literal vs constructor =======
// object Literal
let obj = {}
obj.x = 10
// console.log(obj);
let point ={
    x:10,
    y:20
}
point.z = 30
console.log(point);

// object consttructor
let constObj = new Object()
constObj.x = 10
console.log(constObj);



//  ========== accessing object properties =======
var point2 ={
    x:10, 
    y:20, 
    z:30,
    person2:{
        name:'kawsar kabir',
        phone: '018823***',
        address:'barabil'
    }
}
// console.log(point2.z);
console.log(point2.person2.name);

//  array notation 
console.log(point2['person2'].phone);


// setting object properties
point2.x = 45
point2.a = 16
console.log(point2.t);



//  ====== remove object propertice =======
point2.a = undefined
console.log(point2);


// ease way delete operator
delete point2.a
console.log(point2);