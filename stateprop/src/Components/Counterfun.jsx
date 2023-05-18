import React from 'react'
import { useState } from 'react';

const Counterfun = () => {
    const [state, setstate] = useState(0);
    const clickPlus = () => {
        setstate(state + 1);
    }
    const clickMinus = () => {
        setstate(state - 1);
    }
    return (
        <div className='text-center'>
            <h3>Counter using function and useState </h3>
            <button className='btn btn-primary' onClick={clickPlus}>+</button>
            <span className='me-5 ms-5'>{state}</span>
            <button className='btn btn-primary' onClick={clickMinus}>-</button>
        </div>
    )
}

export default Counterfun
