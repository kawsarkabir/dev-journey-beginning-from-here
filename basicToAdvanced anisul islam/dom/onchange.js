// keypress listener
document.addEventListener('keypress', function(e){
    var text = e.key;
    document.querySelector('p').innerHTML = 'you have pressed ' + text;
}) 
// another example
var count = 0;
document.querySelector('textarea').addEventListener('keypress', function(e){
    count++;
    var text = e.key ;
    document.querySelector('p').innerHTML = 'you have pressed ' + count;
})
