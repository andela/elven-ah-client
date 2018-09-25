import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from '../../../common/StarRatings';

const AllArticles = ({ article, rating }) => (
  <React.Fragment>
    <div className="card-container articles">
      <div className="card cards col-lg-4">
        <img
          className="card-img-top"
          src="http://2.bp.blogspot.com/-D-zBI0KBqns/UbRG757mNzI/AAAAAAAAA3Y/dQGkALwgZyo/s1600/background1.jpg"
          alt=""
        />

        <div className="card-body">
          <h5 className="card-title">
            <b>{article.title}</b>
          </h5>
          <div className="card-name col-md-12">
            <img src={article.User.image || 'http://2.bp.blogspot.com/-D-zBI0KBqns/UbRG757mNzI/AAAAAAAAA3Y/dQGkALwgZyo/s1600/background1.jpg'} className="rounded-circle profile-photo border border-info" alt="profile" />
            {' '}
            <font className="profile-name"><b>{article.User.firstName}</b></font>
            {' '}
            <font className="profile-name"><b>{article.User.lastName}</b></font>
            {' '}
            (
            {new Date(article.createdAt).toLocaleString('en-GB', { hour12: true })}
            )
          </div>
          <p className="card-text justify-content-center"> {article.body} ...</p>
          <div className="row card-activity">
            <div className="rating col-5 col-sm-5 col-md-5">
              <p>
                <font className="rating-total">
                  {typeof article.ratings === 'undefined' || article.ratings.length === 0 ? '' : article.ratings.length}
                  {' '}
                </font>
              </p>
              <StarRatings
                rating={rating}
                numberOfStars={5}
                name="artcile"
                starHoverColor="blue"
                starDimension="15px"
                starSpacing="0px"
                starRatedColor="#26519A"
                className="rating-stars"
              />
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
AllArticles.propTypes = {
  article: PropTypes.shape([]).isRequired,
  rating: PropTypes.number.isRequired,
};

export default AllArticles;
