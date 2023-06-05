import React from 'react';
import './App.css'
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';
 

const App = () => {
  return (
    <div className='App'>
         <Device />
         <Watch/>
    </div>
  );
};

export default App;
