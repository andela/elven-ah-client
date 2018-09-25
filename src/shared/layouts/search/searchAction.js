import toastr from 'toastr';
import {
  IS_LOADING,
  IS_COMPLETE,
  NETWORK_ERROR,
  SEARCH_FUNCTION_SUCCESS,
  SEARCH_FUNCTION_ERROR,
} from '../../constants/ActionTypes';
import fetchData from '../../utilities/fetchData';

export const searchFunctionSuccess = search => ({
  type: SEARCH_FUNCTION_SUCCESS,
  search,
});
export const searchFunctionError = error => ({
  type: SEARCH_FUNCTION_ERROR,
  error,
});


export const searchFilter = searchData => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth.user;
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: `search?q=${searchData.value}`,
    data: searchData,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    },
  });
  console.log(response.data.result)
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    return dispatch(searchFunctionSuccess(response.data.result));
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  return dispatch(searchFunctionError(errors));
};
