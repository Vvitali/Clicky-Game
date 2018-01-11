import React, { Component } from 'react';
import Score from './Score';
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
			<main className="container">
			<div className="row">
			<div className="col s10">

			<h1>Hello Main Part {this.state.score}</h1>
			<button className="btn" id="score" onClick={this.clickHandler}>Click me!</button>
			<h2>Images:</h2>
			</div>
			<div class="col s2">
			<Score></Score></div>
			</div>
			</main>
			);
	}	
}

export default MainPart;