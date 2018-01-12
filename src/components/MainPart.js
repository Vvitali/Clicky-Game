import React, { Component } from 'react';
import Score from './Score';
import GameItems from "./GameItem";

class MainPart extends Component{
	state = {
		score: 0,
		totalScore: 0,
		clickedChars:{"bb-8": false
		, "boba-fett": false
		, "c-3po": false
		, "chewbacca": false
		, "darth-vader": false
		, "darth_maul": false
		, "princess_amidala": false
		, "r2-d2": false
		, "royal_guard": false
		, "stormtrooper": false
		, "the_emperor": false
		, "yoda": false}
	};

	constructor(props){
		super(props);
		this.clickHandlerS = this.clickHandlerS.bind(this);
		this.guessChar = this.guessChar.bind(this);
	}

	//eventHandler for button
	clickHandlerS = event =>{
		console.log(event.target.id)
		//if not use this line - react CLI gives you a warning about direct usage of states
		let score = this.state.score+1;
		this.setState({
			[event.target.id]: score
		});
	};

	guessChar = event =>{
		let char = event.target.getAttribute("char");
		var updatedState = this.state.clickedChars;
		this.state.clickedChars[char]? console.log("You lose!") : console.log("You win!");
		updatedState[char]=true;
		this.setState({
			clickedChars : updatedState
		});
		console.log(this.state.clickedChars[char]);
	};

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
			<GameItems onClick={this.guessChar}></GameItems>

			</div>
			<div  className="col m2">
			<Score></Score></div>
			</div>
			</main>
			);
	}	
}

export default MainPart;