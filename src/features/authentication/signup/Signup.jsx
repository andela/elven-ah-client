import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Signup = ({
  handleChange, handleSubmit, bindValues, errors,
}) => (
  <div className="container-fluid col-xl-6 col-lg-10 col-md-10 col-sm-6 col-xs-7">
    <form className="form-signup" onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <em>Create an account to have access to
          <br />a whole world of exciting stories<br />
          specially curated for you.
        </em>
      </div>
      <div className="form-label-group mb-3">
        <input
          type="text"
          id="firstName"
          value={bindValues.firstName}
          name="firstName"
          className="form-control form-input"
          placeholder="First name"
          onChange={handleChange}
          required
        />
        {errors.firstName ? errors.firstName.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
      </div>
      <div className="form-label-group mb-3">
        <input
          type="text"
          id="lastName"
          value={bindValues.lastName}
          name="lastName"
          className="form-control form-input"
          placeholder="Last name"
          onChange={handleChange}
          required
        />
        {errors.lastName ? errors.lastName.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
      </div>
      <div className="form-label-group mb-3">
        <input
          type="email"
          id="email"
          value={bindValues.email}
          name="email"
          className="form-control form-input"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        {errors.email ? errors.email.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
      </div>
      <div className="form-label-group mb-3">
        <input
          type="text"
          id="username"
          value={bindValues.username}
          name="username"
          className="form-control form-input is"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        {errors.username ? errors.username.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
      </div>
      <div className="form-label-group mb-3">
        <input
          type="password"
          id="password"
          value={bindValues.password}
          name="password"
          className="form-control form-input"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {errors.password ? errors.password.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
      </div>
      <div className="form-label-group mb-3">
        <input
          type="password"
          id="confirmPassword"
          value={bindValues.confirmPassword}
          name="confirmPassword"
          className="form-control form-input"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        {errors.confirmPassword ? errors.confirmPassword.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
      </div>
      <button className="btn btn-lg col-md-5 mx-auto btn-block auth-submit-btn" type="submit">Sign up</button>
    </form>
    <br />
    <div className="text-center mb-4">
      <p>Already have an account? <Link to="/" className="login-text"> Log in </Link> </p>
    </div>
  </div>
);

Signup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bindValues: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default Signup;
