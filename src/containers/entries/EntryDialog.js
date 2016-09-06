import { connect } from 'react-redux';
import { addEntry, dialogSetDescription, dialogSetError } from '../../actions';
import { dialogSetTitle, resetDialog, toggleDialog } from '../../actions';
import EntryDialog from '../../components/entries/EntryDialog.js';

const mapStateToProps = state => ({
  visible: state.entryDialog.visible,
  description: state.entryDialog.description,
  error: state.entryDialog.error,
  title: state.entryDialog.title
});

const mapDispatchToProps = dispatch => ({
  save: (title, description) => {
    dispatch(addEntry(title, description));
  },
  setDescription: description => {
    dispatch(dialogSetDescription(description));
  },
  setTitle: title => {
    dispatch(dialogSetTitle(title));
  },
  setError: err => {
    dispatch(dialogSetError(err));
  },
  reset: () => {
    dispatch(resetDialog());
  },
  toggleDialog: () => {
    dispatch(toggleDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryDialog);
