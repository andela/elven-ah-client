import {
  SINGLE_ARTICLE_FETCH_SUCCESSFUL, SINGLE_ARTICLE_FETCH_FAILED,
} from '../../../shared/constants/ActionTypes';

const singleArticleReducer = (state, { type, article, errors }) => {
  switch (type) {
    case SINGLE_ARTICLE_FETCH_SUCCESSFUL:
      return {
        ...state,
        currentArticle: article,
        errors: undefined,
      };
    case SINGLE_ARTICLE_FETCH_FAILED:
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default singleArticleReducer;
