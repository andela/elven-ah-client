import React from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable react/no-array-index-key */
const Request = ({
  handleChange, values, handleRequest, errors, resetLinkError,
}) => (
  <div className="mx-auto centered text-center col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
    <form className="form-login" onSubmit={handleRequest}>
      <h4>Enter your registered email to request a password reset link</h4>
      <div className="form-label-group mb-3">
        <input
          onChange={handleChange}
          type="email"
          className="form-control form-input"
          id="email"
          value={values.email}
          placeholder="Enter your registered email"
          required
        />
        <span className="invalid-feedback">{!errors.email ? errors.message : ''}</span>
        <span className="invalid-feedback">{resetLinkError || ''}</span>
        {errors.email ? errors.email.map((error, index) => <span className="invalid-feedback" key={index}>{error}</span>) : ''}
      </div>
      {errors.email ? errors.email.map((error, index) => <span className="error" key={index}>{error}</span>) : ''}
      <button className="btn mx-auto btn-block auth-submit-btn" type="submit">Request Password Reset</button>
    </form>
  </div>
);

Request.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  resetLinkError: PropTypes.string.isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Request;
