import React, { PropTypes } from 'react';
import { ListSubHeader, Navigation } from 'react-toolbox';
import headerTheme from './entry_list_header.scss';

const AgendaHeader = ({ hasNext, hasPrevious, toggleDialog }) => {
  const navButtons = [{
    key: 'arrow-left',
    primary: true,
    icon: 'keyboard_arrow_left',
    className: headerTheme['button-arrow'],
    disabled: !hasPrevious
  }, {
    key: 'arrow-right',
    primary: true,
    icon: 'keyboard_arrow_right',
    className: headerTheme['button-arrow'],
    disabled: !hasNext
  }, {
    label: 'New',
    accent: true,
    flat: true,
    icon: 'add',
    className: headerTheme['button-new'],
    onClick: toggleDialog
  }];

  return (
    <div>
      <ListSubHeader caption="Agenda" />
      <div className={headerTheme['navigation-header']}>
        <Navigation type="horizontal" actions={navButtons} />
      </div>
    </div>
  );
};

AgendaHeader.propTypes = {
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  toggleDialog: PropTypes.func.isRequired
};

export default AgendaHeader;
