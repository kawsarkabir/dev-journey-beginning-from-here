function updatePhoneNumber(isIncrease){
    const phoneNumberField =document.getElementById('phone-number-field')
    const previousPhoneNumnerString = phoneNumberField.value;
    const previousPhoneNumner = parseInt(previousPhoneNumnerString);
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber= previousPhoneNumner + 1;
    }else{
        newPhoneNumber= previousPhoneNumner - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
 }


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
     const newPhoneNumber = updatePhoneNumber(false);
     updatePhoneTotalPrice(newPhoneNumber)
})