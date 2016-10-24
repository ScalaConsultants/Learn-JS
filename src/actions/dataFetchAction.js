import fetch from 'isomorphic-fetch';
import {ActionTypes} from './const';

export function receiveRecipes(json) {
  return {
    type: ActionTypes.RECEIVE_RECIPES,
    recipes: json.data
  }
}

export function fetchRecipes() {
  return dispatch => {

    return fetch('http://0.0.0.0:8585/api/recipes')
      .then(response => response.json())
      .then(json => dispatch(receiveRecipes(json)));
  }
}
