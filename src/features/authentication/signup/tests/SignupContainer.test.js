import React from 'react';
import { mount } from 'enzyme';
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
    const wrapper = mount(<SignupContainer
      signup={mockFunction}
      history={history}
      errors={errors}
    />);
    expect(wrapper.find(Signup)).toHaveLength(1);
    wrapper.find('[id="email"]').simulate('change', {
      target: { value: 'user@test.com' },
    });
    wrapper.find('[id="firstName"]').simulate('change', {
      target: { value: 'John' },
    });
    wrapper.find('[id="lastName"]').simulate('change', {
      target: { value: 'Doe' },
    });
    wrapper.find('[id="username"]').simulate('change', {
      target: { value: 'testUser' },
    });
    wrapper.find('[id="password"]').simulate('change', {
      target: { value: 'Password123' },
    });
    wrapper.find('[id="confirmPassword"]').simulate('change', {
      target: { value: 'Password123' },
    });
    wrapper.find('form').simulate('submit');
  });
});
