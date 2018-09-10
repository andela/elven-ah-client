import React from 'react';
import PropTypes from 'prop-types';
import '../login/login.css';

const Signup = ({
  handleChange, handleSubmit, bindValues, errors,
}) => (
  <div className="container my-4">
    <form className="form-signin" onSubmit={handleSubmit}>
      <h2 className="form-signin-heading">Please provide your details</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange} type="text" id="firstName" value={bindValues.firstName} className="form-control" placeholder="First Name" required />
        {errors.firstName ? errors.firstName.map(error => <p key={error}>{error}</p>) : ''}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange} type="text" id="lastName" value={bindValues.lastName} className="form-control" placeholder="Last Name" required />
        {errors.lastName ? errors.lastName.map(error => <p key={error}>{error}</p>) : ''}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} type="email" id="email" value={bindValues.email} className="form-control" placeholder="Email address" required />
        {errors.email ? errors.email.map(error => <p key={error}>{error}</p>) : ''}
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} type="text" id="username" value={bindValues.userame} className="form-control" placeholder="Username" required />
        {errors.username ? errors.username.map(error => <p key={error}>{error}</p>) : ''}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" id="password" value={bindValues.password} className="form-control" placeholder="Password" required />
        {errors.password ? errors.password.map(error => <p key={error}>{error}</p>) : ''}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input onChange={handleChange} type="password" id="confirmPassword" value={bindValues.confirmPassword} className="form-control" placeholder="Confirm Password" required />
        {errors.confirmPassword ? errors.confirmPassword.map(error => <p key={error}>{error}</p>) : ''}
      </div>
      <button className="btn btn-md btn-primary btn-block" type="submit">Sign up</button>
    </form>
  </div>
);

Signup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bindValues: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default Signup;
