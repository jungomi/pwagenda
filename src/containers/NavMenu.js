import { connect } from 'react-redux';
import { toggleNavMenu } from '../actions/navMenu';
import NavMenu from '../components/NavMenu';

const mapStateToProps = state => ({
  active: state.navMenu.active,
  pinned: state.navMenu.pinned
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(toggleNavMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
