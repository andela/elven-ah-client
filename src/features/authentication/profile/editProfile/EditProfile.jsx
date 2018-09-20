/* eslint-disable react/require-default-props */
import React from 'react';
import { PropTypes } from 'prop-types';

const EditProfile = ({
  className, type = 'text', name, value, onChange,
}) => (
  <React.Fragment>
    <input className={className} type={type} name={name} value={value} onChange={onChange} />
  </React.Fragment>
);

EditProfile.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default EditProfile;
