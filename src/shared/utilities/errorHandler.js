import toastr from 'toastr';
import {
  VALIDATION_ERROR,
  NETWORK_ERROR,
} from '../constants/ActionTypes';

const errorHandler = (dispatch, data) => {
  if (data.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  if (data.status === 400) {
    const { errors } = data.data;
    return dispatch({ type: VALIDATION_ERROR, errors });
  }
  return null;
};
export default errorHandler;
