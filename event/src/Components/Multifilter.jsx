import React, { useState } from 'react'
import { Users, Table_header } from './Users'
import Table from './Table';

const Multifilter = () => {
    const [searchtext, setSearchtext] = useState('');
    const searchText = (e) => {
        setSearchtext(e.target.value);
    }
    const search = (data) => {
        return data.filter((user) =>column.some((key) => user[key].toLowerCase().includes(searchtext)));
    }
    const column = ['first_name', 'last_name', 'email'];
    return (
        <div className='text-center'>
            <input className='col-md-4' placeholder='Search here.....' type="text" onChange={searchText} />
            {/* <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.filter((user) =>
                        column.some((key) => user[key].toLowerCase().includes(searchtext))
                    ).map((user) =>
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table> */}
            <Table header={Table_header} data={search(Users)}/>
        </div>
    )
}

export default Multifilter
