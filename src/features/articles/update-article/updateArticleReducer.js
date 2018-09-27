import {
  UPDATE_ARTICLE_SUCESSFUL,
  UPDATE_ARTICLE_FAILED,
} from '../../../shared/constants/ActionTypes';

const updateArticleReducer = (state, { type, article, errors }) => {
  switch (type) {
    case UPDATE_ARTICLE_SUCESSFUL:
      return {
        ...state,
        currentArticle: article,
        errors: {},
      };
    case UPDATE_ARTICLE_FAILED:
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default updateArticleReducer;
