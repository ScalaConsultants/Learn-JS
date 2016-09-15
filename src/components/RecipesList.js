import React, { Component } from 'react';
import RecipeBox from './RecipeBox.js';

class RecipesList extends Component {
    constructor() {
        super();
        this.searchFilter = this.searchFilter.bind(this);
    }

    searchFilter(word, filters) {
        let toFilter = true;
        filters.forEach(filter => {
            if(word.indexOf(filter)!==-1) {
                toFilter = false;
            }
        }
        )
        return toFilter;
    }

    render() {
        let recipes = [];
        this.props.data.map(recipe => {
            // if(recipe.name.indexOf(text)===-1) {
            if(this.searchFilter(recipe.name, this.props.filterArrayText)) {
                return;
            } else {
            recipes.push(
                <RecipeBox recipeName={recipe.name} description={recipe.description} image={recipe.image} />
            )
        }
        });
        return (
            <div className="recipeList">
				<div id="cen">
					{recipes}
				</div>
			</div>
        )
    }
}

RecipesList.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    filterArrayText: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default RecipesList;
