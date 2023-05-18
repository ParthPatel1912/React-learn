import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [input, setInput] = useState('');
    // const [count, setCount] = useState();
    const count = useRef(0);

    useEffect(() => {
        // setCount(count + 1);
        count.current = count.current + 1;
    });

    const inputFocus = useRef();

    const chageBackground = () => {
        inputFocus.current.style.backgroundColor = "#a6a6a6";
    }
    return(
        <div className='text-center'>
            <p>Use Ref hook example on focus event to use ref attribute to element</p>
            <input type="text" name="words" id="words" onChange={(e) => setInput(e.target.value)} onFocus={chageBackground}/>
            <br />
            <span>{count.current}</span>
            <p ref={inputFocus}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export default Ref
