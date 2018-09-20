import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../features/home/Home';
import DefaultLoginContainer from '../features/authentication/login/LoginContainer';
import DefaultSignupContainer from '../features/authentication/signup/SignupContainer';
import DefaultVerifyAccountContainer from '../features/authentication/verify-account/VerifyAccountContainer';
import PasswordResetContainer from '../features/authentication/password-reset/PasswordResetContainer';
import Footer from '../features/authentication/Footer';
import ProfilePage from '../features/authentication/profile/profile';

const routes = (
  <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/password/reset" component={ResetContainer} />
      <Route path="/auth/verify" component={VerifyAccountContainer} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
    <Footer />
  </div>
);

export default routes;
