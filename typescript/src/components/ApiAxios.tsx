import React, { Component } from 'react'
import axios from 'axios';
import { AxiosApiData } from '../interface';

export class ApiAxios extends Component {

    state = { Data: [] };

    dataGet = () => {
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => this.setState({ Data: response.data }))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    dataPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts/', {
            userId: 11,
            title: 'test product',
        })
            .then(function (response) {
                console.log(response.data.id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    dataDelete = (id: number) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    dataEdit = (id: number) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            userId: 55,
            title: `New ${id}`
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount() {
        this.dataGet();
    }
    render() {

        return (
            <div>
                Api Axios
                <div>
                    <button onClick={this.dataPost}>Add</button>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid blue' }}>userId</th>
                                <th style={{ border: '1px solid blue' }}>id</th>
                                <th style={{ border: '1px solid blue' }}>title</th>
                                <th style={{ border: '1px solid blue' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Data.map((item: AxiosApiData) =>
                                    <tr key={item.id}>
                                        <td style={{ border: '1px solid blue' }}>{item.userId}</td>
                                        <td style={{ border: '1px solid blue' }}>{item.id}</td>
                                        <td style={{ border: '1px solid blue' }}>{item.title}</td>
                                        <td style={{ border: '1px solid blue' }}>
                                            <span><button onClick={() => this.dataEdit(item.id)}>Edit</button></span> &nbsp;
                                            <span><button onClick={() => this.dataDelete(item.id)}>Delete</button></span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ApiAxios