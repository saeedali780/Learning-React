import React, { useState } from 'react';

const Counter = () => {
const [count,setCount] = useState(0);

const [increamentBy,setIncrementBy] = useState(1)
    const increament = ()=>{
        setCount(count + increamentBy)
    };

    const decrement = ()=>{
        setCount(count - increamentBy)
    };

    const increaseIncrement = ()=>{
        setIncrementBy(increamentBy+1)
    };
    const decreaseIncrement = ()=>{
        setIncrementBy(increamentBy - 1)
    }
  return (
    <div>
        <h1>count value is:{count} </h1>
        <button onClick={increament}>Increament</button>
        <button onClick={decrement}>Decrement</button>

        <h1>We are increamenting the value By:{increamentBy}</h1>
        <button onClick={increaseIncrement}>increase Increment</button>   
        <button onClick={decreaseIncrement}>decrease Decrement</button>   

    </div>
  )
}

export default Counter
