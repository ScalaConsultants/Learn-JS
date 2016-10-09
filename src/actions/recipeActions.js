export const openContextMenu = (openedContextMenuId) => {
  console.log('action works, you clicked: ' + openedContextMenuId);
    return {
        type: 'OPEN_CONTEXT_MENU',
        payload: openedContextMenuId
    }
};