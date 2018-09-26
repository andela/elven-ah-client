import toastr from 'toastr';
import {
  IS_LOADING,
  DELETE_ARTICLE_FAILED,
  IS_COMPLETE,
  DELETE_ARTICLE_SUCESSFUL,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';

const deleteArticle = articleSlug => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth.user;
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: `/articles/${articleSlug}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    });
    dispatch({ type: IS_COMPLETE });
    switch (response.status) {
      case 200:
        dispatch({ type: DELETE_ARTICLE_SUCESSFUL, article: { slug: articleSlug } });
        toastr.success('Your article has been sucessfully deleted and unpublished.');
        return response;
      case 400:
      case 404:
        dispatch({ type: DELETE_ARTICLE_FAILED });
        toastr.error('The article you want to unpublish does not exist.');
        return null;
      case 403:
        dispatch({ type: DELETE_ARTICLE_FAILED });
        toastr.error('You can not delete nor unpublish this article because it belongs to another author.');
        return null;
      default:
        dispatch({ type: DELETE_ARTICLE_FAILED });
        toastr.info(response.data.message || 'Failed to delete your article please try again later!');
        return null;
    }
  } catch (error) {
    toastr.info('Unable to connect to the Internet, please check your connection and try agian...');
    return null;
  }
};

export default deleteArticle;
