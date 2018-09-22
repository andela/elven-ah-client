import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/* eslint-disable react/no-array-index-key */
const Login = ({
  handleChange, values, handleSubmit, errors,
}) => (
  <div className="container-fluid col-xl-6 col-lg-10 col-md-10 col-sm-6 col-xs-7">
    <form className="form-login" onSubmit={handleSubmit}>
      <br />
      <div className="text-center my-4">
        <em>Log into your account with email/username</em>
      </div>
      <div className="form-label-group mb-3">
        <input
          onChange={handleChange}
          type="text"
          className="form-control form-input"
          id="emailOrUsername"
          value={values.emailOrUsername}
          placeholder="Enter your email or username"
          required
        />
        <span className="invalid-feedback">{errors.email}</span>
      </div>
      <div className="form-label-group mb-3">
        <input
          onChange={handleChange}
          type="password"
          className="form-control form-input"
          id="password"
          value={values.password}
          placeholder="Enter your password"
          required
        />
        {errors.password ? errors.password.map((error, index) => <span className="invalid-feedback" key={index}>{error}</span>) : ''}
      </div>
      <button className="btn mx-auto btn-block auth-submit-btn" type="submit">Sign in</button>
      <div className="text-center my-4">
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/signup" className="login-text"> Create One </Link>
          <br />
          <Link to="/password/reset" className="login-text">Forgot Password?</Link>
        </p>
      </div>
    </form>
  </div>
);

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Login;
