import React, { Component } from 'react';
import Score from './Score';
import GameItem from "./GameItem";

class MainPart extends Component{
	state = {
		score: 0,
		totalScore: 0
	};

	//eventHandler for button
	clickHandler = event =>{
		const {name, value} = event.target;
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
			list.push(<GameItem image={images[Math.floor((Math.random()*10+1))]}></GameItem>);
		};


		return list;
	}
	render(){
		return (
			<main className="container">
			<div className="row">
			<div className="col s12 m10">

			<h1>Hello Main Part {this.state.score}</h1>
			<button className="btn" id="score" onClick={this.clickHandler}>Click me!</button>
			<h2>Images:</h2>
			{this.displayGameItems()}
			</div>
			<div className="col m2">
			<Score></Score></div>
			</div>
			</main>
			);
	}	
}

export default MainPart;