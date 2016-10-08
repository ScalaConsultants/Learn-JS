/* 
 * Combine all available reducers to a single root reducer.
 */
import {combineReducers} from 'redux';
import AllRecipesReducer from './reducer-recipes';

const reducers = combineReducers({
    allRecipes: AllRecipesReducer,
});

export default reducers;
