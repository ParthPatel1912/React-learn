import React, { useEffect, useMemo, useRef, useState } from 'react'

const Memo = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [test1, setTest1] = useState(0);
    const [test2, setTest2] = useState(0);
    // const ref1 = useRef();
    // const ref2 = useRef();
    // const sum_temp = useRef();
    // useEffect(() => {
    //     ref1.current = value1;
    // },[value1])
    // useEffect(() => {
    //     ref2.current = value2;
    // },[value2])
    // const ref_1 =  useMemo(() => {
    //     return ref1.current = value1
    // }, [value1]);
    // const ref_2 =  useMemo(() => {
    //     return ref2.current = value2
    // }, [value2]);
    // const prev1 = ref1.current;
    // const prev2 = ref2.current;
    const sum = useMemo(() => {
        if((test1 === 1) && (test2 === 1)) {
            return { 
                total : value1 + value2,
                // a : setTest1(0), 
                // b : setTest2(0)
            };
        }
        else
            return {total : 0};
    },[test1, test2, value1, value2])
    const setFirst = () => {
        setValue1((preValue) => preValue + 1);
        setTest1(1);
    }
    const setSecond = () => {
        setValue2((preValue) => preValue + 1);
        setTest2(1);
    }
    return (
        <div className='text-center'>
            <p>UseMemo example to chage value if any button call</p>
            <p>Memo is value based return</p>
            <button className='btn btn-warning me-5' onClick={setFirst}>{value1}</button>
            <button className='btn btn-warning' onClick={setSecond}>{value2}</button>
            <p>{sum.total}</p>
        </div>
    )
}

export default Memo
