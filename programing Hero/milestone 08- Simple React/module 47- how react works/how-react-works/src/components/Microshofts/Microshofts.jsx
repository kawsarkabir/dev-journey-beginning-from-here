import React, { useState } from 'react';

const Microshofts = () => {
    const [microsofts, setMicrosofts]=useState([])
    useState(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMicrosofts)
    },[])
    return (
        <div>
            <h1>Welcome to Microshoft components</h1>
            {data.map((food) =><Food key = {food.id} food ={food} />)}
        </div>
    );
};

export default Microshofts;