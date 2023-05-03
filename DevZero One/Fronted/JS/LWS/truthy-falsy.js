/* const myConst = true;
if(myConst){
    console.log('i am truthy');
}else{
    console.log('i am falsy');
} */
// false, null, NaN, '', 0, 
var type;
var age = 18;
if(age >=18){
    type = 'adult';
}else{
    type = 'child'
}
console.log(type);


// ternary operator
const type2 = (age >=18)? 'adult':'child'
console.log(type2);


// another exapmple 
var type3 = age >=18? 'adult hoico': age < 10 ? 'child' : 'young';
console.log(type3);