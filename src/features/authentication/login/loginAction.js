
import {
  IS_LOADING,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  VALIDATION_ERROR,
  IS_COMPLETE,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import localStorageUtil from '../../../shared/utilities/localStorageUtil';

const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: 'auth/login',
    method: 'post',
    data: user,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    dispatch({ type: LOGIN_SUCCESSFUL, user: response.data.user });
    localStorageUtil.setItem('ah_user', response.data.user);
    return history.push('/');
  }
  if (response.status === 400) {
    const { errors } = response.data;
    errors.message = 'Validation Error(s)';
    return dispatch({ type: VALIDATION_ERROR, errors });
  }
  const errors = response.data;
  return dispatch({ type: LOGIN_FAILED, errors });
};

export default loginUser;
