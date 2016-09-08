import React, { PropTypes } from 'react';
import { List } from 'react-toolbox';
import Entry from './Entry';
import EntryDialog from '../../containers/entries/EntryDialog';
import EntryListHeader from './EntryListHeader';
import listTheme from './entry_list.scss';

class EntryList extends React.Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired).isRequired,
    toggleDialog: PropTypes.func.isRequired,
    toggleEntryStar: PropTypes.func.isRequired,
    fetchEntries: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    const { entries, toggleDialog, toggleEntryStar } = this.props;
    return (
      <div className={listTheme['entry-list']}>
        <List selectable>
          <EntryListHeader
            caption="Agenda"
            toggleDialog={() => toggleDialog()}
          />
          <EntryDialog />
          {
            entries.map(entry => (
              <Entry
                key={entry.id}
                toggleStar={() => toggleEntryStar(entry.id)}
                {...entry}
              />))
          }
        </List>
      </div>
    );
  }
}

export default EntryList;
