import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../Signup';

const mockFunction = jest.fn();
const bindValues = {
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: '',
};
const errors = {
  email: ['The email field is required'],
  firstName: ['The firstName field is required'],
  lastName: ['The lastName field is required'],
  username: ['The username field is required'],
  password: ['The password field is required'],
  confirmPassword: ['The confirmPassword field is required'],
};

describe('Tests the signup form component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Signup
      handleChange={mockFunction}
      handleSubmit={mockFunction}
      errors={errors}
      bindValues={bindValues}
    />);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(6);
  });
});
