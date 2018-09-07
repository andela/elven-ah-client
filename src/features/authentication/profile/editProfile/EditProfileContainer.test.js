import React from 'react';
import { shallow } from 'enzyme';
import EditProfileContainer from './EditProfileContainer';

const mockFunction = jest.fn(() => true);
const profile = {
  id: 1,
  lastName: 'User',
  firstName: 'Test',
  image: 'https://cloudinary/images/cups/cup2.jpg',
  username: 'fayo',
  email: 'user@test.com',
  bio: 'Test user is an imaginary',
};

describe('EditProfileContainer: ', () => {
  describe('Rendering: ', () => {
    it('renders', () => {
      const wrapper = shallow(<EditProfileContainer
        profile={profile}
        editUserProfile={mockFunction}
        editUserImage={mockFunction}
      />);
      expect(wrapper).toBeTruthy();
    });
  });
});
