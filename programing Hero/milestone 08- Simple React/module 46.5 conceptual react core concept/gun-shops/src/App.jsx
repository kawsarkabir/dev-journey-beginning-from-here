import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Guns from "./components/Guns/Guns";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [count, setCount] = useState(0);
  const Increase = () => setCount(count + 1);
  return (
    <div className="App">
      <Navbar count={count} />
      <Guns Increase={Increase} />
    </div>
  );
};

export default App;
