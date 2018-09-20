import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './login.css';

const Login = ({ handleChange, handleSubmit, errors }) => (
  <div className="containers my-4">
    <form className="form-signin" onSubmit={handleSubmit}>
      <h2 className="form-signin-heading">Please Sign in</h2>
      <div className="error">{errors.message}</div>
      <input onChange={handleChange} type="text" className="form-control" id="emailOrUsername" placeholder="Enter your email or username" required />
      <br />
      <input onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter your password" required />
      <div className={errors.password ? 'error' : null}>
        {errors.password ? errors.password[0] : ''}
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <Link to="/password/reset">Forgot Password?</Link>
    </form>
  </div>
);

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default Login;
