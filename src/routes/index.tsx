import React from 'react';
import { Switch, } from 'react-router-dom';
import Route from './Route'
import SignIn from '../page/Signin/index'
import SignUp from '../page/SignUp/index'
import Dashboard from '../page/Dashboard/index'
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes;
