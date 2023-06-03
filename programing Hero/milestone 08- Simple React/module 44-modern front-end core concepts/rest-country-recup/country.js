const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (counties) => {
  console.log(counties);
  const allCountryHTML = counties.map((country) => getCountryHTML(country));
  //   console.log(allCountryHTML);
  const container = document.getElementById("countries");
  container.innerHTML = allCountryHTML.join(" ");
};

const getCountryHTML = ({ name, flags, capital, area }) => {
  return `<div class='country'>
  <img src= ${flags.png}>
  <h2> ${name.common}</h2>
  <p>capital: ${capital}</p>
  <p>area: ${area}</p>
  </div>
  `;
};

loadCountries();
