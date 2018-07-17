import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = ()=>{
  	// receive value from props.A
  	console.log("hangleClick: this.props.A=" + this.props.A);

  	// send a value to props.B 
  	this.props.B(3);
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