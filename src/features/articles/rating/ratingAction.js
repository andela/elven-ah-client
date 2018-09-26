import toastr from 'toastr';

import {
  IS_LOADING,
  IS_COMPLETE,
  RATING_SUCCESSFUL,
  RATING_FAILED,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import { fetchArticle } from '../single-article/singleArticleAction';
import errorHandler from '../../../shared/utilities/errorHandler';

const rateArticle = payload => async (dispatch) => {
  const { slug, author } = payload.article;
  dispatch({ type: IS_LOADING });
  const response = await fetchData({
    method: 'post',
    url: `/articles/${author.username}/${slug}/${payload.rating}`,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${payload.token}`,
    },
  });
  dispatch({ type: IS_COMPLETE });
  if (response.status === 200 || response.status === 201) {
    const { rating } = response.data;
    dispatch({ type: RATING_SUCCESSFUL, rating });
    dispatch(fetchArticle(slug));
    return toastr.success(`You have successfully given the article ${rating.value} stars`);
  }
  if (response.status === 401 || response.status >= 500) {
    response.pathname = `articles/${slug}`;
    return errorHandler(dispatch, response);
  }
  const errors = response.data;
  dispatch({ type: RATING_FAILED, errors });
  return toastr.error(errors.message);
};

export default rateArticle;
