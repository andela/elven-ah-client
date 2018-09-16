import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import RootApp from './App';
import configureStore from './store/store';

const history = createBrowserHistory();
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <RootApp history={history} />
  </Provider>,
  document.getElementById('root'),
);
