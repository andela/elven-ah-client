import { combineReducers } from 'redux';
import loginUser from '../features/login/loginReducer';


const rootReducer = combineReducers({
  login: loginUser,
});

export default rootReducer;
