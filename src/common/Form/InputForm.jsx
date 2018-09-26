/* eslint-disable react/require-default-props */
import React from 'react';
import { PropTypes } from 'prop-types';

const inputForm = ({
  type = 'text', name, value, onChange,
}) => (
  <React.Fragment>
    <input type={type} name={name} value={value} onChange={onChange} />
  </React.Fragment>
);

inputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string, 
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default inputForm;
