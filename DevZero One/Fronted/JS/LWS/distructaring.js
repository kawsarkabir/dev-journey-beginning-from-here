// distructuring
const person = {
    name: 'k2',
    age: 18, 
    classs: 10,
    profation: 'student',
    // education:{
    //     degree: 'diploma'
    // }
};
const {name, age, classs, profation, education} = person;
/* console.log(name);
console.log(age);
console.log(classs);
console.log(profation);
console.log(education.degree); */


// nested objec tar khetre 


// array distructating
let numbers = [1, 2,  3,4, 5 ];
let [, a, , ,b] = numbers;
console.log(a, b);