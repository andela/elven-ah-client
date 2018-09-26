import React from 'react';
import { shallow } from 'enzyme';

import Request from '../Request';

const mockFunction = jest.fn();
const errors = {
  email: ['The password field is required'],
};
const values = {
  email: '',
  confirmPassword: '',
  password: '',
};
describe('Test the Request password reset presentation component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Request
      handleChange={mockFunction}
      handleRequest={mockFunction}
      resetLinkError="resetLinkError"
      errors={errors}
      values={values}
    />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors', () => {
    const wrapper = shallow(<Request
      handleChange={mockFunction}
      handleRequest={mockFunction}
      errors={errors}
      resetLinkError="resetLinkError"
      values={values}
    />);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
