import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RecipeRootReducer from './reducers/RecipeRootReducer';
import App from './containers/App';
import { fetchRecipes } from './actions/dataFetchAction';



const recipeStore = createStore(RecipeRootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

recipeStore.dispatch(fetchRecipes());

render(
  <Provider store={recipeStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
