import toastr from 'toastr';
import {
  IS_LOADING,
  PASSWORD_RESET_REQUEST_SUCCESSFUL,
  PASSWORD_RESET_REQUEST_FAILED,
  PASSWORD_RESET_LINK_INVALID,
  PASSWORD_RESET_LINK_VALID,
  PASSWORD_RESET_SUCCESSFUL,
  PASSWORD_RESET_FAILED,
  IS_COMPLETE,
  NETWORK_ERROR,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import errorHandler from '../../../shared/utilities/errorHandler';

const handlePasswordError = (dispatch, response, type) => {
  const errors = response.data;
  return dispatch({ type, errors });
};

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
  if (response.status > 400 && response.status < 500) {
    return handlePasswordError(dispatch, response, PASSWORD_RESET_REQUEST_FAILED);
  }
  return errorHandler(dispatch, response);
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
  if (response.status > 400 && response.status < 500) {
    handlePasswordError(dispatch, response, PASSWORD_RESET_LINK_INVALID);
    return history.push('/password/reset');
  }
  return errorHandler(dispatch, response);
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
  if (response.status > 400 && response.status < 500) {
    handlePasswordError(dispatch, response, PASSWORD_RESET_FAILED);
    return history.push('/password/reset');
  }
  return errorHandler(dispatch, response);
};
