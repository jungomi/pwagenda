import React from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';
import { FontIcon, ListItem } from 'react-toolbox';
import entryTheme from './entry.scss';

class Entry extends React.Component {
  state = {
    starred: false
  };

  toggleStar = () => this.setState({ starred: !this.state.starred });

  render() {
    const starClasses = classNames({
      [entryTheme.starred]: this.state.starred
    });
    const star = [
      <FontIcon
        key="star-icon"
        value="star"
        className={starClasses}
        onClick={this.toggleStar}
      />
    ];
    return (
      <ListItem
        {...this.props}
        ripple={false}
        selectable
        rightActions={star}
      />
    );
  }
}

export default themr('Entry', entryTheme)(Entry);
