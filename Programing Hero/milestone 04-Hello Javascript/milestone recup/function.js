// 19-2 Declare a Function, call function, function vs loop

function startFun(){
    console.log('aage hatte thak');
    console.log('switch a tip de ');
}
startFun()


function bringSingara(money){
    console.log('mama singara den');
}
bringSingara(10)



function add(num1, num2){
    sum = num1 + num2;
    console.log(num1, num2);
    console.log('2ta number ar sumation : ',sum);
}
add(10, 20)


// return finction 
function jokKoro(number1, number2){
    console.log(number1, number2);
    sum = number1 + number2;
    return sum;
}
let total = jokKoro(10, 90);
console.log('Total: ',total);


// function sumary

function functionName(paremeters){
    //funciton body
    //return
}
// functionName(paremeters value)
// var returnValue = functionName(paremeters)

function getAvarage(assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + assingment3;
    const avarage = total / 3;
    return avarage;
}

const assingment1Marks = 60;
const assingment2Marks = 58;
const assingment3Marks = 59;
var myAvarage = getAvarage(assingment1Marks, assingment2Marks, assingment3Marks)
console.log(myAvarage);
