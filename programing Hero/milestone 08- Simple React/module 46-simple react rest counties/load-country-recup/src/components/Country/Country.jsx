import React from "react";

const Country = ({ country }) => {
  const { name, capital, area, region, population} = country;
  return (
    <div className="bg-purple-600 border m-5 p-5">
      <p>name: {name.common}</p>
      <p>capital: {capital}</p>
      <p>area: {area}</p>
      <p>region: {region}</p>
      <p>population: {population}</p>
    </div>
  );
};

export default Country;
