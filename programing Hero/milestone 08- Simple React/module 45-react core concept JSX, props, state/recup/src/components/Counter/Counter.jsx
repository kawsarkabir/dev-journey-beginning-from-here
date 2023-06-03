import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount]=useState(0)
    const Increase =()=>setCount(count + 1)
    const Decrease=()=>setCount(count - 1)
    return (
        <div>
            <>
            <h1 className='my-2'>Counter App {count}</h1>
            <button onClick={Increase} className='btn-accent '>Increase</button>
            <button onClick={Decrease} className='btn-info'>Decrease</button>
            </>
        </div>
    );
};

export default Counter;