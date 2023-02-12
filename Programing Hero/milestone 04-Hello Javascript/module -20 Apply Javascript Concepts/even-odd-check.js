// find the even number useing function 
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const checkEvenNumber = 88;
console.log(isEven(checkEvenNumber));