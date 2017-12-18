import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';

export default class Starter extends Component {
  render() {
    return (
      <div>
       	Get Started!
      </div>
    );
  }
}

render(<Starter />, document.getElementById('app'));
