import { combineReducers } from 'redux';
import authReducer from '../features/authentication/authReducer';
import commonReducer from './reducers/commonReducer';
import articlesReducer from '../features/articles/articlesReducer';
import searchReducer from './layouts/search/searchReducer';
import { clearState } from './utilities/persistState';


export const appReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  articles: articlesReducer,
  search: searchReducer,
});

/* eslint-disable no-param-reassign */
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
    clearState();
  }

  return appReducer(state, action);
};

export default rootReducer;
