const loadCounties = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCounties(data));
};
const displayCounties = (countries) => {
  console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountriesHTML(country));
  const container = document.getElementById("counties");
  container.innerHTML = countriesHTML.join(" ");
};

// original 
/* const getCountriesHTML = (country) => {
  return `
    <div class = "country">
    <h2>${country.name.common}</h2>
    <img src = "${country.flags.png}">
    </div>
    `;
} */
//  ============ option 2 =======
/* const getCountriesHTML = (country) => {
    const {name, flags} = country
    return `
      <div class = "country">
      <h2>${name.common}</h2>
      <img src = "${flags.png}">
      </div>
      `;
  }
 */
// ============ option 3  ===========
  const getCountriesHTML = ({name, flags, area, region }) => {
    return `
      <div class = "country">
      <h2>${name.common}</h2>
      <img src = "${flags.png}">
      <p>Area: ${area}</p>
      <P>Region: ${region}</P>
      </div>
      `;
  }
loadCounties();
