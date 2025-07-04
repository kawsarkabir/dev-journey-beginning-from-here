function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber -1;
    }
    caseNumberField.value = newCaseNumber;
    
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
// step 1: even handler added in btn case plus
document.getElementById('btn-case-plus').addEventListener('click', function(){
    // step 2: get the case number field && update the value ++
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);

    
});
// step 3: even handler added in btn case minus
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber)
});
