import React, { Component } from 'react';
import LoginPageContainer from './LoginPageContainer';
import Footer from './Footer';
import SignupPageContainer from './SignupPageContainer';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <LoginPageContainer />
        <SignupPageContainer /> */}
        <Footer />
      </div>
    );
  }
}
