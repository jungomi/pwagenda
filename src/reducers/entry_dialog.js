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
  case 'RESET_DIALOG':
    return {
      ...initialState,
      visible: state.visible
    };
  case 'DIALOG_SET_ERROR':
    return {
      ...state,
      error: action.error
    };
  case 'DIALOG_SET_TITLE':
    return {
      ...state,
      title: action.title
    };
  case 'DIALOG_SET_DESCRIPTION':
    return {
      ...state,
      description: action.description
    };
  default:
    return state;
  }
};

export default entryDialog;
