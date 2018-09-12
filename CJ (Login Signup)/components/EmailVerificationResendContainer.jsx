import React, { Component } from 'react';
import EmailInput from './EmailInput';
import Logo from './Logo';

export default class EmailVerificationResetContainer extends Component {
  constructor(props) {
    super(props);
  }

  successMessage = (email) => (`Email verification link has been sent to ${email}`);

  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-md-5 container-fluid">
        <div className="text-center mb-4">
          <Logo width={71} height={71} />
        </div>
        <div className="mt-6">
          <EmailInput
            message="Enter your email address to receive new link to verify your account."
            successMessage={this.successMessage}
            buttonText="Reset Password"
          />
        </div>
      </div>
    );
  }
}
