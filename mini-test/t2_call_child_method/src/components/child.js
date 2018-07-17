import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props);
  }


    showAlert() {
        console.log("Child.showAlert()");
        alert('Hello World');
    }

    render() {
      console.log("Child.render()");
        return (
            <h1>Hello</h1>
        );
    }
}

export default Child;