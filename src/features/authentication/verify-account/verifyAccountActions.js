import toastr from 'toastr';
import {
  IS_LOADING,
  IS_COMPLETE,
  SIGNUP_SUCCESSFUL,
  VALIDATION_ERROR,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import localStorageUtil from '../../../shared/utilities/localStorageUtil';

/**
 * @description Verifies the account of a user
 * @param {String} token The verification token
 * @returns {Object} The response object
 */
const verifyAccount = token => async (dispatch) => {
  if (!token) {
    toastr.error('Please check your email for the verification link');
    return null;
  }
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: `/auth/verify?evc=${token}`,
      method: 'get',
    });
    dispatch({ type: IS_COMPLETE });
    if (response.status === 200) {
      toastr.success(response.data.message);
      dispatch({ type: SIGNUP_SUCCESSFUL, user: response.data.user });
      localStorageUtil.setItem('ah_user', response.data.user);
      return response;
    }
    toastr.error('Account activation failed');
    return response;
  } catch (error) {
    return toastr.error('Unable to connect to the Internet, please check your connection and try agian...');
  }
};

/**
 * @description Resends the verification link to an email
 * @param {String} email The user's email
 * @returns {String} The resend verification message
 */
export const resendVerificationLink = email => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: '/auth/verify',
      method: 'post',
      data: { email },
    });
    dispatch({ type: IS_COMPLETE });
    const { message } = response.data;
    let type = '';
    if (response.status === 201) {
      return toastr.success(response.data.message);
    }
    if (response.data.errors) {
      const { errors } = response.data;
      errors.message = 'Validation Error(s)';
      type = 'error';
      return dispatch({ type: VALIDATION_ERROR, errors });
    }
    const resp = {
      message,
      type: type || 'error',
    };
    return resp;
  } catch (error) {
    return toastr.error('Unable to connect to the Internet, please check your connection and try again...');
  }
};

export default verifyAccount;
