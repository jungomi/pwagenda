import React from 'react';
import { ListSubHeader, Navigation } from 'react-toolbox';
import EntryDialog from '../dialog/EntryDialog';
import headerTheme from './agenda_header.scss';

class AgendaHeader extends React.Component {
  state = {
    dialogActive: false,
    hasNext: true,
    hasPrevious: false
  };

  toggleDialog = () => {
    this.setState({ dialogActive: !this.state.dialogActive });
  }

  saveEntry = () => {
    this.toggleDialog();
  }

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
    onClick: this.toggleDialog
  }];

  render() {
    return (
      <div>
        <ListSubHeader caption="Agenda" />
        <div className={headerTheme['navigation-header']}>
          <Navigation type="horizontal" actions={this.navButtons} />
          <EntryDialog title="Create new entry"
            active={this.state.dialogActive}
            toggle={this.toggleDialog}
            save={this.saveEntry}
          />
        </div>
      </div>
    );
  }
}

export default AgendaHeader;
