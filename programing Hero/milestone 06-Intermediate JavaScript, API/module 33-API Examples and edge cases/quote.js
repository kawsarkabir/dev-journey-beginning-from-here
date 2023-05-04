const randomQuote =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = data =>{
    console.log(data);
    const quoteContainer = document.getElementById('random-quote');
    quoteContainer.innerText = data.quote;
}


 