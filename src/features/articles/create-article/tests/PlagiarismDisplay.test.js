import React from 'react';
import { shallow } from 'enzyme';
import PlagiarismDisplay from '../PlagiarismDisplay';

const scanResults = [
  {
    title: 'Plagiarism Article',
    url: 'https://medium.com/test-user/plagiarised-article-mi9i4f',
    totalMatchedPercents: 34,
  },
  {
    title: 'Plagiarism Article',
    url: 'https://medium.com/test-user/plagiarised-article-mi9i4f',
    totalMatchedPercents: 34,
  },
  {
    title: 'Plagiarism Article',
    url: 'https://medium.com/test-user/plagiarised-article-mi9i4f',
    totalMatchedPercents: 34,
  },
];

describe('Plagiarism Display component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<PlagiarismDisplay scanResults={scanResults} />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });
});
