const places = document.getElementById('fruit-title');
places.innerText = 'Most Popular Places Using By JS'
console.log(places); 
 const importantPlaces = document.getElementById('important-places');
console.log(importantPlaces);  

const importantPlace = document.getElementsByClassName('important-place');
for (const importantPlace of importantPlace){
    console.log(importantPlace.innerText);
} 

// querySelector, querySelectorAll
const someLi =document.querySelector('.ul-container li')
console.log(someLi);

