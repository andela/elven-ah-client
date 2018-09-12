import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordUpdateForm from './PasswordUpdateForm'
import Logo from './Logo';

export default class PasswordResetContainer extends Component {
  constructor(props) {
    super(props);
  }

  emailSuccessMessage = (email) => (`Password reset link has been sent to ${email}`);
  updateSuccessMessage = () => (`Your password has been successfully updated.`);

  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-md-5 container-fluid">
        <div className="text-center mb-4">
          <Logo width={71} height={71} />
        </div>
        <div className="mt-6">
          {/* <EmailInput
            message="Enter your email address to receive a link for resetting your password."
            successMessage={this.successMessage}
            buttonText="Reset Password"
          /> */}
          <PasswordUpdateForm
            message="Enter your new password."
            successMessage={this.successMessage}
            buttonText="Update Password"
          />
        </div>
      </div>
    );
  }
}
