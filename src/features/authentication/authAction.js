import toastr from 'toastr';

import {
  CLEAR_ERROR,
  CLEAR_VALIDATION_ERROR,
  USER_LOGOUT,
} from '../../shared/constants/ActionTypes';

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR, errors: {} });
};

export const clearValidationErrors = errorField => async (dispatch) => {
  dispatch({
    type: CLEAR_VALIDATION_ERROR,
    errorField,
  });
};

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  return toastr.warning('You have logged out successfully');
};
