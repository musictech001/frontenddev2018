import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      anotherValue: 999,
    };
  }
  
  handleClick = ()=>{
  	// receive value from props.A
  	console.log("hangleClick: this.props.A=" + this.props.A);

  	// send something (a simple value or this.state) to props.B 
  	this.setState({value:this.state.value + 1})
  	console.log("child: value = " + this.state.value);
  	this.props.B(this.state);
  }

  render() {
    return (
      <div>
        this is the Child!
        <br/>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default Child;