import { LOGIN_USER, SIGNUP_USER } from '../../shared/constants/ActionTypes';

const initialState = {
  user: {},
  token: '',
  isAuthenticated: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        message: 'You have logged in successfully',
        name: payload.email.split('@')[0],
        email: payload.email,
      };
    case SIGNUP_USER:
      return Object.assign(
        {},
        { ...state },
        {
          user: payload.user,
          token: payload.token,
          isAuthenticated: true,
        },
      );
    default:
      return state;
  }
};

export default authReducer;
