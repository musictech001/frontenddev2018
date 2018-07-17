import React, { Component } from 'react';
import logo from './logo.svg';

import Child from './components/child.js'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <div>
            <h1> transfer props from child to parent </h1>
            <p>count = {this.state.count}</p>
        </div>
        <Child A={this.state.count}/>
        
      </div>
    );
  }
}

export default App;
