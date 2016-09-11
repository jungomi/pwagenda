import { connect } from 'react-redux';
import { toggleNavMenu } from '../actions/navMenu';
import AppHeader from '../components/AppHeader';

const mapDispatchToProps = dispatch => ({
  toggleNavMenu: () => {
    dispatch(toggleNavMenu());
  }
});

export default connect(undefined, mapDispatchToProps)(AppHeader);
