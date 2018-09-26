import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin';

describe('Social login component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<SocialLogin />);
    expect(wrapper.find(Link)).toHaveLength(3);
    expect(wrapper.find('img')).toHaveLength(3);
    expect(wrapper.find('div')).toHaveLength(5);
  });
});
