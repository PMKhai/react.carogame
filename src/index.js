import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
// eslint-disable-next-line import/no-cycle
import App from './app';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  applyMiddleware(thunk, routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
