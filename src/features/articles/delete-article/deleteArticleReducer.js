import {
  DELETE_ARTICLE_FAILED,
  DELETE_ARTICLE_SUCESSFUL,
} from '../../../shared/constants/ActionTypes';

const deleteArticleReducer = (state, { type, article }) => {
  switch (type) {
    case DELETE_ARTICLE_SUCESSFUL:
      return {
        ...state,
        articles: state.articles.filter(foundArticle => foundArticle.slug !== article.slug),
      };
    case DELETE_ARTICLE_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default deleteArticleReducer;
