import React, { PropTypes } from 'react';
import { Input } from 'react-toolbox';
import inputTheme from './input_field.scss';

const InputField = ({ type, input, label, meta, ...custom }) => {
  const errorSpan = (
    <span className={inputTheme['error-form']}>
      {meta.error}
    </span>
  );
  return (
    <Input
      type={type}
      label={label}
      {...input}
      {...custom}
    >
      {meta.touched && meta.error && errorSpan}
    </Input>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object
};

export default InputField;
