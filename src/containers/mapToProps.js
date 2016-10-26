/*
 * Contains business logic for Recipes presentation classes
 */

import {
  dispatchStarredActionCreator,
  queryRecipeActionCreator,
  fetchRecipesActionCreator
} from '../actions/recipeActionCreators';
import SearchRecipesService from './../services/SearchRecipesService.js'

export const mapDispatchToProps = (dispatch) => {
  return {
    onStarClick: (recipeId) => {
      dispatch(dispatchStarredActionCreator(recipeId));
    },
    onSearchChanged: (event) => {
      dispatch(queryRecipeActionCreator(event.target.value))
    },
    onApplicationStart: () => {
      dispatch(fetchRecipesActionCreator())
    }
  }
};

const search = new SearchRecipesService();

export const mapStateToProps = (state, dispatch) => {
  //combine recipes data and callbacks

  const combinedProps = Object.assign({
    msg: state.RecipeReducer.msg,
    allRecipes: search.filterRecipes(state.SearchReducer.query, state.RecipeReducer.recipes)
  }, mapDispatchToProps(dispatch));

  return combinedProps;
};
