/*  step by step instraction here
1. add event liseten to the case plus button 
2. get the value inside the case nuumber field 
*/
function updateCaseNumber(isIncrease){
    const caseNumberField =document.getElementById('case-number-field')
    const previousCaseNumnerString = caseNumberField.value;
    const previousCaseNumner = parseInt(previousCaseNumnerString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber= previousCaseNumner + 1;
    }else{
        newCaseNumber= previousCaseNumner - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
   const caseTotalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
});