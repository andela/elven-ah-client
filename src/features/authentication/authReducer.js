
import loginReducer from './login/loginReducer';
import passwordResetReducer from './password-reset/passwordResetReducer';
import signupReducer from './signup/signupReducer';
import localStorageUtil from '../../shared/utilities/localStorageUtil';

const initialState = {
  user: localStorageUtil.getItem('ah_user') || {},
  errors: {},
  token: '',
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, errors } = action;
  switch (true) {
    case type.startsWith('LOGIN'):
      return loginReducer(state, action);

    case type.startsWith('PASSWORD'):
      return passwordResetReducer(state, action);

    case type.startsWith('SIGNUP'):
      return signupReducer(state, action);

    case type.startsWith('VALIDATION'):
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default authReducer;
