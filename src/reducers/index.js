/* 
 * Combine all available reducers to a single root reducer.
 */
import {combineReducers} from 'redux';
import AllRecipesReducer from './reducer-recipes';
import RecipeReducer from './reducer-recipe';

const reducers = combineReducers({
    allRecipes: AllRecipesReducer,
    recipe: RecipeReducer
});

export default reducers;
