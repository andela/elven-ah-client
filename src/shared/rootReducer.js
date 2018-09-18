import { combineReducers } from 'redux';
import authReducer from '../features/authentication/authReducer';
import commonReducer from './reducers/commonReducer';
import articlesReducer from '../features/articles/articlesReducer';


export const appReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  articles: articlesReducer,
});

export default appReducer;
