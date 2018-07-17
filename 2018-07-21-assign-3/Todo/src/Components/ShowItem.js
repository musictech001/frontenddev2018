import React, { Component } from 'react'

export default class ShowItem extends Component {
	constructor(props){
		super(props);
		this.state = {list:[]};
		console.log("ShowItem()");
	}

	componentDidMount(){
		console.log("ShowItem.componentDidMount");
		this.setState({list:this.props.list});
	}

	updateState = (item) =>{
		console.log("ShowItem.updateState()");
		this.setState({list:item});
	}

	handleClick = (item) =>{
		console.log("ShowItem.handleClick()");
		console.log(item.target.parentElement.firstElementChild);
		console.log(parseInt(item.target.parentElement.firstElementChild.innerHTML))
		const index = parseInt(item.target.parentElement.firstElementChild.innerHTML);
		let newList = this.state.list;
		newList.splice(index, 1);
		this.setState({list:newList});
	}

	render() {
		console.log("ShowItem.render()");
		let list = this.state.list;
		if (list===undefined) {
			list = [];
		}
		return(
				<div>
					<h3>List Items Here (ShowItem)</h3>
					<div>
						<ol>
						    {list.map((item, index) => {
		                		return <li key={item.name + '-l'} ref="item"> 
		                			<label type='number'>{index}</label>
		                			<input type="text" key={item.name + '-n'} defaultValue={item.name}/>
		                			<input type="text" key={item.name + '-p'} defaultValue={item.priority}/>
		                			<button onClick={this.handleClick}>Del</button>
		                		</li>
		              		})}
	              		</ol>
					</div>				
				</div>
		)
	}
}