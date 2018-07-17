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

  // App receives items from Child via props B.
  // props B is connected to its handling function via 
  // the attribute B={this.handleB} in the tag Child.
  handleB = (item) => {
    console.log("Child.state.value = " + item.value);
    console.log("Child.state.anotherValue = " + item.anotherValue);
    this.setState({count:this.state.count+item.value});
  }

  render() {
    return (
      <div className="App">
        <div>
            <h1> transfer props from child to parent </h1>
            <p>count = {this.state.count}</p>
        </div>
        <Child A={this.state.count} B={this.handleB}/>
        
      </div>
    );
  }
}

export default App;
