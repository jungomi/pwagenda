import { connect } from 'react-redux';
import { addEntry, toggleDialog } from '../../actions';
import EntryDialog from '../../components/entries/EntryDialog.js';

const mapStateToProps = state => ({
  visible: state.entryDialog.visible
});

const mapDispatchToProps = dispatch => ({
  save: (title, description = '') => {
    dispatch(addEntry(title.trim(), description.trim()));
    dispatch(toggleDialog());
  },
  toggle: () => {
    dispatch(toggleDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryDialog);
