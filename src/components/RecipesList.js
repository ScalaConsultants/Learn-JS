require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import RecipeBox from './RecipeBox.js';

export class RecipesList extends Component {
	render() {
		let recipesBoxes = this.props.data.map(recipe => {
			return(
					<RecipeBox recipeName={recipe.name} description={recipe.description} image={recipe.image} />
				)
		});
		return(
			<div className="recipeList">
				<input type="text" placeholder="Search recipes..." />
				<div id="cen">
					{recipesBoxes}
				</div>
			</div>
		)
	}
}

export default RecipesList;
