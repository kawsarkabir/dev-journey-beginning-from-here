document.getElementById('wel-btn').addEventListener('click', function(){
    const headerContainer = document.getElementById('header')
    const h1 = document.createElement('h1');
    h1.innerText = 'yeyo event a apnake sagotom';
    headerContainer.appendChild(h1);
})
// bg set 
document.getElementById('header').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
});
