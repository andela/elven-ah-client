import authReducer from '../authReducer';
import { SIGNUP_SUCCESSFUL } from '../../../shared/constants/ActionTypes';

const user = {};

describe('Tests auth reducer', () => {
  it('should return signed up user', () => {
    expect(authReducer({}, { type: SIGNUP_SUCCESSFUL, user })).toEqual({
      user,
      isAuthenticated: true,
      errors: undefined,
    });
  });
});
