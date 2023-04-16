/* function functionName(parameters){
    //funciton body
    //return
}
var returnValue = functionName(parameters value); */
function getAverage(assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + assingment3;
    const average = total / 3;
    return average;
}
const assingment1Marks = 60;
const asssingment2MArks = 58;
const assingment3Marks = 59;
var myAverage = getAverage(assingment1Marks, asssingment2MArks, assingment3Marks);
console.log(myAverage);