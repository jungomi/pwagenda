import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import entryList from './entry_list';
import entryDialog from './entry_dialog';
import navMenu from './nav_menu';

const rootReducer = combineReducers({
  navMenu,
  entryList,
  entryDialog,
  form: formReducer
});

export default rootReducer;
