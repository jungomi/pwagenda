import { connect } from 'react-redux';
import { toggleDialog } from '../../actions/dialog';
import { addEntry } from '../../actions/entries';
import EntryDialog from '../../components/entries/EntryDialog.js';

const mapStateToProps = state => ({
  visible: state.entryDialog
});

const mapDispatchToProps = dispatch => ({
  save: (title, description = '', date) => {
    dispatch(addEntry(title.trim(), description.trim(), Date.parse(date)));
    dispatch(toggleDialog());
  },
  toggle: () => {
    dispatch(toggleDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryDialog);
