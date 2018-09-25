import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import categoryOptions from './categoryOptions';

const ArticleCategory = ({ category, handleChange }) => (
  <Select
    value={category}
    onChange={handleChange}
    options={categoryOptions}
    placeholder="Select a category"
  />
);

ArticleCategory.propTypes = {
  category: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ArticleCategory;
