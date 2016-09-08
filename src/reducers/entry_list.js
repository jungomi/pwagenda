const entry = (state, action) => {
  switch (action.type) {
  case 'ADD_ENTRY':
    return {
      id: action.id,
      title: action.title,
      description: action.description,
      starred: false,
      dirty: true
    };
  case 'TOGGLE_ENTRY_STAR':
    if (state.id !== action.id) {
      return state;
    }
    return {
      ...state,
      starred: !state.starred,
      dirty: true
    };
  default:
    return state;
  }
};

const initialState = {
  isFetching: false,
  dirty: false,
  entries: []
};
const entryList = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_ENTRY':
    return {
      ...state,
      dirty: true,
      entries: [
        ...state.entries,
        entry(undefined, action)
      ]
    };
  case 'TOGGLE_ENTRY_STAR':
    return {
      ...state,
      dirty: true,
      entries: state.entries.map(e => entry(e, action))
    };
  case 'START_FETCHING':
    return {
      ...state,
      isFetching: true
    };
  case 'SET_ENTRIES':
    return {
      ...state,
      isFetching: false,
      dirty: false,
      entries: action.entries,
      lastUpdated: action.timestamp
    };
  case 'ERROR_FETCH':
    return {
      ...state,
      isFetching: false
    };
  default:
    return state;
  }
};

export default entryList;
