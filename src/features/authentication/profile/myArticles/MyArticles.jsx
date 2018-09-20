
import React from 'react';
import { PropTypes } from 'prop-types';
import StarRatings from '../../../../common/StarRatings';

const MyStories = ({
  firstName, lastName, article, image, rating,
}) => (
  <React.Fragment>
    <div className="cards">
      <div className="card">
        <img className="card-img-top" src="photo.jpg" alt="" />
        <div className="row">
          <div className="card-name col-md-12">
            <img src={image || 'https://res.cloudinary.com/authorshaven/image/upload/v1537220880/garqpt79lrm3dpyfvob9.jpg'} className="rounded-circle profile-photo border border-info" alt="profile" />
            <font className="profile-name">{firstName}</font>
            <font className="profile-name">{lastName}</font>
              (
            {new Date(article.createdAt).toLocaleString('en-GB', { hour12: true })}
              )
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {article.title}
          </h5>
          <p className="card-text">
            {article.body.substring(1, 200)}
              ...
          </p>
        </div>
        <div className="row card-activity">
          <div className="rating col-5 col-sm-5 col-md-5">
            <p>
              <font className="rating-total">
                {typeof article.ratings === 'undefined' || article.ratings.length === 0 ? '' : article.ratings.length}
              </font>
            </p>
            <StarRatings
              rating={rating}
              numberOfStars={5}
              name="artcile"
              starHoverColor="yellow"
              starDimension="15px"
              starSpacing="0px"
              starRatedColor="#26519A"
              className="rating-stars"
            />
          </div>
          <div className="comments col-5 col-sm-5 col-md-5">
            <p className="float-right">
              {typeof article.comments === 'undefined' || article.comments.length === 0 ? '' : article.comments.length}
              <i className="far fa-comment" />
            </p>
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
