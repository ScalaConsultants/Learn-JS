export const openContextMenu = (openedContextMenuId) => {
  console.log('action works, you clicked: ' + openedContextMenuId);
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