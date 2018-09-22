import React from 'react';
import { shallow } from 'enzyme';
import { SignupContainer } from '../SignupContainer';
import Signup from '../Signup';

const errors = {
  email: ['The email field is required'],
  firstName: ['The firstName field is required'],
  lastName: ['The lastName field is required'],
  username: ['The username field is required'],
  password: ['The password field is required'],
  confirmPassword: ['The confirmPassword field is required'],
};
const mockFunction = jest.fn();
const history = {
  push: mockFunction,
};

describe('Tests the signup container', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<SignupContainer
      signup={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      errors={errors}
    />);
    expect(wrapper.find(Signup)).toHaveLength(1);
  });
});
