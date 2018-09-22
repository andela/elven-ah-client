import { combineReducers } from 'redux';
import authReducer from '../features/authentication/authReducer';
import commonReducer from './reducers/commonReducer';
import { clearState } from './utilities/persistState';


export const appReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
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
