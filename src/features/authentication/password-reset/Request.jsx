import React from 'react';
import { PropTypes } from 'prop-types';
import './password-reset.css';

const Request = ({ handleChange, handleRequest, errors }) => (
  <div className="container my-4">
    <form className="form-signin" onSubmit={handleRequest}>
      <h2 className="form-signin-heading">Enter your registered email to request a password reset link</h2>
      <div className="error">{errors.message}</div>
      <input onChange={handleChange} type="email" className="form-control" id="email" placeholder="Enter your email address" required />
      <div className={errors.email ? 'error' : null}>
        {errors.email ? errors.email[0] : ''}
      </div>
      <br />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Request Password Reset</button>
    </form>
  </div>
);

Request.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default Request;
