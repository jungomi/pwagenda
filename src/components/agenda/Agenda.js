import React from 'react';
import { List, ListSubHeader } from 'react-toolbox';
import AgendaItem from './AgendaItem.js';
import agendaTheme from './agenda.scss';

const items = [{
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
}];

class Agenda extends React.Component {
  render() {
    const agendaItems = items.map(item => <AgendaItem {...item} />);
    return (
      <div className={agendaTheme.agenda}>
        <List selectable>
          <ListSubHeader caption="Agenda" />
          {agendaItems}
        </List>
      </div>
    );
  }
}

export default Agenda;
