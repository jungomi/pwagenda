import React, { PropTypes } from 'react';
import { List } from 'react-toolbox';
import Entry from './Entry';
import EntryDialog from '../../containers/entries/EntryDialog';
import EntryListHeader from './EntryListHeader';
import listTheme from './entry_list.scss';

class EntryList extends React.Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      caption: PropTypes.string.isRequired,
      legend: PropTypes.string
    }).isRequired).isRequired,
    toggleDialog: PropTypes.func.isRequired
  };

  render() {
    const entries = this.props.entries.map(entry => (
      <Entry key={entry.id} {...entry} />
    ));
    return (
      <div className={listTheme['entry-list']}>
        <List selectable>
          <EntryListHeader caption="Agenda"
            toggleDialog={() => this.props.toggleDialog()}
          />
          <EntryDialog toggle={() => this.props.toggleDialog()} />
          {entries}
        </List>
      </div>
    );
  }
}

export default EntryList;
