// 19-2 Declare a Function, call function, function vs loop

/* function startFan(){
    console.log('Stand up');
    console.log('walk towards the switch');
    console.log('press tha switch');
}
startFan();
 */

//  parameters 
/* function bringSingra(money){
    console.log('singara den mama');
    console.log(money);
    console.log('ai nen singara');

}
bringSingra(300) */
/* function bringSingra(money){
    console.log('eto tk disen',  money);
    console.log('ai nen singara');
}
//===================================================
var taka = 300;
bringSingra(taka); */

//2 number add function
/* function add(num1, num2){
    sum = num1 + num2;
    console.log(sum);
}
add(5 , 7) */


// ===============================================

// 19-4 Everything you need to know about return from a function

/* function add(number1, number2){
    console.log(number1 , number2);
    var sum = number1 + number2;
    // return sum;
    return sum;
}
var total = add(7, 13);
console.log('Total' , total); */

/* function bringSingra(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTK = 150;
var eachSingra = bringSingra(myTK);
console.log('Eating singara', eachSingra);
 */
// =====================================================
// 19-5 Function examples and Function summary

/* function getAvarage(assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + 
     assingment3;
const avarage = total / 3;
return avarage;
}
const assingment1Marks = 60;
const assingment2Marks = 58;
const assingment3Marks = 59;
var myAvarage = getAvarage(assingment1Marks, assingment2Marks, assingment3Marks);
console.log(myAvarage); */
// ====================================================

// ====================
function add(num1 , num2){
    const sum = num1 + num2;
    return sum;
}
const result1 = add( 5, 10);
// console.log(result1);
const result2 = add( 15, 20);
// console.log(result2);
const finalResult = add(result1 + result2);
console.log(finalResult);
