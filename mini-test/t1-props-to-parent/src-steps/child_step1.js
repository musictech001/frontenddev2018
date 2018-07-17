import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = ()=>{
  	console.log("hangleClick: this.props.A=" + this.props.A);
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