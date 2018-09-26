import React from 'react';
import { shallow } from 'enzyme';
import Select from 'react-select';
import ArticleCategory from '../ArticleCategory';

describe('Article Category component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ArticleCategory
      category={{ value: 1, label: 'Technology' }}
      handleChange={() => jest.fn()}
    />);
    expect(wrapper.find(Select)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
