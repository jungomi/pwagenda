import idbKeyval from 'idb-keyval';
import { v4 } from 'node-uuid';

export const addEntry = (title, description, date) => ({
  type: 'ADD_ENTRY',
  id: v4(),
  title,
  description,
  date
});

export const toggleEntryStar = id => ({
  type: 'TOGGLE_ENTRY_STAR',
  id
});

export const setEntries = entries => ({
  type: 'SET_ENTRIES',
  entries,
  timestamp: Date.now()
});

export const startFetch = () => ({
  type: 'START_FETCH'
});

export const errorFetch = error => ({
  type: 'ERROR_FETCH',
  error
});

export const fetchEntries = () => dispatch => {
  dispatch(startFetch());
  return idbKeyval.get('entries')
    .then(res => JSON.parse(res))
    .then(entries => dispatch(setEntries(entries)))
    .catch(err => dispatch(errorFetch(err)));
};
