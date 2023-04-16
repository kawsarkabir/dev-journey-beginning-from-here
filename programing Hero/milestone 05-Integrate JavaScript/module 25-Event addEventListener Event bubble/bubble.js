document.getElementById('item-2').addEventListener('click' , function(event){
    console.log('items-2 click');
    event.stopPropagation()
})
document.getElementById('list-ul').addEventListener('click' , function(){
    console.log('ul list paici');
})
document.getElementById('list-container').addEventListener('click' , function(){
    console.log('section click');
})
document.getElementById('body').addEventListener('click' , function(){
    console.log('body click');
})