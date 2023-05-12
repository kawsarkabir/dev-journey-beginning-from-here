import React from 'react'
import './index.css'
import Card from './components/Card'
import Data from './data.json'


const App = () => {
  return (
    <div className='card-container'>
        {Data.map((item, index) => <Card key ={index} todoTitle ={item.title} todoDesc = {item.desc}/>)}
         
    </div>
  )
}

export default App
