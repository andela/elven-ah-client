import authReducer from '../authReducer';
import { SIGNUP_USER, USER_ERROR } from '../../../shared/constants/ActionTypes';

const payload = {
  user: {},
  token: 'ey.njioefe8ei43hufiWQUHAhqoiao.M0ihr4JAWVah3fihAkvj.nj3ooAJSOITELmsnjij',
};

describe('Tests auth reducer', () => {
  it('should return signed up user', () => {
    expect(authReducer({}, { type: SIGNUP_USER, payload })).toEqual({
      user: payload.user,
      token: payload.token,
      isAuthenticated: true,
    });
  });

  it('should return the exact state', () => {
    expect(authReducer({}, { type: USER_ERROR, payload })).toEqual({});
  });
});
