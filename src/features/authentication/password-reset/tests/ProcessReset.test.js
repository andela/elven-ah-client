import React from 'react';
import { shallow } from 'enzyme';

import ProcessReset from '../ProcessReset';
import Spinner from '../../../../shared/loaders/Spinner';

describe('Test the password reset verification component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ProcessReset />);
    expect(wrapper.find('div'));
    expect(wrapper.find(Spinner));
    expect(wrapper).toMatchSnapshot();
  });
});
