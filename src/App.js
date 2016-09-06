import React from 'react';
import { AppBar, IconButton, Layout, NavDrawer, Panel } from 'react-toolbox';
import EntryList from './containers/entries/EntryList';
import NavMenu from './components/NavMenu';

class App extends React.Component {
  state = {
    drawerActive: false,
    drawerPinned: false
  };

  closeDrawer = () => {
    this.setState({
      drawerPinned: false,
      drawerActive: false
    });
  };

  onMenuClick = () => {
    this.setState({
      drawerPinned: false,
      drawerActive: !this.state.drawerPinned
    });
  };

  render() {
    return (
      <Layout>
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned}
          onOverlayClick={this.closeDrawer}>
          <NavMenu />
        </NavDrawer>
        <Panel>
          <AppBar>
            <IconButton
              icon="menu"
              inverse={true}
              onClick={this.onMenuClick} />
            <h1>PWAgenda</h1>
          </AppBar>
          <EntryList />
        </Panel>
      </Layout>
    );
  }
}

export default App;
