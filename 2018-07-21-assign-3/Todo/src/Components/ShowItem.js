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
						    {list.map((item) => {
		                		return <li key={item.name + '-li'}> 
		                			<input type="text" key={item.name + '-name'} defaultValue={item.name}/>
		                			<input type="text" key={item.name + '-prio'} defaultValue={item.priority}/>
		                		</li>
		              		})}
	              		</ol>
					</div>				
				</div>
		)
	}
}