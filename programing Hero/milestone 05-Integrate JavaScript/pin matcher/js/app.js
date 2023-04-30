function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }else{
         return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click' , function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener('click',function(e){
    const number = (e.target.innerText);
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})
// varify pin number 
document.getElementById('verify-pin').addEventListener('click', function(){
     const displayPinField = document.getElementById('display-pin');
     const currentPin = displayPinField.value;

     const typeNumberField = document.getElementById('typed-numbers');
     const typeNumber = typeNumberField.value;

     if(typeNumber === currentPin){
        console.log('current pin');
     }else{
        console.log('wrong pin please try again');
     }

})