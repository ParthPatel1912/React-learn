import React, { Component } from 'react'

export class Form extends Component {
    state = {name:'',age:''};
    render() {
        const ChangeEventHendler = (e) => {
            this.setState({
                name: e.target.value
            });
        }

        const ClickEventHendler = () => {
            this.setState({
                age: this.state.name
            })
        }
        return (
            <>
                <div className='text-center'>
                    <h3>Form using class useState</h3>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="form-outline">
                            <input type="text" name='name' placeholder='enter your name' id="name" className="form-control" onChange={ChangeEventHendler}/>
                        </div>
                        <button className='btn btn-success ms-3' onClick={ClickEventHendler}>Enter</button>
                    </div>
                    <span>Output onChange : </span>
                    <span>{this.state.name}</span><br />
                    <span>Output Onclick : {this.state.age}</span>
                </div>
            </>
        )
    }
}

export default Form