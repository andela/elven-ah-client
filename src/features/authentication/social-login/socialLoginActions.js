import toastr from 'toastr';
import fetchData from '../../../shared/utilities/fetchData';
import { IS_COMPLETE, SIGNUP_SUCCESSFUL, IS_LOADING } from '../../../shared/constants/ActionTypes';
import localStorageUtil from '../../../shared/utilities/localStorageUtil';

/**
 * @description Makes an ajax call to the various oauth2 handlers on the API
 * This is only triggered when a user is redirected to
 * the client after their authentication was successful
 * @param {String} accessToken The accessToken in the query code query param of the url
 * @param {String} socialLogin The social login provider
 */
const socialLoginAsync = (accessToken, socialLogin) => async (dispatch) => {
  try {
    if (!accessToken) return null;
    dispatch({ type: IS_LOADING });
    const response = await fetchData({
      url: `auth/${socialLogin}/callback?code=${accessToken}&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`,
      method: 'get',
    });
    dispatch({ type: IS_COMPLETE });
    if (response.status === 200 || response.status === 201) {
      toastr.success(response.data.message);
      dispatch({ type: SIGNUP_SUCCESSFUL, user: response.data.user });
      localStorageUtil.setItem('ah_user', response.data.user);
      return response;
    }
    toastr.error('Your authentication failed, please try again later...');
    return null;
  } catch (error) {
    toastr.error('Unable to connect to the Internet, please check your connection and try again...');
    return null;
  }
};

export default socialLoginAsync;
