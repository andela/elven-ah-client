import {
  SIGNUP_SUCCESSFUL,
  SIGNUP_FAILED,
} from '../../../shared/constants/ActionTypes';

const signupReducer = (state, { type, user, errors }) => {
  switch (type) {
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        user,
        isAuthenticated: true,
        errors: undefined,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default signupReducer;
