import React from 'react';
import { shallow } from 'enzyme';

import Reset from '../Reset';

const mockFunction = jest.fn();
const errors = {
  password: ['The password field is required'],
  confirmPassword: ['The password field is required'],
};
const values = {
  email: '',
  confirmPassword: '',
  password: '',
};

describe('Test the Reset password presentation component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Reset
      handleChange={mockFunction}
      handleReset={mockFunction}
      errors={errors}
      values={values}
    />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors', () => {
    const wrapper = shallow(<Reset
      handleChange={mockFunction}
      handleReset={mockFunction}
      errors={errors}
      values={values}
    />);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('span.invalid-feedback')).toHaveLength(3);
  });
});
