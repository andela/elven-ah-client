import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../shared/layouts/Navbar';
import Home from '../features/home/Home';
import LoginContainer from '../features/authentication/login/LoginContainer';
import SignupContainer from '../features/authentication/signup/SignupContainer';
import ResetContainer from '../features/authentication/password-reset/ResetContainer';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/password/reset" component={ResetContainer} />
    </Switch>
  </div>
);

export default routes;
