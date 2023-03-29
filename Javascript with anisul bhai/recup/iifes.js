// javascript bangla tutorial 25 : IIFEs and function expression

(function display(message){
    console.log('Hello I am IIFFs');
})();

const displayFun = function displayMessage(){
    console.log('message');
}
displayFun();