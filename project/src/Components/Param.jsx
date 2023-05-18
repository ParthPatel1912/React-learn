import React from 'react'
import { useParams } from 'react-router-dom'

const Param = () => {
    const { media, id } = useParams();
    return (
        <div className='text-center'>
            <h3>Use of use param hook of routing</h3>
            {(media) ? <p>Add dynamic media url from URl is : {media}</p> : ''}
            {(id) ? <p>Add dynamic media id from URl is : {id}</p> : ''}
        </div>
    )
}

export default Param
