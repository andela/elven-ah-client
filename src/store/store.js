import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createBrowserHistory } from 'history';

import rootReducer from '../shared/rootReducer';
import { saveState, loadState } from '../shared/utilities/persistState';

const history = createBrowserHistory();

const configureStore = () => {
  const persistedState = loadState();


  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    connectRouter(history)(rootReducer),
    persistedState,
    composeEnhancer(applyMiddleware(ReduxThunk, routerMiddleware(history))),
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 5000));
  return store;
};

export default configureStore;
