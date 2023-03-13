/*
1.add event listener to the case plus button 
2.get the value inside the case number field (input filed)
3. convert the number to an integer
4. calculate the case number 
5. set the value to the case numbr field 
*/
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString =caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})