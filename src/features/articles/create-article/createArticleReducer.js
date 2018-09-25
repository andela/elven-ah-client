import {
  CREATE_ARTICLE_SUCESSFUL,
  CREATE_ARTICLE_FAILED,
} from '../../../shared/constants/ActionTypes';

const createArticleReducer = (state, { type, article, errors }) => {
  switch (type) {
    case CREATE_ARTICLE_SUCESSFUL:
      return {
        ...state,
        currentArticle: article,
        errors: undefined,
      };
    case CREATE_ARTICLE_FAILED:
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default createArticleReducer;
