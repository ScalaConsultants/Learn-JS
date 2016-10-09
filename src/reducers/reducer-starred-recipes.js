import * as actions from '../actions/recipeActions';

export default function (state = new Set(), action) {
    switch (action.type) {

        case actions.STAR_RECIPE:
            return state.add(action.payload);

        case actions.REMOVE_STAR_RECIPE:
            let newSet = new Set(state);
            newSet.delete(action.payload);
            return newSet;
    }
    return state;
}