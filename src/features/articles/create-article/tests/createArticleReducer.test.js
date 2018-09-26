import createArticleReducer from '../createArticleReducer';
import {
  CREATE_ARTICLE_SUCESSFUL,
  CREATE_ARTICLE_FAILED, UPDATE_ARTICLE_SUCESSFUL,
} from '../../../../shared/constants/ActionTypes';

const state = {
  articles: [],
  currentArticle: {},
  errors: undefined,
};
const article = { id: 1, slug: 'my-article-n8upi3', title: 'My new article' };
const errors = { title: 'You have forgot to inlude a title' };

describe('Create article reducer', () => {
  it('should handle aritcle creation success', () => {
    expect(createArticleReducer(state, { type: CREATE_ARTICLE_SUCESSFUL, article }))
      .toEqual({
        ...state,
        currentArticle: article,
      });
  });

  it('should handle aritcle creation failure', () => {
    expect(createArticleReducer(state, { type: CREATE_ARTICLE_FAILED, errors }))
      .toEqual({
        ...state,
        errors,
      });
  });

  it('should return the state', () => {
    expect(createArticleReducer(state, { type: UPDATE_ARTICLE_SUCESSFUL, errors }))
      .toEqual({
        ...state,
      });
  });
});
