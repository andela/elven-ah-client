import { combineReducers } from 'redux';
import authReducer from '../features/authentication/authReducer';
import commonReducer from './reducers/commonReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  commmon: commonReducer,
});

export default rootReducer;
