import React, { useState } from 'react';
import './Counter'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseCount =()=> setCount(count + 1)
    const decreaseCount=()=> setCount(count -1)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
};

export default Counter;