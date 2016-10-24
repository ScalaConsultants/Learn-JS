import fetch from 'isomorphic-fetch';

import {ActionTypes} from '../actions/const'

const RecipeReducer = (recipesState = [], action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM:
      const modifiedState = recipesState.map((currentRecipes) => {
        if(currentRecipes.id == action.recipeId) {
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
      return modifiedState;
    case ActionTypes.RECEIVE_RECIPES:
      return action.recipes;
    default:
      return recipesState;
  }
};

export default RecipeReducer;
