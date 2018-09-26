import { combineReducers } from 'redux';
import authReducer from '../features/authentication/authReducer';
import commonReducer from './reducers/commonReducer';


export const appReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

export default appReducer;
