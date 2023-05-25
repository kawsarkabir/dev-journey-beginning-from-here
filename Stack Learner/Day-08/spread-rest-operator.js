// rest operator
/* jodi kunu funciton aar peramiter hisabe ... oprarator use kora hoi tahole setake amra bolbo rest operator  bki jekunu jaigai spread operator*/

// spread operator  => baki sob jaigai spread
function sum(){
    let sum = 0
    for(let i = 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum 
}
// console.log(sum(1, 2, 3, 4, 5));


// ...rest operator
function sum(...rest){
    return rest.reduce((a, b)=> a + b)
}
console.log(sum(1, 2, 3, 4, 5));