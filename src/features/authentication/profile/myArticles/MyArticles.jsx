
import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Ratings from '../../../articles/rating/RatingContainer';
import HTMLUtil from '../../../../shared/utilities/HTMLUtil';

const MyArticles = ({
  firstName, lastName, article, image,
}) => (
  <React.Fragment>
    <div className="card-container col-12 col-sm-12 col-md-4">
      <div className="card article-card col-12 col-md-12">
        {article.imageUrl ? (
          <img
            className="article-image card-img-top"
            src={article.imageUrl}
            alt=""
          />
        ) : false}
        <div className="card-body">
          <Link
            className="column profile-article-title"
            to={`/articles/${article.slug}`}
          >
            <h5 className="card-title">
              <b>{article.title}</b>
            </h5>
          </Link>
          <div className="card-name col-md-12">
            <img src={image} className="rounded-circle profile-photo-content border border-info" alt="profile" />
            <font className="profile-name"><b>{firstName}</b></font>
            <font className="profile-name"><b>{lastName} </b></font>
              (
            {moment(article.createdAt).fromNow()}
              )
          </div>
          <div className="column card-text profile-text justify-content-center">
            {HTMLUtil.stripMarkup(article.body).substring(0, 200)}
              ...
          </div>
          <div className="column columns">
            <div className="column">
              <Ratings article={article} />
            </div>
            <div className="column ">
              <p className="comment-icon">
                {typeof article.comments === 'undefined' || article.comments.length === 0 ? '' : article.comments.length}
                {' '}
                <Link to={`/articles/${article.slug}`}><i className="far fa-comment" /></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
MyArticles.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  article: PropTypes.shape([]).isRequired,
  image: PropTypes.string,
};
MyArticles.defaultProps = {
  image: '',
};

export default MyArticles;
