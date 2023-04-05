// onclick
document.getElementById('change-name').addEventListener('click', function(){
    // alert('i am evet listen')
});
// mousemove
document.getElementById('change-name').addEventListener('mousemove', function(){
    // alert(' i am mouseover event')
})
// mouseout
document.getElementById('change-name').addEventListener('mouseout', function(){
    // alert(' i am mouseover event')
})
// mouseover
document.getElementById('change-name').addEventListener('mouseover', function(){
    // alert(' i am remove event')
})


// multiple event handler 
 var len = document.querySelectorAll('.myButton').length;

 for(var i = 0; i < len; i++){
    document.querySelectorAll('#myButton')[i].addEventListener('click', function(){

        var text = this.innerHTML;
        document.querySelector('h2').innerHTML = text + 'is click';
    })
 }



//  how to audio file included in javascript