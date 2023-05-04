const countiesName =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCounties(data))
}
countiesName()

const displayCounties = countries =>{
    // for(const counties of data){
    //     console.log(counties);
    // }
    const countiesContainer = document.getElementById('counties-container');
    countries.forEach(county =>{
        console.log(county.name.common);

        const countyDiv = document.createElement('div');
        countyDiv.innerHTML = `
        <h3>Name: ${county.name.common}</h3>
        `
        countiesContainer.appendChild(countyDiv)

    })
}

