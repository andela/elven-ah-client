import React from 'react';
import { shallow } from 'enzyme';
import VerifyAccount from '../VerifyAccount';

const mockFunction = jest.fn();
const errors = {
  email: ['Email format is invalid'],
};

describe('Verify Account component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<VerifyAccount
      handleResendLink={mockFunction}
      handleChange={mockFunction}
      handleSubmit={mockFunction}
      message="Account verification link"
      email="user@test.com"
      errors={errors}
      resend
    />);
    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('em')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
