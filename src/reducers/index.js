/* 
 * Combine all available reducers to a single root reducer.
 */
import {combineReducers} from 'redux';
import AllRecipesReducer from './reducer-recipes';
import RecipeReducer from './reducer-recipe';
import StarredReducer from './reducer-starred-recipes';

const reducers = combineReducers({
    allRecipes: AllRecipesReducer,
    recipe: RecipeReducer,
    starredRecipes: StarredReducer
});

export default reducers;
