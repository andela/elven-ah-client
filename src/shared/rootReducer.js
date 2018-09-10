import { combineReducers } from 'redux';
import authReducer from '../features/authentication/authReducer';
import commonReducer from './reducers/commonReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

export default rootReducer;
