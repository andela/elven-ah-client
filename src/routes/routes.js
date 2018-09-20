import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../features/home/Home';
import LoginContainer from '../features/authentication/login/LoginContainer';
import SignupContainer from '../features/authentication/signup/SignupContainer';
import ResetContainer from '../features/authentication/password-reset/ResetContainer';
import VerifyAccountContainer from '../features/authentication/verify-account/VerifyAccountContainer';
import Footer from '../features/authentication/Footer';
import SingleArticle from '../features/articles/SingleArticle';

const routes = (
  <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/password/reset" component={ResetContainer} />
      <Route path="/auth/verify" component={VerifyAccountContainer} />
      <Route path="/article" component={SingleArticle} />

    </Switch>
    <Footer />
  </div>
);

export default routes;
