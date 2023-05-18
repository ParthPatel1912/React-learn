import React from 'react'
import ColorParent2 from './ColorParent2'

function Color() {
    const json = {
        question: 'Do you support cookies in cakes?',
        choices:
            [
                { text: 'Red', value: '1' },
                { text: 'Green', value: '2' },
                { text: 'Blue', value: '3' }
            ]
    }
    return (
        <div className='text-center'>
            <ColorParent2 model={json}/>
        </div>
    )
}

export default Color
