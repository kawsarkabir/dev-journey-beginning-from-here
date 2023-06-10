import React, { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
 

const App = () => {
  const [count, setCount]= useState(0)
  const Increase = ()=>setCount(count + 1)
  return (
    <div>
       <Navbar count={count}/>
        <Shop Increase={Increase}/>
    </div>
  );
};

export default App;
