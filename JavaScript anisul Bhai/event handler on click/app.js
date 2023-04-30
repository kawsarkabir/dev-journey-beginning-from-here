// style by javascript
const link = document.getElementsByTagName('a')[0];
link.innerHTML = 'VISIT GOOGLE';
link.style.textDecoration = 'none';
link.style.fontSize = '40px';
link.style.color = 'red';
// 
var h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = 'yeyo yeyo';

// create element by javascript
var newElement = document.createElement('h1');
newElement.innerHTML = 'create a new element bu javascript';
document.querySelector('.my-div').appendChild(newElement);
// remove a element by js

var removeElement =document.querySelector('.my-div');
h1.removeChild(removeElement.firstElementChild)