import React, { Component } from 'react';
import Score from './Score';
import GameItems from "./GameItem";

class MainPart extends Component{

	state = {
		score: 0,
		totalScore: 0
	};

	constructor(props){
		super(props);
		this.clickHandlerS = this.clickHandlerS.bind(this);
	}

	//eventHandler for button
	clickHandlerS = event =>{
		console.log(event.target.id)
		//if not use this line - react CLI gives you a warning about direct usage of states
		let score = this.state.score+1;
		console.log(score)
		this.setState({
			[event.target.id]: score
		});
	}

	render(){
		return (
			<main className="container">
			<div className="row">
			<div className="col s12 m10">
			<div className="row">
			<h1 id="1" key="asda">Hello Main Part {this.state.score}</h1>
			<button className="btn" id="score" onClick={this.clickHandlerS}>Click me!</button>
			</div>
			<h2>Images:</h2>
			<GameItems></GameItems>

			</div>
			<div  className="col m2">
			<Score></Score></div>
			</div>
			</main>
			);
	}	
}

export default MainPart;