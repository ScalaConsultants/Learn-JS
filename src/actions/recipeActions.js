export const OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU';
export const CLOSE_CONTEXT_MENU = 'CLOSE_CONTEXT_MENU';
export const HOVER_RECIPE_BOX = 'HOVER_RECIPE_BOX';
export const UNHOVER_RECIPE_BOX = 'UNHOVER_RECIPE_BOX';
export const PRINT_RECIPE = 'PRINT_RECIPE';


export const openContextMenu = (openedContextMenuId) => {
    return {
        type: OPEN_CONTEXT_MENU,
        payload: openedContextMenuId
    }
};

export const closeContextMenu = () => {
    return {
      type: CLOSE_CONTEXT_MENU,
      payload: ''
  }
};

export const hoverRecipeBox = (hoveredRecipeBoxId) => {
    return {
        type: HOVER_RECIPE_BOX,
        payload: hoveredRecipeBoxId
    }
};

export const unhoverRecipeBox = () => {
    return {
        type: UNHOVER_RECIPE_BOX,
        payload: ''
    }
};

export const printRecipe = (path) => {
    return {
        type: PRINT_RECIPE,
        payload: path
    }
};