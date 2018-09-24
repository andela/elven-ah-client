
import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from '../../../../common/StarRatings';

const MyStories = ({
  firstName, lastName, article, image, rating,
}) => (
  <React.Fragment>
    <div className="card-container col-12 col-sm-12 col-md-4">
      <div className="card cards col-12 col-md-12">
        <img
          className="card-img-top"
          src="http://2.bp.blogspot.com/-D-zBI0KBqns/UbRG757mNzI/AAAAAAAAA3Y/dQGkALwgZyo/s1600/background1.jpg"
          alt=""
        />
        <div className="card-body">
          <Link className="profile-article-title" to={`/articles/${article.slug}`}>
            <h5 className="card-title">
              <b>{article.title}</b>
            </h5>
          </Link>
          <div className="card-name col-md-12">
            <img src={image} className="rounded-circle profile-photo-content border border-info" alt="profile" />
            <font className="profile-name"><b>{firstName}</b></font>
            <font className="profile-name"><b>{lastName} </b></font>
              (
            {new Date(article.createdAt).toLocaleString('en-GB', { hour12: true })}
              )
          </div>
          <p className="card-text justify-content-center">
            {article.body.substring(1, 200)}
              ...
          </p>
          <div className="row card-activity">
            <div className="rating col-5 col-sm-5 col-md-5">
              <p className="star-rating-position">
                <font className="rating-total">
                  {typeof article.ratings === 'undefined' || article.ratings.length === 0 ? '' : article.ratings.length}
                </font>
                <StarRatings
                  rating={rating}
                  numberOfStars={5}
                  name="artcile"
                  starDimension="15px"
                  starSpacing={0}
                  starRatedColor="#26519A"
                  className="star-ratings"
                  isSelectable="false"
                  starEmptyColor="grey"
                  starHoverColor="grey"
                />
              </p>
            </div>
            <div className="comments col-5 col-sm-5 col-md-5">
              <p className="float-right">
                {typeof article.comments === 'undefined' || article.comments.length === 0 ? '' : article.comments.length}
                {' '}
                <i className="far fa-comment" />
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
MyStories.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  article: PropTypes.shape([]).isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string,
};
MyStories.defaultProps = {
  image: '',
};

export default MyStories;
