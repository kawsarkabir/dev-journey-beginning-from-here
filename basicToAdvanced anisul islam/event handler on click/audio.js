// how to add audio file in javascript
for(var i = 0; i<2; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text)

      
    })
}

function audioPlay(text){
    switch(text){
        case 'a':
            var audio = new Audio('audio/a.mp3');
            audio.play();
            break;
        case 'b':
            var audio = new Audio('audio/b.mp3');
            audio.play();
            break;    

    }
}