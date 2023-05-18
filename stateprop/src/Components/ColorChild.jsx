import React from 'react'

const ColorChild = ({options, selected, onChange, color}) => { 
    return (
        <div className="pollOption">
            {options.map((choice, index) => (
                <label key={index}>
                    <input type="radio"
                        name="color"
                        value={choice.value}
                        key={index}
                        checked={selected === choice.value}
                        onChange={onChange} />
                    {choice.text}
                </label>
            ))}
            <div className='text-center col-md-4 offset-4 mt-5 justify-center' style={{backgroundColor : color}} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
}

export default ColorChild
