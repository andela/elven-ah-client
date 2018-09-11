import React from 'react';
import PropTypes from 'prop-types';
import '../login/login.css';

const VerifyAccount = ({
  handleChange, handleSubmit, email, errors, resend, message, handleResendLink,
}) => (
  <div className="container my-4">
    {
      resend ? (
        <form className="form-signin" onSubmit={handleSubmit}>
          <h2 className="form-signin-heading">Please provide your email</h2>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input onChange={handleChange} type="email" id="email" value={email} className="form-control" placeholder="Email address" required />
            {errors.email ? errors.email.map(error => <p key={error}>{error}</p>) : ''}
          </div>
          <button className="btn btn-md btn-primary btn-block" type="submit">Resend verification</button>
        </form>
      ) : (
        <div>
          <h2>Account verification</h2>
          <p>{message}</p>
          <button onClick={handleResendLink} className="btn btn-md btn-primary btn-block" type="submit">Resend verification link</button>
        </div>)
    }
  </div>
);

VerifyAccount.propTypes = {
  handleResendLink: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.shape({}).isRequired,
  message: PropTypes.string.isRequired,
  resend: PropTypes.bool.isRequired,
};

export default VerifyAccount;
