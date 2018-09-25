import toastr from 'toastr';
import {
  IS_LOADING,
  VALIDATION_ERROR,
  IS_COMPLETE,
  UPDATE_ARTICLE_FAILED,
  UPDATE_ARTICLE_SUCESSFUL,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';

/**
 * @description Makes an ajax call to update an existing article
 * @param {Object} article The article to be created
 * @returns {Object}
 */
const updateArticle = article => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth.user;
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: `/articles/${article.slug}`,
      method: 'put',
      data: article,
      headers: {
        'x-access-token': token,
      },
    });
    console.log(response, 'response -----');
    dispatch({ type: IS_COMPLETE });
    switch (response.status) {
      case 200:
        dispatch({ type: UPDATE_ARTICLE_SUCESSFUL, article: response.data.article });
        return response;
      case 400:
        dispatch({ type: VALIDATION_ERROR, errors: response.data.errors });
        return null;
      default:
        dispatch({ type: UPDATE_ARTICLE_FAILED, errors: { errors: response.data.errors } });
        toastr.info(response.data.message || 'Failed to update your article please try again later!');
        return null;
    }
  } catch (error) {
    toastr.info('Unable to connect to the Internet, please check your connection and try agian...');
    return null;
  }
};

export default updateArticle;
