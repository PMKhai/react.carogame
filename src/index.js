import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './app';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

// const composeEnhancer =
//   process.env.NODE_ENV !== 'production' &&
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
//     : compose;

// const middleware = [thunk];
// const enhancer = [applyMiddleware(...middleware)];

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(fetchDataLogin());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
