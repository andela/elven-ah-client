import {
  IS_LOADING, USER_ERROR, NETWORK_ERROR, IS_COMPLETE,
} from '../constants/ActionTypes';

export const loading = () => ({
  type: IS_LOADING,
});

export const complete = () => ({
  type: IS_COMPLETE,
});

export const userError = errors => ({
  type: USER_ERROR,
  payload: errors,
});

export const networkError = () => ({
  type: NETWORK_ERROR,
});
