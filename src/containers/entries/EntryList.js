import { connect } from 'react-redux';
import { toggleDialog } from '../../actions';
import EntryList from '../../components/entries/EntryList.js';

const mapStateToProps = state => ({
  entries: state.entries
});

const mapDispatchToProps = dispatch => ({
  toggleDialog: () => {
    dispatch(toggleDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
