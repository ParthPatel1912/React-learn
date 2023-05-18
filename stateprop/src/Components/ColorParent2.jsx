import React, { Component } from 'react'
import ColorChild from './ColorChild'

export class ColorParent2 extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: '', color : '' }
    }

    handleClick() {
        console.log('submitted option', this.state.selectedOption);
    }

    handleOnChange(e) {
        console.log('selected option', e.target.value);
        this.setState({ selectedOption: e.target.value });

        if (e.target.value === '1') {
            this.setState({color: 'red'});
        }
        else if (e.target.value === '2') {
            this.setState({color: 'green'});
        }
        else if (e.target.value === '3') {
            this.setState({color: 'blue'});
        }
        console.log('selected color', this.state.color);
    }
    render() {
        return (
            <div className="poll">
                {this.props.model.question}
                <ColorChild
                    options={this.props.model.choices}
                    onChange={(e) => this.handleOnChange(e)}
                    selected={this.state.selectedOption}
                    color={this.state.color} />
                <button className='mt-3' onClick={() => this.handleClick()}>Vote!</button>
            </div>
        )
    }
}

export default ColorParent2