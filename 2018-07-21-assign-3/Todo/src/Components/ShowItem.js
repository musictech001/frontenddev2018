import React, { Component } from 'react'

export default class ShowItem extends Component {
	constructor(props){
		super(props)

	}

	render() {
		return(
			<div>
				<div>Show Item.</div>
				<h3>{this.props.list[0].name}</h3>
			</div>
		)
	}
}