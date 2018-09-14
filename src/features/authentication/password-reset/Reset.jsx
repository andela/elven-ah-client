import React from 'react';
import { PropTypes } from 'prop-types';
import './password-reset.css';

const Reset = ({ handleChange, handleReset, errors }) => (
  <div className="container my-4">
    <form className="form-signin" onSubmit={handleReset}>
      <h2 className="form-signin-heading">Enter new password</h2>
      <div className="error">{errors.message}</div>
      <br />
      <input onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter your password" required />
      <div className={errors.password ? 'error' : null}>
        {errors.password ? errors.password[0] : ''}
      </div>
      <br />
      <input onChange={handleChange} type="password" className="form-control" id="confirmPassword" placeholder="Repeat password" required />
      <div className={errors.confirmPassword ? 'error' : null}>
        {errors.confirmPassword ? errors.confirmPassword[0] : ''}
      </div>
      <br />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
);

Reset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default Reset;
