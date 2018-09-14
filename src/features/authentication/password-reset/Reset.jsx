import React from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable react/no-array-index-key */
const Reset = ({
  handleChange, values, handleReset, errors,
}) => (
  <div className="mx-auto centered col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
    <form className="form-login" onSubmit={handleReset}>
      <h4 className="text-centre">Enter your new password</h4>
      <div className="error">{errors.message}</div>
      <input
        onChange={handleChange}
        type="password"
        className="form-control form-input"
        id="password"
        value={values.password}
        placeholder="Enter your password"
        required
      />
      {errors.password ? errors.password.map((error, index) => <span className="error" key={index}>{error}</span>) : ''}
      <input
        onChange={handleChange}
        type="password"
        className="form-control form-input"
        id="confirmPassword"
        value={values.confirmPassword}
        placeholder="Repeat password"
        required
      />
      {errors.confirmPassword ? errors.confirmPassword.map((error, index) => (
        <span className="error" key={index}>
          {error}
          <br />
        </span>
      )) : ''}
      <button className="btn mx-auto btn-block auth-submit-btn" type="submit"> Update Password</button>
    </form>
  </div>
);

Reset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Reset;
