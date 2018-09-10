import { SIGNUP_USER } from '../../../shared/constants/ActionTypes';

const signupReducer = (state, { type, user }) => {
  switch (type) {
    case SIGNUP_USER:
      return Object.assign(
        {},
        { ...state },
        {
          user: user.user,
          token: user.token,
          isAuthenticated: true,
        },
      );
    default:
      return state;
  }
};

export default signupReducer;
