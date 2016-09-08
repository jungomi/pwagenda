import React from 'react';
import { Layout, Panel } from 'react-toolbox';
import AppHeader from './containers/AppHeader';
import EntryList from './containers/entries/EntryList';
import NavMenu from './containers/NavMenu';

const App = () => (
  <Layout>
    <NavMenu />
    <Panel>
      <AppHeader />
      <EntryList />
    </Panel>
  </Layout>
);

export default App;
