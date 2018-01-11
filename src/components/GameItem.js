import React, {Component} from "react";


class GameItem extends Component{
	state = {
		image:""
	};
	render(){
		return(
			<img src="{this.props.image}" alt="Character"></img>
			)
	}
}

export default GameItem;