import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, name, population, flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
             <h3>Name: {name.common}</h3>
             <p>region: {region}</p>
             <small>area: {area}</small>
             <p>population:{population}</p>
        </div>
    );
};

export default Country;