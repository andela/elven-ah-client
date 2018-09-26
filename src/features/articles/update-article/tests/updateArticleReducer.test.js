import updateArticleReducer from '../updateArticleReducer';
import {
  CREATE_ARTICLE_SUCESSFUL,
  UPDATE_ARTICLE_SUCESSFUL,
  UPDATE_ARTICLE_FAILED,
} from '../../../../shared/constants/ActionTypes';

const state = {
  articles: [],
  currentArticle: {},
  errors: undefined,
};
const article = { id: 1, slug: 'my-article-n8upi3', title: 'My new article' };
const errors = { title: 'You have forgot to inlude a title' };

describe('Update artile reducer', () => {
  it('should handle aritcle update success', () => {
    expect(updateArticleReducer(state, { type: UPDATE_ARTICLE_SUCESSFUL, article }))
      .toEqual({
        ...state,
        currentArticle: article,
      });
  });

  it('should handle aritcle update failure', () => {
    expect(updateArticleReducer(state, { type: UPDATE_ARTICLE_FAILED, errors }))
      .toEqual({
        ...state,
        errors,
      });
  });

  it('should return the state', () => {
    expect(updateArticleReducer(state, { type: CREATE_ARTICLE_SUCESSFUL, errors }))
      .toEqual({
        ...state,
      });
  });
});
