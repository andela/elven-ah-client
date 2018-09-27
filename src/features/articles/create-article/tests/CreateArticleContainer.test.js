import React from 'react';
import { shallow } from 'enzyme';

import { CreateArticleContainer } from '../CreateArticleContainer';
import NavBar from '../../../../shared/layouts/Navbar';
import TitleEditor from '../TitleEditor';
import MainEditor from '../MainEditor';
import ArticleCategory from '../ArticleCategory';
import ArticleTag from '../ArticleTag';

const history = {
  push: route => jest.fn(route),
};
const errors = { title: 'You have forgot to inlude a title' };
const auth = {
  user: { id: 1, firstName: 'Chima' },
};
const mockFunction = param => jest.fn(param);

describe('Update Article container', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<CreateArticleContainer
      errors={errors}
      auth={auth}
      history={history}
      create={mockFunction}
    />);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper.find(TitleEditor)).toHaveLength(1);
    expect(wrapper.find(MainEditor)).toHaveLength(1);
    expect(wrapper.find(ArticleCategory)).toHaveLength(1);
    expect(wrapper.find(ArticleTag)).toHaveLength(1);
  });
});
