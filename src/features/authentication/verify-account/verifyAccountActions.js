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
 */
const verifyAccount = token => async (dispatch) => {
  if (!token) {
    toastr.error('Please check your email for the verification link');
    return null;
  }
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: `auth/verify?evc=${token}`,
      method: 'get',
    });
    if (response.status === 200) {
      toastr.success(response.data.message);
      dispatch({ type: IS_COMPLETE });
      dispatch({ type: SIGNUP_SUCCESSFUL, user: response.data.user });
      localStorageUtil.setItem('ah_user', response.data.user);
      return response;
    }
    toastr.error('Account activation failed');
    return response;
  } catch (error) {
    toastr.error('Unable to connect to the Internet, please check your connection and try agian...');
  }
};

/**
 * @description Resends the verification link to an email
 * @param {String} token The user's email
 */
export const resendVerificationLink = email => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: 'auth/verify',
      method: 'post',
      data: { email },
    });
    const { message } = response.data;
    if (response.status === 201) {
      dispatch({ type: IS_COMPLETE });
      toastr.success(response.data.message);
    }
    if (response.data.errors) {
      const { errors } = response.data;
      errors.message = 'Validation Error(s)';
      dispatch({ type: VALIDATION_ERROR, errors });
    }
    return message;
  } catch (error) {
    toastr.error('Unable to connect to the Internet, please check your connection and try agian...');
  }
};

export default verifyAccount;
