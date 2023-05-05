const countiesName =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCounties(data))
}
countiesName()
const displayCounties = countries =>{
    const countiesContainer = document.getElementById('counties-container');
    countries.forEach(county =>{
        const countyDiv = document.createElement('div');
        countyDiv.classList.add('desh')
        countyDiv.innerHTML = `
        <h3>Name: ${county.name.common}</h3>
        <h3>Capital: ${county.capital}</h3>
        <button onclick="loadCountyDetails('${county.cca2}')">Details</button>
        `
        countiesContainer.appendChild(countyDiv)

    });
};

const loadCountyDetails = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountiesDisplay(data[0]))
}


const displayCountiesDisplay = county =>{
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
    <h2>Country Details: ${county.name.common}</h2>
    <h3>Capital: ${county.capital}</h3>
    <img src="${county.flags.png}">
    `
}