import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>So far steps today: {props.steps}</p>
            <Dial steps={props.steps}/>
        </div>
    );
};

export default Display;