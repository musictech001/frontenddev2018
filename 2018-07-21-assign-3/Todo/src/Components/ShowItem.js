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

	handleClick = (item) => {
		const index = parseInt(item.target.parentElement.getAttribute('index'),10);
		let newList = this.state.list;
		newList.splice(index, 1);

		this.props.listchanged(newList);

		// since parent App will call ShowItem.updateState() explicitly, we don't need to setState here.
		//this.setState({list:newList});

		console.log("ShowItem.handleClick(): Del " + index);
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
		                		return <li key={item.name  + index + '-l'} index={index}>		                			
		                			<label type="text" key={item.name + index + '-n'} value={item.name}>{item.name} --- {item.priority}   </label>
		                			{/*<input type="text" key={item.name + index + '-p'} defaultValue={item.priority}/>*/}
		                			<button onClick={this.handleClick}>Del</button>		                			
		                		</li>
		              		})}
	              		</ol>
					</div>				
				</div>
		)
	}
}