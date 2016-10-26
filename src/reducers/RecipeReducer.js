import {ActionTypes} from '../actions/const'

const RecipeReducer = (recipesState = {
  msg: '',
  recipes: []
}, action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM_SUCCESS:
      const modifiedState = recipesState.recipes.map((currentRecipes) => {
        if (currentRecipes.id == action.recipeId) {
          return Object.assign({},
            currentRecipes,
            {isStarred: !currentRecipes.isStarred}
          );
        } else {
          return currentRecipes;
        }
      });
      return {
        ...recipesState,
        recipes: modifiedState
      };
    case ActionTypes.STAR_ITEM_FAILURE:
      console.log('Could not send data. Try again later.');
      return {
        ...recipesState,
        msg: 'Could not send data. Try again later.'
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
