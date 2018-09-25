import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchArticle } from './singleArticleAction';
import SingleArticle from './SingleArticle';

/**
 * @class Handles Password Reset
 * @requires react
 * @requires react-redux
 * @requires prop-types
 * @requires query-string
 * @requires Reset
 * @requires ProcessReset
 * @requires Request
 */
export class SingleArticleContainer extends Component {
  /**
   * @description Fetches the article with the given slug from the API
   * @returns {null}
   */
  async componentDidMount() {
    const { match, articleFetch, article } = this.props;
    const { slug } = match.params;
    if (!article || article.slug !== slug) await articleFetch(slug);
  }

  render() {
    const { article, errors } = this.props;
    return (
      <div className="justify-content-center align-items-center">
        <div className="row mx-4 mt-5 mb-8 justify-content-center align-items-center">
          <SingleArticle
            errors={errors}
            article={article}
          />
        </div>
      </div>
    );
  }
}


SingleArticleContainer.propTypes = {
  articleFetch: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  article: PropTypes.shape({}),
};

SingleArticleContainer.defaultProps = {
  errors: {},
  article: {},
};

const mapDispatchToProps = dispatch => ({
  articleFetch: slug => dispatch(fetchArticle(slug)),
});

const mapStateToProps = state => ({
  errors: state.articles.errors,
  article: state.articles.currentArticle,
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer);
