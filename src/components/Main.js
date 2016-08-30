require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Recipes from '../components/Recipes';

class AppComponent extends React.Component {
  render() {
    let recipesRepo = new Recipes
    let recipes = recipesRepo.search()
    return (
      <div className="index">
        <h1 className="title">Recipies</h1>
        <div className="search-box"><input type="text" value="Search here..." /></div>
        <div className="recipes-list">
        {recipes.map((recipe) => {
        	return <div className="recipe-wrap">
        	  <a href="#" title={recipe.description}><span className="recipe-name">{recipe.name}</span></a>
        	</div>
        })}
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
