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
    wrapper.find('form').simulate('submit', { preventDefault: mockFunction });
  });
});
