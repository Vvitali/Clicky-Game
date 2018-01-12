import React, {Component} from "react";
import "./GameItem.css";

class GameItem extends Component{
	state = {
		
	};

	displayGameItems = ()=>{
		const list=[];
		let images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
		return images.keys().map(function(image){
			return <img key={image.key} src={"/images/"+ image} alt="Character" name={image}></img>
		})
	};

	render(){
		return(
			this.displayGameItems()
			)
	}
}

export default GameItem;