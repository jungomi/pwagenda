import React from 'react';
import { List } from 'react-toolbox';
import AgendaHeader from './AgendaHeader';
import AgendaItem from './AgendaItem';
import EntryDialog from '../dialog/EntryDialog';
import agendaTheme from './agenda.scss';

class Agenda extends React.Component {
  state = {
    dialogActive: false,
    entries: [{
      key: 'example-item-1',
      caption: 'Example 1',
      legend: 'Desription of example 1'
    }, {
      key: 'example-item-2',
      caption: 'Example 2',
      legend: 'Desription of example 2'
    }, {
      key: 'example-item-3',
      caption: 'Example 3',
      legend: 'Desription of example 3'
    }, {
      key: 'example-item-4',
      caption: 'Example 4',
      legend: 'Desription of example 4'
    }, {
      key: 'example-item-5',
      caption: 'Example 5',
      legend: 'Desription of example 5'
    }]
  };

  addEntry = entry => {
    entry.key = `agenda-entry-${this.state.entries.length + 1}`;
    this.setState({ entries: [...this.state.entries, entry] });
  };

  toggleDialog = () => {
    this.setState({ dialogActive: !this.state.dialogActive });
  }

  render() {
    const entries = this.state.entries.map(entry => <AgendaItem {...entry} />);
    return (
      <div className={agendaTheme.agenda}>
        <List selectable>
          <AgendaHeader caption="Agenda" toggleDialog={this.toggleDialog} />
          <EntryDialog title="Create new entry"
            active={this.state.dialogActive}
            toggle={this.toggleDialog}
            save={this.addEntry}
          />
          {entries}
        </List>
      </div>
    );
  }
}

export default Agenda;
