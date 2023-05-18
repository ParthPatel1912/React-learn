import React, { Component } from 'react'
import { FetchApiData } from '../interface';

export class ApiFetch extends Component {

    state = { Data: [] };

    data = async (): Promise<void> => {
        try {
            const apiData = await fetch('https://fakestoreapi.com/products');
            const jsonData = await apiData.json();
            console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    }

    dataGet = async (): Promise<void> => {
        await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => this.setState({ Data: json }))
            .catch(error => {
                console.log(error);
            });
    }

    dataPost = async (): Promise<void> => {
        const apiData = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        }).then(res => res.json())
            .catch(error => {
                console.log(error);
            });
        console.log(apiData);
    }

    dataDelete = async (id: number): Promise<void> => {
        const apiData = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .catch(error => {
                console.log(error);
            });
        console.log(apiData);
    }

    dataEdit = async (id: number): Promise<void> => {
        const apiData = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    title: `test product ${id}`,
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        }).then(res => res.json())
            .catch(error => {
                console.log(error);
            });
        console.log(apiData);
    }

    async componentDidMount(): Promise<void> {
        // this.dataPost();
        this.dataGet();
    }
    render() {
        return (
            <div>
                Api Fetch
                <div>
                    <button onClick={this.dataPost}>Add</button>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid blue' }}>title</th>
                                <th style={{ border: '1px solid blue' }}>price</th>
                                <th style={{ border: '1px solid blue' }}>category</th>
                                <th style={{ border: '1px solid blue' }}>image</th>
                                <th style={{ border: '1px solid blue' }}>rating</th>
                                <th style={{ border: '1px solid blue' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Data.map((item: FetchApiData) =>
                                    <tr key={item.id}>
                                        <td style={{ border: '1px solid blue' }}>{item.title}</td>
                                        <td style={{ border: '1px solid blue' }}>{item.price}</td>
                                        <td style={{ border: '1px solid blue' }}>{item.category}</td>
                                        <td style={{ border: '1px solid blue' }}><img src={item.image} alt={item.title} style={{width: '50px'}}/></td>
                                        <td style={{ border: '1px solid blue' }}>{item.rating.rate}</td>
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

export default ApiFetch