import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    useEffect(()=>{
        console.log(steps);
    }, [steps])
    const countSteps =()=>setSteps(steps + 1)
    return (
        <div>
            <h2>My Current Steps: {steps}</h2>
            <button onClick={countSteps}> De Dour</button>
            <Display name='garmin' steps={steps}/>
        </div>
        
    );
};

export default Watch;