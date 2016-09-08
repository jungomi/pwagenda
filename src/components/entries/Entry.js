import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';
import { FontIcon, ListItem } from 'react-toolbox';
import entryTheme from './entry.scss';

const Entry = ({ title, description, starred, toggleStar }) => {
  const starClasses = classNames({
    [entryTheme.starred]: starred
  });
  const star = [
    <FontIcon
      key="star-icon"
      value="star"
      className={starClasses}
      onClick={toggleStar}
    />
  ];
  return (
    <ListItem
      caption={title}
      legend={description}
      ripple={false}
      selectable
      rightActions={star}
    />
  );
};

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  starred: PropTypes.bool,
  toggleStar: PropTypes.func.isRequired,
};

export default themr('Entry', entryTheme)(Entry);
