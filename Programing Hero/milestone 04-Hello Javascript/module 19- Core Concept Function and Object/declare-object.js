// 19-6 Declare multiple objects with multiple properties
var student ={
    id: 100,
    name: 'kawsar kabir',
    class: 9,
    marks: 98
}

var mobile ={
    brand: 'samsung',
    price:18000,
    storage: '64gb',
    camera: '7mp'
}
console.log(mobile);
console.log(mobile.camera);
mobile.camera = '64mp';
console.log(mobile);
