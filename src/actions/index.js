import idbKeyval from 'idb-keyval';
import { v4 } from 'node-uuid';

export const addEntry = (title, description) => ({
  type: 'ADD_ENTRY',
  id: v4(),
  title,
  description
});

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

export const startFetch = () => ({
  type: 'START_FETCH'
});

export const setEntries = entries => ({
  type: 'SET_ENTRIES',
  entries,
  timestamp: Date.now()
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
