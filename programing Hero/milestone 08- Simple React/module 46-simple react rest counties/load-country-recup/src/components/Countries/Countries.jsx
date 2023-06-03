import React from "react";
import Country from "../Country/Country";

const Countries = ({ countries }) => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center my-5">visiting {countries.length} every country of the world </h1>
      <div className="grid grid-cols-4 gap-4">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
