import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

const TitleEditor = ({ handleChange, handlePaste, value }) => (
  <Editor
    apiKey="3eytfdm1nnstcd6m2hzat9gpfvgg0ik5im0he4tpolgyqne9"
    value={value}
    onEditorChange={handleChange}
    onPaste={handlePaste}
    name="title-editor"
    tagName="h1"
    init={{
      menubar: false,
      inline: true,
      theme: 'inlite',
      content_css: 'css/content.css',
      insert_toolbar: '',
      selection_toolbar: '',
    }}
  />
);

TitleEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePaste: PropTypes.func.isRequired,
};

export default TitleEditor;
