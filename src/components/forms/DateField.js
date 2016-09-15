import React, { PropTypes } from 'react';
import { DatePicker } from 'react-toolbox';
import moment from 'moment';
import './date_field.scss';

const DateField = ({ label, input }) => {
  const today = moment().startOf('day');
  return (
    <DatePicker
      label={label}
      value={input.value}
      onChange={input.onChange}
      minDate={today}
    />
  );
};

DateField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
  })
};


export default DateField;
