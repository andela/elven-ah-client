import toastr from 'toastr';

import {
  IS_LOADING,
  IS_COMPLETE,
  NETWORK_ERROR,
  SINGLE_ARTICLE_FETCH_SUCCESSFUL,
  SINGLE_ARTICLE_FETCH_FAILED,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';

export const fetchArticle = slug => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: `/articles/${slug}`,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    return dispatch({ type: SINGLE_ARTICLE_FETCH_SUCCESSFUL, article: response.data.article });
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  return dispatch({ type: SINGLE_ARTICLE_FETCH_FAILED, errors });
};
export const fetchComment = slug => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: `/articles/${slug}`,
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    dispatch({ type: SINGLE_ARTICLE_FETCH_SUCCESSFUL, article: response.data.article });
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  return dispatch({ type: SINGLE_ARTICLE_FETCH_FAILED, errors });
};
