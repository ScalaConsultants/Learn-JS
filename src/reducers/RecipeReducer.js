import fetch from 'isomorphic-fetch';

import {ActionTypes} from '../actions/const'

const RecipeReducer = (recipesState = {
  msg: '',
  recipes: []
}, action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM:
      const modifiedState = recipesState.recipes.map((currentRecipes) => {
        if (currentRecipes.id == action.recipeId) {
          const modifiedItem = Object.assign({}, currentRecipes);
          modifiedItem.isStarred = !modifiedItem.isStarred;

          const myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');

          fetch(`http://localhost:8585/api/recipes/${action.recipeId}`, {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(modifiedItem)
          });

          return modifiedItem;
        } else {
          return currentRecipes;
        }
      });
      return {
        ...recipesState,
        recipes: modifiedState
      };
    case ActionTypes.RECEIVE_RECIPES_SUCCESS:
      const recipes = action.recipes;
      return {
        ...recipesState,
        recipes
      };
    case ActionTypes.RECEIVE_RECIPES_FAILURE:
      console.log('Could not fetch data from server. Try again later.');
      return {
        ...recipesState,
        msg: 'Could not fetch data from server. Try again later.'
      };
    default:
      return recipesState;
  }
};

export default RecipeReducer;
