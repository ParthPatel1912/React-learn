import React, { Component } from 'react';
import logo from '../logo.svg';

export class New extends Component {
  render() {
    return (
      <div>
        Testing new
        <a href='google.com' target='_blank'>Google</a>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default New
