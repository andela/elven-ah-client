import React from 'react';
import { shallow } from 'enzyme';
import { VerifyAccountContainer } from '../VerifyAccountContainer';
import VerifyAccount from '../VerifyAccount';

const mockFunction = jest.fn();
const history = {
  location: {
    search: '?evc=okeygbhuih.njhiuonrj',
  },
  push: mockFunction,
};
const type = '';
const verify = jest.fn(() => ({ status: 400, data: { message: 'Invalid email format ' } }));

describe('Account Verification container', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<VerifyAccountContainer
      verify={verify}
      resendLink={mockFunction}
      history={history}
      type={type}
      errors={{ email: ['Invalid email format'] }}
    />);
    expect(wrapper.find(VerifyAccount)).toHaveLength(1);
  });
});
