import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import PropTypes from 'prop-types';

const ArticleTag = ({ handleChange, tags }) => (
  <CreatableSelect
    isClearable
    isMulti
    onChange={handleChange}
    placeholder="Tag your story"
    value={tags}
  />
);

ArticleTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ArticleTag;
