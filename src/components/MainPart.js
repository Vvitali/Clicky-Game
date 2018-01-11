import React, { Component } from 'react';
import Score from './Score';
import GameItem from "./GameItem";

class MainPart extends Component{
	;
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

	displayGameItems = ()=>{
		const list=[];
		const images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
		console.log(images)
		//get names of files inside directory
		console.log("File names:"+list);
		for(let i=0; i<9; i++){
			list.push(<GameItem images="{list[(Math.Random*listLen+1)*100]}"></GameItem>);
		}
		return list;
	}
	render(){
		return (
			<main className="container">
			<div className="row">
			<div className="col s10">

			<h1>Hello Main Part {this.state.score}</h1>
			<button className="btn" id="score" onClick={this.clickHandler}>Click me!</button>
			<h2>Images:</h2>
			{this.displayGameItems()}
			</div>
			<div class="col s2">
			<Score></Score></div>
			</div>
			</main>
			);
	}	
}

export default MainPart;