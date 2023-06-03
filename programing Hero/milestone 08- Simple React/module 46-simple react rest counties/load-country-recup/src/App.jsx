import React, { useEffect, useState } from "react";
import './App.css'
import Countries from "./components/Countries/Countries";

const App = () => {
  const [countries, setCountries]=useState([])
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=>setCountries(data))
    }, [])
  return (
    <div>
       <Countries countries={countries}/>
    </div>
  );
};




export default App;
