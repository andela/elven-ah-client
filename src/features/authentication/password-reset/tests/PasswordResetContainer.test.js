import React from 'react';
import { shallow } from 'enzyme';

import Request from '../Request';
import { ResetContainer } from '../PasswordResetContainer';
import ProcessReset from '../ProcessReset';
import Reset from '../Reset';

const mockFunction = jest.fn();
const history = {
  push: mockFunction,
};
const location = {
  search: mockFunction,
};

describe('Test the password reset container component', () => {
  it('should render the request password component without errors', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find(Request)).toHaveLength(1);
  });
  it('should render the processing password reset component without errors', () => {
    const requestLocation = {
      search: '?tokenId=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    };
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={requestLocation}
    />);
    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find(ProcessReset)).toHaveLength(1);
  });
  it('should render the reset password component without errors', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
      resetToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    />);
    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find(Reset)).toHaveLength(1);
  });
});

describe('directly invoking the handleChange method from component instance', () => {
  it('should update the email when invoked by with a value for email', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    const instance = wrapper.instance();
    expect(wrapper.state('email')).toBe('');
    const event = {
      target: {
        id: 'email',
        value: 'test@test.com',
      },
    };
    instance.handleChange(event);
    expect(wrapper.state('email')).toBe('test@test.com');
  });
  it('should update the password when invoked by with a value for password', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    const instance = wrapper.instance();
    expect(wrapper.state('password')).toBe('');
    const event = {
      target: {
        id: 'password',
        value: 'passWord4',
      },
    };
    instance.handleChange(event);
    expect(wrapper.state('password')).toBe('passWord4');
  });
  it('should update the confirmPassword when invoked by with a value for confirmPassword', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    const instance = wrapper.instance();
    expect(wrapper.state('confirmPassword')).toBe('');
    const event = {
      target: {
        id: 'confirmPassword',
        value: 'passWord4',
      },
    };
    instance.handleChange(event);
    expect(wrapper.state('confirmPassword')).toBe('passWord4');
  });
});

describe('directly invoking the handleRequest method from component instance', () => {
  it('should reset the email', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    const instance = wrapper.instance();
    expect(wrapper.state('email')).toBe('');
    const event = {
      preventDefault: mockFunction,
    };
    instance.handleRequest(event);
    expect(wrapper.state('email')).toBe('');
  });
});

describe('directly invoking the handleReset method from component instance', () => {
  it('should reset the email', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    const instance = wrapper.instance();
    expect(wrapper.state('password')).toBe('');
    expect(wrapper.state('confirmPassword')).toBe('');
    const event = {
      preventDefault: mockFunction,
    };
    instance.handleReset(event);
    expect(wrapper.state('password')).toBe('');
    expect(wrapper.state('confirmPassword')).toBe('');
  });
});

describe('directly invoking the componentDidMount method from component instance', () => {
  it('should call the verify function', () => {
    const wrapper = shallow(<ResetContainer
      request={mockFunction}
      verify={mockFunction}
      reset={mockFunction}
      clearValidation={mockFunction}
      history={history}
      loading={false}
      location={location}
    />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, 'verify');
    instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
