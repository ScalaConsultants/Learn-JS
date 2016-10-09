// const InitialState = Record({
//
// });

export default function (state = {currentlyOpenContextMenuId: '', currentlyHoverRecipeBoxId: ''}, action) {
    switch (action.type) {
        case 'OPEN_CONTEXT_MENU':
            return {...state, currentlyOpenContextMenuId: action.payload};
        case 'CLOSE_CONTEXT_MENU':
            return {...state, currentlyOpenContextMenuId: ''};
        case 'HOVER_RECIPE_BOX':
            return {...state, currentlyHoverRecipeBoxId: action.payload};
        case 'UNHOVER_RECIPE_BOX':
            return {...state, currentlyHoverRecipeBoxId: ''};
    }
    return state;
}