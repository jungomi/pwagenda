import { combineReducers } from 'redux';
import entries from './entries';
import entryDialog from './entry_dialog';

const agendaApp = combineReducers({
  entries,
  entryDialog
});

export default agendaApp;
