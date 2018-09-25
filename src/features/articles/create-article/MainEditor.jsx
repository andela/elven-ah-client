import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

const MainEditor = ({ handleChange, value, imageUploadHandler }) => (
  <Editor
    apiKey="3eytfdm1nnstcd6m2hzat9gpfvgg0ik5im0he4tpolgyqne9"
    cloudChannel="dev"
    value={value}
    onEditorChange={handleChange}
    name="body-editor"
    init={{
      menubar: false,
      inline: true,
      theme: 'inlite',
      mobile: { theme: 'mobile' },
      content_css: 'https://res.cloudinary.com/cj-odina/raw/upload/v1537743242/content_gvugw1.css',
      plugins: [
        'autolink',
        'codesample',
        'link',
        'linkchecker',
        'lists',
        'mediaembed',
        'textcolor',
        'image',
      ],
      selection_toolbar: 'bold italic | h2 h3 | blockquote quicklink | alignleft aligncenter alignright alignfull',
      file_picker_types: 'image',
      images_reuse_filename: true,
      images_upload_handler: imageUploadHandler,
    }}
  />
);

MainEditor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  imageUploadHandler: PropTypes.func.isRequired,
};

export default MainEditor;
