import { connect } from 'react-redux';
import { toggleDialog, toggleEntryStar } from '../../actions';
import EntryList from '../../components/entries/EntryList.js';

const mapStateToProps = state => ({
  entries: state.entries
});

const mapDispatchToProps = dispatch => ({
  toggleDialog: () => {
    dispatch(toggleDialog());
  },
  toggleEntryStar: id => {
    dispatch(toggleEntryStar(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
