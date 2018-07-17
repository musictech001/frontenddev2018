import React  from 'react';
import logo from './logo.svg';

import Child from './components/child.js'

import './App.css';

class App extends React.Component {
    triggerChildAlert(){
        console.log("App.triggerChildAlert()");
        this.refs.child123.showAlert();
    }

    render() {
        console.log("App.render()");
        return (
            <div>
                {/* Note that you need to give a value to the ref parameter, in this case child*/}
                <Child ref="child123" />
                <button onClick={this.triggerChildAlert.bind(this)}>Click</button>
            </div>
        );
    }
}



export default App;
