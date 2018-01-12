import React, {Component} from "react";
import "./GameItem.css";

class GameItem extends Component{
	state = {
		
	};

	render(){
		return(
			<img key={this.props.key} src={"/images/"+this.props.image} alt="Character" name={this.props.image}></img>
			)
	}
}

export default GameItem;