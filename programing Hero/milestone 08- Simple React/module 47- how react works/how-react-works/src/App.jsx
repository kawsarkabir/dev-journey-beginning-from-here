import React from 'react';
import './App.css'
import Foods from './components/Foods/Foods';
import Microshofts from './components/Microshofts/Microshofts';
 

const App = () => {
  return (
    <div className='App'>
        <Foods/>
        <Microshofts/>
    </div>
  );
};

export default App;
