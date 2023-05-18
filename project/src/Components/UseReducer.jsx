import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'
import reducer from './reducer';

const initialValue = 0;
function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <div className='text-center'>
            <h6>Use Reducer hook example</h6>
            <button className='btn btn-primary' onClick={() => dispatch({title:'Increment'})}>+</button>
            <span className='me-5 ms-5'>{count}</span>
            <button className='btn btn-primary' onClick={() => dispatch({title:'Decrement'})}>-</button>
        </div>
    )
}

export default UseReducer
