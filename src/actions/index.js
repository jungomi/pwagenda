let currentId = 0;
export const addEntry = (title, description) => {
  currentId += 1;
  return {
    type: 'ADD_ENTRY',
    id: currentId,
    title,
    description,
    starred: false
  };
};

export const toggleEntryStar = id => ({
  type: 'TOGGLE_ENTRY_STAR',
  id
});

export const toggleDialog = () => ({
  type: 'TOGGLE_DIALOG'
});

export const closeDialog = () => ({
  type: 'CLOSE_DIALOG'
});

export const openDialog = () => ({
  type: 'OPEN_DIALOG'
});

export const toggleNavMenu = () => ({
  type: 'TOGGLE_NAV_MENU'
});

export const pinNavMenu = () => ({
  type: 'PIN_NAV_MENU'
});
