import React, {Component} from "react";

class Score extends Component{
	render(){
		return <div><h4>Score: {this.props.score}</h4><h4>Best score:</h4></div>
	}
}

export default Score;