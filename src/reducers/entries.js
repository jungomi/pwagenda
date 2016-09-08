const entry = (state, action) => {
  switch (action.type) {
  case 'ADD_ENTRY':
    return {
      id: action.id,
      title: action.title,
      description: action.description,
      starred: action.starred
    };
  case 'TOGGLE_ENTRY_STAR':
    if (state.id !== action.id) {
      return state;
    }
    return {
      ...state,
      starred: !state.starred
    };
  default:
    return state;
  }
};

const entries = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ENTRY':
    return [
      ...state,
      entry(undefined, action)
    ];
  case 'TOGGLE_ENTRY_STAR':
    return state.map(e => entry(e, action));
  default:
    return state;
  }
};

export default entries;
