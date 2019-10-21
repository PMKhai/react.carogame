import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Game from './containers/game';
import LoginForm from './containers/loginform';
import RegisterForm from './containers/registerform';
import GlobalLoading from './containers/globalloading';

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalLoading />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
