import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="countries-container">
      <h1>Everty Countru Details: {countries.length}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} key = {country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
