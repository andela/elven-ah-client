import React from 'react';
import { shallow } from 'enzyme';
import CreatableSelect from 'react-select/lib/Creatable';
import ArticleTag from '../ArticleTag';

const tags = [
  { value: 'jest', label: 'jest' },
  { value: 'react', label: 'react' },
  { value: 'enzyme', label: 'enzyme' },
];

describe('Article Tag component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ArticleTag
      tags={tags}
      handleChange={() => jest.fn()}
    />);
    expect(wrapper.find(CreatableSelect)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
