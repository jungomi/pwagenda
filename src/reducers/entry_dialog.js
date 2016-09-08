const entryDialog = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_DIALOG':
    return !state;
  case 'CLOSE_DIALOG':
    return false;
  case 'OPEN_DIALOG':
    return true;
  default:
    return state;
  }
};

export default entryDialog;
