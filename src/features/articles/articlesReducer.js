import singleArticleReducer from './single-article/singleArticleReducer';
import allArticlesReducer from './allArticles/allArticlesReducer';

const initialState = {
  currentArticle: {},
  errors: {},
};

const articlesReducer = (state = initialState, action) => {
  const { type, errors } = action;
  switch (true) {
    case type.startsWith('SINGLE_ARTICLE'):
      return singleArticleReducer(state, action);

    case type.startsWith('ALL_ARTICLE'):
      return allArticlesReducer(state, action);

    case type.startsWith('VALIDATION'):
      return {
        ...state,
        errors,
      };

    case type.startsWith('CLEAR'):
      return {
        ...state,
        errors: {
          ...state.errors,
          message: '',
          [action.errorField]: undefined,
        },
        resetLinkError: undefined,
      };
    case type.startsWith('@@router'):
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
};

export default articlesReducer;
