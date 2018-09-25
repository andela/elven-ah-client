import toastr from 'toastr';
import {
  IS_LOADING,
  IS_COMPLETE,
  NETWORK_ERROR,
  ALL_ARTICLES_FETCH_SUCCESSFUL,
  ALL_ARTICLES_FETCH_FAILED,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import localStorageUtil from '../../../shared/utilities/localStorageUtil';

export const getAllArticles = articles => ({
  type: ALL_ARTICLES_FETCH_SUCCESSFUL,
  articles,
});

export const getAllArticleError = error => ({
  type: ALL_ARTICLES_FETCH_FAILED,
  error,
});

export const viewAllArticles = articleData => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth.user;
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    url: '/articles',
    data: articleData,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    },
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200) {
    localStorageUtil.setItem('ah_user', { ...state.articles, ...response.data.articles });
    return dispatch(getAllArticles(response.data.articles));
  }
  if (response.status >= 500) {
    dispatch({ type: NETWORK_ERROR });
    return toastr.error('Oops! unable to connect to the Internet. Please check your connection and try again');
  }
  const errors = response.data;
  return dispatch(getAllArticleError(errors));
};
