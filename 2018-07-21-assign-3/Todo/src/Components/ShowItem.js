import React, { Component } from 'react'

export default class ShowItem extends Component {
	constructor(props){
		super(props);
		this.state = {list:this.props.list};
		console.log("ShowItem()");
	}



	render() {
		console.log("ShowItem.render()");
		const list = this.state.list;
		return(
			<div>
				<div>Todo list</div>

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