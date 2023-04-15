// console.log('Hello World');
const h1 = document.getElementsByTagName('h1');
// console.log(h1);

const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    // console.log(li.innerText);
}


const places = document.getElementsByClassName('important-place');
for( const place of places){
    // console.log(place.innerText);
}


// traversing DOM 5 types
// 1. document.getElementsByTagName('ul');
// 2. document.getElementById('place-title');
// 3. document.getElementByClassName('important-place);
const placess = document.querySelectorAll('.important-place');
// console.log(placess);

const someLi = document.querySelectorAll('ul li');
// console.log(someLi);
for(let  jaiga of someLi){
    console.log(jaiga.innerText);
}


// getAttribute
const title = document.getElementById('place-title');
title.setAttribute('title', 'tultips by js');
