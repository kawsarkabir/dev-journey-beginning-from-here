// 24-1 What is dom, Connect your JS file with html file

console.log('ai j ami akahne. wow ! tumi amake khuje peyecho');
console.log(document);
console.log(document.body); 

// 24-2 Traversing dom - getElementsByTagName


document.getElementsByTagName('h1')
const liCollection = document.getElementsByTagName('li')
// console.log(liCollection);
for( const li of liCollection){
    console.log(li);
}


//  
 const allHeading = document.getElementsByTagName('h1')
for ( const h1 of allHeading){
    console.log(h1.innerHTML);
} 

// const someLi = document.querySelectorAll('.ul-container li')

// console.log(someLi);
for(li of someLi ){
    // console.log(li);
    // console.log(li.innerTEXT);
}


document.getElementById('fruits-title').style.color ='red'
'red'
document.getElementById('fruits-title').style.backgroundColor ='green'
'green'
document.getElementById('fruits-title').style.borderRadius = '50px'
document.getElementById('fruits-title').style.textAlign = 'center'
document.getElementById('fruits-title').style.padding = '20px'

document.getElementsByClassName('important-place')[0].innerHTML = 'Hello world'
document.getElementsByClassName('important-place')[0].innerT = 'Hello world'
document.getElementsByClassName('important-place')[0].innerText = 'Hello world' 
// 24-3 Traversing dom - getElementByClass VS getElementById


const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid red'
    section.style.marginBottom = '10px'
    section.style.borderRadius = '20px'
    section.style.backgroundColor = 'lightGray'
}

const placeConteiner = document.getElementById('places-conteiner')
// placeConteiner.style.backgroundColor = 'pink'
placeConteiner.classList.add('k2-bg')
placeConteiner.classList.add('large-text')
placeConteiner.classList.remove('large-text')
