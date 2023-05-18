import React from 'react'

const Table = (props) => {
    return (
        <div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        {props.header.map((head) =>
                            <th>{head}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.data && (props.data.length !== 0 ? props.data.map((index) =>{
                        const {id, first_name, last_name, email} = index;
                        return <tr key={id}>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                        </tr>
                    }) : <tr>
                        <td colSpan={3}>NO DATA AVAILABLE</td>
                    </tr>)}

                    {props.todo && (props.todo.length !== 0 ? props.todo.map((index) =>
                        <tr key={index.id}>
                            <td>{index.id+1}</td>
                            <td>{index.todo}</td>
                            <td><button className='btn btn-danger ms-3' onClick={() => props.delete(index)}>Delete</button></td>
                        </tr>
                    ) : <tr>
                        <td colSpan={3}>NO TODO AVAILABLE</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

Table.defaultProps = {
    data : null,
    todo : null
};
export default Table
