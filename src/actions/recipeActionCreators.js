import {ActionTypes} from './const';
import fetch from 'isomorphic-fetch';

export const starRecipeActionCreator = (recipeId) => {
  return {
    type: ActionTypes.STAR_ITEM_SUCCESS,
    recipeId: recipeId
  };
};

export const starRecipeFailureActionCreator = (err) => {
  return {
    type: ActionTypes.STAR_ITEM_FAILURE,
    recipeId: err
  };
};

export const queryRecipeActionCreator = (search) => {
  return {
    type: ActionTypes.UPDATE_SEARCH_QUERY,
    searchQuery: search
  };
};

export const receiveRecipesSuccessActionCreator = (json) => {
  return {
    type: ActionTypes.RECEIVE_RECIPES_SUCCESS,
    recipes: json.data
  }
};

export const receiveRecipesFailureActionCreator = (err) => {
  return {
    type: ActionTypes.RECEIVE_RECIPES_FAILURE,
    payload: err
  }
};

export const dispatchStarredActionCreator = (recipeId) => {
  return dispatch => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    return fetch(`http://localhost:8585/api/recipes/${recipeId}/star`, {
      method: 'PUT',
      headers: myHeaders
    }).then(response => response.json())
      .then(json => dispatch(starRecipeActionCreator(recipeId)))
      .catch(err => dispatch(starRecipeFailureActionCreator(err)));
  }
};

export const fetchRecipesActionCreator = () => {
  return dispatch => {

    return fetch('http://0.0.0.0:8585/api/recipes')
      .then(response => response.json())
      .then(json => dispatch(receiveRecipesSuccessActionCreator(json)))
      .catch(err =>dispatch(receiveRecipesFailureActionCreator(err)));
  }
};
