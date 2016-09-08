import { connect } from 'react-redux';
import { fetchEntries, toggleDialog, toggleEntryStar } from '../../actions';
import EntryList from '../../components/entries/EntryList.js';

const mapStateToProps = state => ({
  entries: state.entryList.entries
});

const mapDispatchToProps = dispatch => ({
  fetchEntries: () => {
    dispatch(fetchEntries());
  },
  toggleDialog: () => {
    dispatch(toggleDialog());
  },
  toggleEntryStar: id => {
    dispatch(toggleEntryStar(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
