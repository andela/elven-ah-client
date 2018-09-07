import commonReducer from './commonReducer';
import {
  LOADING, COMPLETE, USER_ERROR, NETWORK_ERROR, SIGNUP_USER,
} from '../constants/ActionTypes';

const errors = {
  firstName: ['firstName must be a string', 'firstName is required'],
  email: ['email format is not valid'],
};

describe('Tests common reducer', () => {
  it('should return loading', () => {
    expect(commonReducer({}, { type: LOADING })).toEqual({
      loading: true,
      error: false,
    });
  });

  it('should return complete', () => {
    expect(commonReducer({}, { type: COMPLETE })).toEqual({
      loading: false,
      error: false,
    });
  });

  it('should return user errors', () => {
    expect(commonReducer({}, { type: USER_ERROR, payload: errors })).toEqual({
      loading: false,
      error: true,
      errors,
    });
  });

  it('should return network error', () => {
    expect(commonReducer({}, { type: NETWORK_ERROR })).toEqual({
      loading: false,
      error: true,
      message: 'Oops! unable to connect to the Internet. Please check your connection and try again',
    });
  });

  it('should return the exact state', () => {
    expect(commonReducer({}, { type: SIGNUP_USER, payload: errors })).toEqual({});
  });
});
