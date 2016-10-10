require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component, PropTypes} from 'react';
import RecipeBox from './RecipeBox.js';
import SearchRecipesService from './../services/SearchRecipesService.js';
import {connect} from 'react-redux';

class RecipesList extends Component {

    static propTypes = {
        allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    componentWillMount() {
        this.setState({recipesToShow: this.props.allRecipes});
        this.search = new SearchRecipesService();
    }

    handleSearch(event) {
        const searchQuery = event.target.value;
        const allRecipes = this.props.allRecipes;
        this.setState({recipesToShow: this.search.filterRecipes(searchQuery, allRecipes)});
    }

    render() {
        const recipesBoxes = this.state.recipesToShow.map(recipe => {
            return (
                <RecipeBox key={recipe.name} recipeFromParent={recipe}/>
            );
        });
        return (
            <div className="recipeList">
                <input type="text"
                       placeholder="Search recipes..."
                       onChange={this.handleSearch.bind(this)}/>
                <div id="cen">
                    {recipesBoxes}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allRecipes: state.allRecipes
    }
}

export default connect(mapStateToProps)(RecipesList);
