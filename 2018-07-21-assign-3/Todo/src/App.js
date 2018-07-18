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

  // handle changes from AddItem
  onAddItem = (item) => {
    console.log("App.onAddItem()");
    let newList = [...this.state.list, item];
    this.setState({list:newList})

    // the update of this.state.list might be not done yet, so use newList rather than state.list
    // but why do we need to update ShowItem explicitly here ?? 
    this.refs.showitem.updateState(newList);
  }

  // handles changes from ShowItem 
  onShowItem = (newList) => {
    console.log('App.onShowItem()');
    this.setState({list:newList})

    // apprently, we don't need to update ShowItem here.
    //this.refs.showitem.updateState(newList);
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
            <ShowItem ref='showitem' list={this.state.list} listchanged={this.onShowItem}/>
         </div>
      </div>
    );
  }
}

export default App;
