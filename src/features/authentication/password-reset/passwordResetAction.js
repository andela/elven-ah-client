import toastr from 'toastr';
import {
  IS_LOADING,
  PASSWORD_RESET_REQUEST_SUCCESSFUL,
  VALIDATION_ERROR,
  PASSWORD_RESET_REQUEST_FAILED,
  PASSWORD_RESET_LINK_INVALID,
  PASSWORD_RESET_LINK_VALID,
  PASSWORD_RESET_SUCCESSFUL,
  PASSWORD_RESET_FAILED,
  IS_COMPLETE,
  NETWORK_ERROR,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';

export const requestPasswordReset = (email, history) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: '/users/account/password/reset',
    method: 'post',
    data: email,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    const { data } = response;
    dispatch({ type: PASSWORD_RESET_REQUEST_SUCCESSFUL, data });
    history.push('/');
    return toastr.success(data.message);
  }
  if (response.status === 400) {
    const errors = response.data;
    return dispatch({ type: VALIDATION_ERROR, errors });
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  return dispatch({ type: PASSWORD_RESET_REQUEST_FAILED, errors });
};

export const verifyResetLink = (token, history) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: `/users/account/password/reset?tokenId=${token}`,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    const { data } = response;
    dispatch({ type: PASSWORD_RESET_LINK_VALID, data });
    history.push('/password/reset');
    return toastr.success(data.message);
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  dispatch({ type: PASSWORD_RESET_LINK_INVALID, errors });
  return history.push('/password/reset');
};

export const resetPassword = (resetData, history) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: `/users/account/password/reset?tokenId=${resetData.resetToken}`,
    method: 'put',
    data: resetData,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    const { data } = response;
    dispatch({ type: PASSWORD_RESET_SUCCESSFUL, data });
    history.push('/');
    return toastr.success(data.message);
  }
  if (response.status === 400) {
    const { errors } = response.data;
    errors.message = 'Validation Error(s)';
    return dispatch({ type: VALIDATION_ERROR, errors });
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  dispatch({ type: PASSWORD_RESET_FAILED, errors });
  return history.push('/password/reset');
};
