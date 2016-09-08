import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import entries from './entries';
import entryDialog from './entry_dialog';
import navMenu from './nav_menu';

const rootReducer = combineReducers({
  navMenu,
  entries,
  entryDialog,
  form: formReducer
});

export default rootReducer;
