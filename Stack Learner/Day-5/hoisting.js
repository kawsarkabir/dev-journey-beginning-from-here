// hoisting in JavaScript 
let a = 100
// newPrint(a)

print(10)

let newPrint = print
newPrint(45)

function print(a){
    console.log(a);
}

print(a)


// crational phase
// a = undefined
//newPrint = undefineed
// print = ref


// executional phase
// a = 100
// newPrint = ref 
// 