import * as actions from '../actions/recipeActions';

export default function (state = [], action) {
    switch (action.type) {

        case actions.STAR_RECIPE:
            return [...state, action.payload];

        case actions.REMOVE_STAR_RECIPE:

            let newArr = [...state];
            let indexPosition = newArr.indexOf(action.payload);
            newArr.splice(indexPosition, 1);
            return newArr;
    }
    return state;
}