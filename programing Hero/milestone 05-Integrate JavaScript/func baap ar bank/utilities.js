function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const  inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    inputField.value = ''
    return inputValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString);

    return elementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
