import React, { Component } from 'react';

class MainPart extends Component{
	state = {
		score: 0,
		totalScore: 0
	};

	//eventHandler for button
	clickHandler = event =>{
		this.setState({
			[event.target.id]: this.state.score+=1
		});
	}
	render(){
		return (
			<div>
			<h1>Hello Main Part {this.state.score}</h1>
			<button className="btn" id="score" onClick={this.clickHandler}>Click me!</button>
			</div>
			);
	}	
}

export default MainPart;