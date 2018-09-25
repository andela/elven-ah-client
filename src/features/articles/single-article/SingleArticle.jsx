import React from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable react/no-array-index-key */
const SingleArticle = ({ article, errors }) => (
  <div className="container-fluid col-xl-6 col-lg-10 col-md-10 col-sm-6 col-xs-7">
    <div className="invalid-feedback">{errors.message}</div>
    <div className="container">
      <strong>Title</strong>{article.title}
    </div>
  </div>
);

SingleArticle.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  article: PropTypes.shape({}).isRequired,
};

export default SingleArticle;
