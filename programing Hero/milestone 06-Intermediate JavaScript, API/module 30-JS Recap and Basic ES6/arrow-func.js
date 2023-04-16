function add(frist, second){
    const total = frist + second;
    return total;
}
const result = add(10, 20)
console.log(result);



const number = 56;

const add1 = function(frist, second){
    const total = frist + second;
    return total;
}
const add2 = function(frist, second){
    return  frist + second;
}

const result1 = add1(10, 20);
console.log(result1);
const result2 = add2(10, 20);
console.log(result2);

// arrow function 
const add5 = (frist, second) => frist + second;
const folafol = add5(10, 20);
console.log(folafol);