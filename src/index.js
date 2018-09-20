import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Router } from 'react-router-dom';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import history from './shared/utilities/history';

import App from './App';
import rootReducer from './shared/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(ReduxThunk, routerMiddleware(history))),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
