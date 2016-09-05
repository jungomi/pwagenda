import React from 'react';
import { ListSubHeader, Navigation } from 'react-toolbox';
import headerTheme from './agenda_header.scss';

const actions = [{
  key: 'arrow-left',
  primary: true,
  icon: 'keyboard_arrow_left',
  className: headerTheme['button-arrow']
}, {
  key: 'arrow-right',
  primary: true,
  icon: 'keyboard_arrow_right',
  className: headerTheme['button-arrow']
}, {
  label: 'New',
  accent: true,
  flat: true,
  icon: 'add',
  className: headerTheme['button-new']
}];

class AgendaHeader extends React.Component {
  state = {
    hasNext: true,
    hasPrevious: false
  };

  render() {
    for (const action of actions) {
      if (action.key === 'arrow-left') {
        action.disabled = !this.state.hasPrevious;
      } else if (action.key === 'arrow-right') {
        action.disabled = !this.state.hasNext;
      }
    }

    return (
      <div>
        <ListSubHeader caption="Agenda" />
        <div className={headerTheme['navigation-header']}>
          <Navigation type="horizontal" actions={actions} />
        </div>
      </div>
    );
  }
}

export default AgendaHeader;
