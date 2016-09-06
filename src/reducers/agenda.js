const entry = (state, action) => {
  switch (action.type) {
  case 'ADD_ENTRY':
    return {
      id: action.id,
      caption: action.title,
      legend: action.description
    };
  default:
    return state;
  }
};

const agenda = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ENTRY':
    return [
      ...state,
      entry(undefined, action)
    ];
  default:
    return state;
  }
};

export default agenda;
