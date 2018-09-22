import toastr from 'toastr';

import {
  IS_LOADING,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  VALIDATION_ERROR,
  IS_COMPLETE,
  NETWORK_ERROR,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import localStorageUtil from '../../../shared/utilities/localStorageUtil';

const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: '/auth/login',
    method: 'post',
    data: user,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    dispatch({ type: LOGIN_SUCCESSFUL, user: response.data.user });
    localStorageUtil.setItem('ah_user', response.data.user);
    history.push('/');
    return toastr.success('You have logged in successfully');
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  if (response.status === 400) {
    const { errors } = response.data;
    return dispatch({ type: VALIDATION_ERROR, errors });
  }
  const errors = response.data;
  errors.email = errors.message;
  return dispatch({ type: LOGIN_FAILED, errors });
};

export default loginUser;
