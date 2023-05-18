import React, {useState, useCallback} from 'react'

var funcount = new Set();
const Callback = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])

    funcount.add(incrementCounter);
    funcount.add(decrementCounter);
    funcount.add(incrementNumber);

    return (
        <div className='text-center'>
            <p>Callack hook on increase number it separately increase </p>
            <p>Callack is function based return</p>
            Count: {count}, Number: {number}
            <button className='btn btn-info me-3 ms-3' onClick={incrementCounter}>
                Increase counter
            </button>
            <button className='btn btn-info me-3' onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button className='btn btn-info' onClick={incrementNumber}>
                increase number
            </button>
        </div>
    )
}

export default Callback
