import React, { PropTypes } from 'react';
import { NavDrawer } from 'react-toolbox';
import { List, ListDivider, ListItem, ListSubHeader } from 'react-toolbox';

const NavMenu = ({ active, pinned, handleClick }) => (
  <NavDrawer
    active={active}
    pinned={pinned}
    onOverlayClick={handleClick}>
    <List selectable>
      <ListSubHeader caption="Menu" />
      <ListItem caption="Home" leftIcon="home" />
      <ListItem caption="Favourites" leftIcon="star" />
      <ListItem caption="Profile" leftIcon="account_box" />
      <ListItem caption="Settings" leftIcon="settings" />
      <ListDivider />
      <ListItem caption="Search" leftIcon="search" />
    </List>
  </NavDrawer>
);

NavMenu.propTypes = {
  active: PropTypes.bool,
  pinned: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default NavMenu;
