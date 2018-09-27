import React from 'react';
import { shallow } from 'enzyme';

import { UpdateArticleContainer } from '../UpdateArticleContainer';
import NavBar from '../../../../shared/layouts/Navbar';
import TitleEditor from '../../create-article/TitleEditor';
import MainEditor from '../../create-article/MainEditor';
import ArticleCategory from '../../create-article/ArticleCategory';

const history = {
  push: route => jest.fn(route),
};
const match = {
  params: {
    slug: 'my-article-slug-mu8uji4u8u39',
  },
};
const article = {
  id: 1,
  slug: 'my-article-n8upi3',
  title: 'My new article',
  userId: 1,
  body: '<p>My article body</p>',
  categoryId: 1,
};
const errors = { title: 'You have forgot to inlude a title' };
const auth = {
  user: { id: 1, firstName: 'Chima' },
};
const mockFunction = param => jest.fn(param);

describe('Update Article container', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<UpdateArticleContainer
      errors={errors}
      auth={auth}
      article={article}
      history={history}
      match={match}
      update={mockFunction}
      getArticle={mockFunction}
    />);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper.find(TitleEditor)).toHaveLength(1);
    expect(wrapper.find(MainEditor)).toHaveLength(1);
    expect(wrapper.find(ArticleCategory)).toHaveLength(1);
  });
});
