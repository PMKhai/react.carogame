import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { history } from './index';
import Game from './containers/game';
import LoginForm from './containers/loginform';
import RegisterForm from './containers/registerform';
import GlobalLoading from './containers/globalloading';
import Home from './containers/home';
import EditProfile from './containers/editprofile';
import GameOnline from './containers/gameonline';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <GlobalLoading />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/game" component={Game} />
          <Route path="/gameonline" component={GameOnline} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
