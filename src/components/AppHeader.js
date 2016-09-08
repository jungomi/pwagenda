import React, { PropTypes } from 'react';
import { AppBar, IconButton } from 'react-toolbox';

const AppHeader = ({ toggleNavMenu }) => (
  <AppBar>
    <IconButton
      icon="menu"
      inverse
      onClick={toggleNavMenu}
    />
    <h1>PWAgenda</h1>
  </AppBar>
);

AppHeader.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired
};

export default AppHeader;
