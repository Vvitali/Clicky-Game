import React, { Component } from 'react';
import Score from './Score';
import GameItems from "./GameItem";

class MainPart extends Component{
	state = {
		score: 0,
		totalScore: 0
	};

	//eventHandler for button
	clickHandler = event =>{
		event.preventDefault();
		//if not use this line - react CLI gives you a warning about direct usage of states
		let score = this.state.score+1
		this.setState({
			[event.target.id]: score
		});
	}

	displayGameItems = ()=>{
		const list=[];
		let images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
		images = images.keys().map(function(x){
			return x
		})
		//get names of files inside directory
		for(let i=0; i<9; i++){
			list.push(<GameItems number={i*234} image={images[Math.floor((Math.random()*10+1))]}></GameItems>);
		};


		return list;
	}
	render(){
		return (
			<main className="container">
			<div className="row">
			<div className="col s12 m10">
			<div className="row">
			<h1 id="1" key="asda">Hello Main Part {this.state.score}</h1>
			<button className="btn" id="score" onClick={this.clickHandler}>Click me!</button>
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