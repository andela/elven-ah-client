import {
  LOADING, USER_ERROR, NETWORK_ERROR, COMPLETE,
} from '../constants/ActionTypes';

export const loading = () => ({
  type: LOADING,
});

export const complete = () => ({
  type: COMPLETE,
});

export const userError = errors => ({
  type: USER_ERROR,
  payload: errors,
});

export const networkError = () => ({
  type: NETWORK_ERROR,
});
