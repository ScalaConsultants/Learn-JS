// const InitialState = Record({
//
// });

export default function (state = {currentlyOpenContextMenuId: ''}, action) {
    switch (action.type) {
        case 'OPEN_CONTEXT_MENU':
            return {...state, currentlyOpenContextMenuId: action.payload};
    }
    return state;
}