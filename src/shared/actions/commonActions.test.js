import {
  loading,
  complete,
  userError,
  networkError,
} from './commonActions';
import {
  USER_ERROR, NETWORK_ERROR, IS_LOADING, IS_COMPLETE,
} from '../constants/ActionTypes';

describe('Tests common actions', () => {
  it('should return loading action', () => {
    expect(loading()).toEqual({ type: IS_LOADING });
  });

  it('should return complete action', () => {
    expect(complete()).toEqual({ type: IS_COMPLETE });
  });

  it('should return user errors action', () => {
    expect(userError({ firstName: [] })).toEqual({ type: USER_ERROR, payload: { firstName: [] } });
  });

  it('should return network action', () => {
    expect(networkError()).toEqual({ type: NETWORK_ERROR });
  });
});
