import React, { Component } from 'react'
import AddItem from './Components/AddItem'
import ShowItem from './Components/ShowItem'
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
    console.log("App.onAddItem()");
    let newList = [...this.state.list, item];
    this.setState({list:newList})

    // the update of this.state.list might be not done yet, so use newList rather than state.list
    this.refs.showitem.updateState(newList);
  }

  render() {
    console.log("App.render()")
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
         <div>
            <hr></hr>
            <ShowItem ref='showitem' list={this.state.list}/>
         </div>
      </div>
    );
  }
}

export default App;
