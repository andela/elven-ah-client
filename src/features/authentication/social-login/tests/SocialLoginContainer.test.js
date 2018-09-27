import React from 'react';
import { shallow } from 'enzyme';
import { SocialLoginContainer } from '../SocialLoginContainer';
import NavBar from '../../../../shared/layouts/Navbar';

const match = {
  params: {
    socialLogin: 'facebook',
  },
};
const history = {
  location: {
    search: '?code=n8ijicjenuo3-2jookokomo.cl5oi9u4i',
  },
  push: jest.fn(),
};
const social = jest.fn(() => true);

describe('Social login container', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<SocialLoginContainer
      history={history}
      match={match}
      social={social}
    />);
    expect(wrapper.find(NavBar)).toHaveLength(1);
  });
});
