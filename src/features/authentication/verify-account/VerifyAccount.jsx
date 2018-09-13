import React from 'react';
import PropTypes from 'prop-types';
import '../login/login.css';

const VerifyAccount = ({
  handleChange, handleSubmit, email, errors, resend, message, handleResendLink,
}) => (
  <div className="container my-4">
    {
      resend ? (
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <em>{message}</em>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              className="form-control formInput"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            {errors.email ? errors.email.map(error => <small key={error} className="invalid-feedback">{error}</small>) : ''}
          </div>
          <button
            className="btn btn-lg col-xl-8 col-lg-6 col-md-8 col-sm-9 mx-auto btn-block authSubmitBtn"
            type="submit"
          >
            Resend verification Link
          </button>
        </form>
      ) : (
        <div>
          <h4>Account verification</h4>
          <em>{message}</em>
          <button onClick={handleResendLink} className="btn btn-lg col-xl-8 col-lg-6 col-md-8 col-sm-9 mx-auto btn-block authSubmitBtn" type="submit">Resend verification link</button>
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
