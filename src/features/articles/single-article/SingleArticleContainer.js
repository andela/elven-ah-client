import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchArticle } from './singleArticleAction';
import SingleArticle from './SingleArticle';
import NavBar from '../../../shared/layouts/Navbar';

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
   * @description Fetches the article with the given slug from the API when the
   * component mounts
   * @returns {null}
   */
  async componentDidMount() {
    const { match, articleFetch, article } = this.props;
    const { slug } = match.params;
    if (!article || article.slug !== slug) await articleFetch(slug);
  }

  render() {
    const {
      article,
      errors,
      match,
      user,
      loading,
    } = this.props;
    if (article.slug === match.params.slug) {
      return (
        <React.Fragment>
          <div className="single-article-nav">
          <NavBar match={match} />
            <div className="row mx-auto justify-content-center align-items-center">
              <SingleArticle
                errors={errors}
                article={article}
                user={user}
                />
            </div>
          </div>
        </React.Fragment>
      );
    }
    if (loading) return false;
    return (
      <div className="single-article-nav">
        <NavBar match={match} />
        <div className="row mx-auto mb-8 justify-content-center align-items-center">
          <div className="container-fluid">
            <div className="col-md-12 font-weight-bold text-danger text-center">
              <h1>NO ARTICLE WITH THE GIVEN URL</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


SingleArticleContainer.propTypes = {
  articleFetch: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  article: PropTypes.shape({}),
  user: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired,
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
  user: state.auth.user,
  loading: state.common.loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer);
