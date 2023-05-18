import React, { useEffect, useState , useContext} from 'react'
import FormFun from './FormFun'
import { AppContext, EffectContext } from './useContext';

const UseEffect = () => {
    const myData = useContext(AppContext);

    const [dta1, setData1] = useState('Using of useEffect changed it.')
    useEffect(() => {
        
    });

    const useEffectEvent = () => {
        // setData1(prev => prev+'Using of useEffect changed it.');
        myData.setEffectData(dta1)
        console.log(myData);
        <FormFun test={myData.effectData} />
    }
    return (
        <div className='text-center'>
            <span>Click below button and check Effect in another component</span>
            <button className='btn btn-primary ms-5' onClick={useEffectEvent}>Click</button>
            {/* <FormFun test={dta1} /> */}
        </div>
    )
}

export default UseEffect
