const initialState = {
  visible: false,
  error: {},
  title: '',
  description: '',
};

const entryDialog = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_DIALOG':
    return {
      ...state,
      visible: !state.visible
    };
  case 'CLOSE_DIALOG':
    return {
      ...state,
      visible: false
    };
  case 'OPEN_DIALOG':
    return {
      ...state,
      visible: true
    };
  default:
    return state;
  }
};

export default entryDialog;
