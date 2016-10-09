export const openContextMenu = (openedContextMenuId) => {
    return {
        type: 'OPEN_CONTEXT_MENU',
        payload: openedContextMenuId
    }
};

export const closeContextMenu = () => {
  return {
      type: 'CLOSE_CONTEXT_MENU',
      payload: ''
  }
};

export const hoverRecipeBox = (hoveredRecipeBoxId) => {
    return {
        type: 'HOVER_RECIPE_BOX',
        payload: hoveredRecipeBoxId
    }
};

export const unhoverRecipeBox = () => {
    return {
        type: 'UNHOVER_RECIPE_BOX',
        payload: ''
    }
};