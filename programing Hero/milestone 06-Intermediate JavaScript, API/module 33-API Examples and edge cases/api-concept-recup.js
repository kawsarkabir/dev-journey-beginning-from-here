const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(ress => ress.json())
    .then(data => displayQuote(data))
}
const displayQuote = data =>{
    const blockQuote = document.getElementById('quote-container')
    blockQuote.innerText = data.quote
}