import React, { Component } from 'react'
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import '../assets/css/authPages.css';
import Logo from './Logo';

export default class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="text-center mb-4">
          <Logo width={71} height={71} />
        </div>

        <div className="body row mt-6">
          <div className="col-md-6 divider">
            <LoginForm submit={this.createNewUser} />
          </div>
          <SocialLogin />
        </div>
      </div>
    );
  }
}
