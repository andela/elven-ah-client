import React from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable react/no-array-index-key */
const Request = ({
  handleChange, values, handleRequest, errors,
}) => (
  <div className="mx-auto centered col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
    <form className="form-login" onSubmit={handleRequest}>
      <h4 className="text-centre">Enter your registered email to request a password reset link</h4>
      <div className="error">{errors.message}</div>
      <input
        onChange={handleChange}
        type="email"
        className="form-control form-input"
        id="email"
        value={values.email}
        placeholder="Enter your email address"
        required
      />
      {errors.email ? errors.email.map((error, index) => <span className="error" key={index}>{error}</span>) : ''}
      <button className="btn mx-auto btn-block auth-submit-btn" type="submit">Request Password Reset</button>
    </form>
  </div>
);

Request.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Request;
