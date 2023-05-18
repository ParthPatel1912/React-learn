import React, { useState } from 'react'
import {Users} from './Users'

const Singlefilter = () => {
    const [searchtext, setSearchtext] = useState('');
    return (
        <div className='text-center col-md-4 offset-4'>
            <input type="text" placeholder='search here.....' onChange={(e)=> setSearchtext(e.target.value)} />
            <ul className='list-group mt-3 list-group-flush'>
                {Users.filter((user) => user.first_name.toLowerCase().includes(searchtext)).map((user)=>
                    <li key={user.id} className='list-group-item'>{user.first_name}</li>
                )}
            </ul>
        </div>
    )
}

export default Singlefilter
