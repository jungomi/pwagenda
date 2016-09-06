let currentId = 0;
export const addEntry = (title, description) => {
  currentId += 1;
  return {
    type: 'ADD_ENTRY',
    id: currentId,
    title,
    description
  };
};

export const dialogSetDescription = description => ({
  type: 'DIALOG_SET_DESCRIPTION',
  description
});

export const dialogSetTitle = title => ({
  type: 'DIALOG_SET_TITLE',
  title
});

export const dialogSetError = error => ({
  type: 'DIALOG_SET_ERROR',
  error
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

export const resetDialog = () => ({
  type: 'RESET_DIALOG'
});
