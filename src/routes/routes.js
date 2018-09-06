import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../shared/layouts/Navbar';
import Home from '../features/home/Home';
import LoginContainer from '../features/authentication/login/LoginContainer';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginContainer} />
    </Switch>
  </div>
);

export default routes;
