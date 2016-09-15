import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';
import { FontIcon, ListItem } from 'react-toolbox';
import moment from 'moment';
import entryTheme from './entry.scss';

const Entry = ({ title, description, date, starred, toggleStar }) => {
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
  const content = (
    <div className={entryTheme.entry}>
      <div className={entryTheme['entry-header']}>
        <span key="title" className={entryTheme['entry-title']}>
          {title}
        </span>
        <span key="date" className={entryTheme['entry-date']}>
          {moment(date).format('ll')}
        </span>
      </div>
      <span key="description" className={entryTheme['entry-description']}>
        {description}
      </span>
    </div>
  );
  return (
    <ListItem
      itemContent={content}
      ripple={false}
      selectable
      rightActions={star}
    />
  );
};

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.any.isRequired,
  starred: PropTypes.bool,
  toggleStar: PropTypes.func.isRequired,
};

export default themr('Entry', entryTheme)(Entry);
