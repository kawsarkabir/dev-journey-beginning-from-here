const bedehsi =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaybedesh(data))
}
bedehsi()
const displaybedesh = data =>{
    /* for(const county of data){
        console.log(county);
    } */
    const countiesContainer = document.getElementById('counties-container');
    data.forEach(county =>{
        const countyDiv = document.createElement('div');
        countyDiv.classList.add('bidesh')
        countyDiv.innerHTML = `
        <h3>name: ${county.name.common} </h3>
        <h4>capital: ${county.capital}</h4>
        `
        countiesContainer.appendChild(countyDiv)
    })
}