import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../features/home/Home';
import DefaultLoginContainer from '../features/authentication/login/LoginContainer';
import DefaultSignupContainer from '../features/authentication/signup/SignupContainer';
import DefaultVerifyAccountContainer from '../features/authentication/verify-account/VerifyAccountContainer';
import PasswordResetContainer from '../features/authentication/password-reset/PasswordResetContainer';
import Footer from '../features/authentication/Footer';
import ProfilePage from '../features/authentication/profile/profile';
import DefaultSocialLoginContainer from '../features/authentication/social-login/SocialLoginContainer';
import DefaultSingleArticleContainer from '../features/articles/single-article/SingleArticleContainer';

const routes = (
  <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/users/:username" component={ProfilePage} exact />
      <Route path="/login" component={DefaultLoginContainer} />
      <Route path="/signup" component={DefaultSignupContainer} />
      <Route path="/password/reset" component={PasswordResetContainer} />
      <Route path="/auth/verify" component={DefaultVerifyAccountContainer} />
      <Route path="/oauth2/:socialLogin" component={DefaultSocialLoginContainer} />
      <Route path="/articles/:slug" component={DefaultSingleArticleContainer} exact />
    </Switch>
    <Footer />
  </div>
);

export default routes;
