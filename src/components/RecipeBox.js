import React, { Component } from 'react';

export class RecipeBox extends Component {
	render() {
		return (
			<div className="recipeBox">
				<img src={this.props.image}></img>
				<div className="recipeDesc">
					<h3>{this.props.recipeName}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default RecipeBox;