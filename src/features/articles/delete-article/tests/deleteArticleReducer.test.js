import deleteArticleReducer from '../deleteArticleReducer';
import {
  DELETE_ARTICLE_SUCESSFUL,
  UPDATE_ARTICLE_SUCESSFUL, DELETE_ARTICLE_FAILED,
} from '../../../../shared/constants/ActionTypes';

const state = {
  articles: [{ slug: 'article1' }, { slug: 'article2' }, { slug: 'article3' }],
  currentArticle: {},
  errors: undefined,
};
const article = { slug: 'article2' };

describe('Delete article reducer', () => {
  it('should handle aritcle deletion success', () => {
    expect(deleteArticleReducer(state, { type: DELETE_ARTICLE_SUCESSFUL, article }))
      .toEqual({
        ...state,
        articles: [{ slug: 'article1' }, { slug: 'article3' }],
      });
  });

  it('should handle aritcle deletion failure', () => {
    expect(deleteArticleReducer(state, { type: DELETE_ARTICLE_FAILED }))
      .toEqual({ ...state });
  });

  it('should return the state', () => {
    expect(deleteArticleReducer(state, { type: UPDATE_ARTICLE_SUCESSFUL }))
      .toEqual({
        ...state,
      });
  });
});
