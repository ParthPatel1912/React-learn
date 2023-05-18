import React, { Component } from 'react'

export class Counterclass extends Component {
    state = {count : 0};
    render() {
        const clickPlus = () => {
            this.setState({
                count : this.state.count + 1
            })
        }
        const clickMinus = () => {
            this.setState({
                // count : this.state.count - 1
                count : (this.state.count > 0) ? (this.state.count - 1) : 0
            })
        }
        return (
            <div className='text-center'>
                <h3>Counter using class and state Component</h3>
                <button className='btn btn-primary' onClick={clickPlus}>+</button>
                <span className='me-5 ms-5'>{this.state.count}</span>
                <button className='btn btn-primary' onClick={clickMinus}>-</button>
            </div>
        )
    }
}

export default Counterclass