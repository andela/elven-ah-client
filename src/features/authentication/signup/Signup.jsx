import React from 'react';
import { PropTypes } from 'prop-types';
import '../login/login.css';

const Signup = ({ handleChange, handleSubmit }) => (
  <div className="container my-4">
    <form className="form-signin" onSubmit={handleSubmit}>
      <h2 className="form-signin-heading">Please provide your details</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange} type="text" id="firstName" className="form-control" placeholder="First Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange} type="text" id="lastName" className="form-control" placeholder="Last Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} type="email" id="email" className="form-control" placeholder="Email address" required />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} type="text" id="username" className="form-control" placeholder="Username" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" id="password" className="form-control" placeholder="Password" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input onChange={handleChange} type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required />
      </div>
      <button className="btn btn-md btn-primary btn-block" type="submit">Sign up</button>
    </form>
  </div>
);

Signup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Signup;
