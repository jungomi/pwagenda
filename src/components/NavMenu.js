import React from 'react';
import { List, ListDivider, ListItem, ListSubHeader } from 'react-toolbox';

class NavMenu extends React.Component {
  render() {
    return (
      <List selectable>
        <ListSubHeader caption="Menu" />
        <ListItem caption="Home" leftIcon="home" />
        <ListItem caption="Favourites" leftIcon="star" />
        <ListItem caption="Profile" leftIcon="account_box" />
        <ListItem caption="Settings" leftIcon="settings" />
        <ListDivider />
        <ListItem caption="Search" leftIcon="search" />
      </List>
    );
  }
}

export default NavMenu;
