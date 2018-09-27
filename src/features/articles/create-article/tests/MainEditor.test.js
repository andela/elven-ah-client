import React from 'react';
import { shallow } from 'enzyme';
import { Editor } from '@tinymce/tinymce-react';
import MainEditor from '../MainEditor';

const mockFunction = () => jest.fn();

describe('Main Editor component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<MainEditor
      value="<p>My new article</p>"
      handleChange={mockFunction}
      imageUploadHandler={mockFunction}
      handleBodyPlaceholderTextFocusIn={mockFunction}
      handleBodyPlaceholderTextFocusOut={mockFunction}
    />);
    expect(wrapper.find(Editor)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
