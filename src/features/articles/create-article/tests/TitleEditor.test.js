import React from 'react';
import { shallow } from 'enzyme';
import { Editor } from '@tinymce/tinymce-react';
import TitleEditor from '../TitleEditor';

const mockFunction = () => jest.fn();

describe('Title Editor component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<TitleEditor
      handleChange={mockFunction}
      handlePaste={mockFunction}
      value="<h1>This is my Title</p>"
    />);
    expect(wrapper.find(Editor)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
