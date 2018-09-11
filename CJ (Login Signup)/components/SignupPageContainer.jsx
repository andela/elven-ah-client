import React, { Component } from 'react'
import SignupForm from './SignupForm';
import SocialLogin from './SocialLogin';
import '../assets/css/authPages.css';

export default class SignupPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="text-center mb-4">
          <img className="mb-4 mt-5" src="/src/assets/img/AH_LOGO.svg" alt="logo" width="71" height="71" />
        </div>

        <div className="body row mt-4">
          <div className="col-md-6 divider">
            <SignupForm />
          </div>
          <SocialLogin />
        </div>
      </div>
    );
  }
}
