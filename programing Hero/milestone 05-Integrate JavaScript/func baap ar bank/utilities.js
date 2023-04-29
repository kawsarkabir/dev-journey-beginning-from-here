// get the input vlaue 
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const  inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    inputField.value = ''
    return inputValue;
}
// get the element vlaue 
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}
// set the value 
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
