import {
  ALL_ARTICLES_FETCH_SUCCESSFUL, ALL_ARTICLES_FETCH_FAILED,
} from '../../../shared/constants/ActionTypes';

const allArticlesReducer = (state, action) => {
  switch (action.type) {
    case ALL_ARTICLES_FETCH_SUCCESSFUL:
      return {
        ...state,
        articles: action.articles,
      };
    case ALL_ARTICLES_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default allArticlesReducer;
