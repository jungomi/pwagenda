import React from 'react';
import { ListSubHeader, Navigation } from 'react-toolbox';
import headerTheme from './agenda_header.scss';

class AgendaHeader extends React.Component {
  static propTypes = {
    toggleDialog: React.PropTypes.func.isRequired
  };

  state = {
    hasNext: true,
    hasPrevious: false
  };

  navButtons = [{
    key: 'arrow-left',
    primary: true,
    icon: 'keyboard_arrow_left',
    className: headerTheme['button-arrow'],
    disabled: !this.state.hasPrevious
  }, {
    key: 'arrow-right',
    primary: true,
    icon: 'keyboard_arrow_right',
    className: headerTheme['button-arrow'],
    disabled: !this.state.hasNext
  }, {
    label: 'New',
    accent: true,
    flat: true,
    icon: 'add',
    className: headerTheme['button-new'],
    onClick: this.props.toggleDialog
  }];

  render() {
    return (
      <div>
        <ListSubHeader caption="Agenda" />
        <div className={headerTheme['navigation-header']}>
          <Navigation type="horizontal" actions={this.navButtons} />
        </div>
      </div>
    );
  }
}

export default AgendaHeader;
