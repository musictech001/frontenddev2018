import React, { Component } from 'react'
import AddItem from './Components/AddItem'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        list: [
        {
          name: "Watch movie",
          priority: "normal",
        },
        {
          name: "Buy vegetables",
          priority: "high",
        },
        {
          name: "Wash cloth",
          priority: "low",
        },
      ]
    }
  }

  onAddItem = (item) => {
    this.setState({
      list:[
        ...this.state.list,
        item,
      ]
    })
  }

  render() {
    const getTitle = () => "Add Items Here"
    return (
      <div className="App">
       <h2>Todo list</h2>
       <hr></hr>
       <AddItem onAdd={this.onAddItem} title={getTitle()}/>
       <hr></hr>
       <div>
         {
            this.state.list.map((item) => {
              return <div key={item.name}>{item.name} - {item.priority}</div>
            })
         }
       </div>
      </div>
    );
  }
}

export default App;
