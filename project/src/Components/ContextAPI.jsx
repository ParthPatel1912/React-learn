import React, { useContext } from 'react';
import { AppContext } from './useContext';

function ContextAPI() {
    const myData = useContext(AppContext);
    return (
        <div className='text-center'>
            This is Context API demo which is call from global storage
            My Name is {myData.name}<br />
            I am working on {myData.tech}<br />
        </div>
    )
}

export default ContextAPI
