import React, { Component } from 'react';
import LoginPageContainer from './LoginPageContainer';
import Footer from './Footer';
import SignupPageContainer from './SignupPageContainer';
import PasswordResetContainer from './PasswordResetPageContainer';
import EmailVerificationResendContainer from './EmailVerificationResendContainer';
import PasswordResetPageContainer from './PasswordResetPageContainer';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <LoginPageContainer /> */}
        {/* <SignupPageContainer /> */}
        {/* <PasswordResetContainer /> */}
        {/* <EmailVerificationResendContainer /> */}
        <PasswordResetPageContainer />
        <Footer />
      </div>
    );
  }
}
