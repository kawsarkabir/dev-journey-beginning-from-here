const photos = ['https://pbs.twimg.com/profile_banners/1495128278180724736/1676649510/1500x500', 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg'];

const imgTag = document.querySelector('img');
const count = 0;
function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}



// changing css in javascript 
function addStyle (){
    const customStyle = document.querySelector('custom-style');
    customStyle.style.color = 'red'
}