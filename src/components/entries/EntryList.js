import React, { PropTypes } from 'react';
import { List } from 'react-toolbox';
import Entry from './Entry';
import EntryDialog from '../../containers/entries/EntryDialog';
import EntryListHeader from './EntryListHeader';
import listTheme from './entry_list.scss';

const EntryList = ({ entries, toggleDialog, toggleEntryStar }) => (
  <div className={listTheme['entry-list']}>
    <List selectable>
      <EntryListHeader
        caption="Agenda"
        toggleDialog={() => toggleDialog()}
      />
      <EntryDialog />
      {entries.map(entry => (
        <Entry
          key={entry.id}
          toggleStar={() => toggleEntryStar(entry.id)}
          {...entry}
        />))}
    </List>
  </div>
);

EntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired).isRequired,
  toggleDialog: PropTypes.func.isRequired,
  toggleEntryStar: PropTypes.func.isRequired
};

export default EntryList;
