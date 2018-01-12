import React, {Component} from "react";
import "./GameItem.css";

class GameItem extends Component{
	constructor() {
		super();
		this.state = {};
		this.displayGameItems = ()=>{
			let list=[];
			let images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
			images = images.keys().map(function(image){
				return image;
			});
			let len = images.length;
			for (let i=0; i<9; i++){
				list.push(<img key={Math.floor((Math.random()*1239))} src={"/images/"+ images[Math.floor((Math.random()*len))]} alt="Character" name={images[i].image}></img>);
			}
			return list;
		}; 
		this.list =this.displayGameItems();
	};

	newRound = ()=>{
		
	}

	render(){
		return this.list
	}
}

export default GameItem;  