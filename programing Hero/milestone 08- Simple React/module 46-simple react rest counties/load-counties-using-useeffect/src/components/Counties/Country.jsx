import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h2>Hello Form Countiese</h2>
      {
        countries.map(county => )
      }
    </div>
  );
};

export default Country;
