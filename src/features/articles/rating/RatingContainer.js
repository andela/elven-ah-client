import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import StarRatings from 'react-star-ratings';
import rateArticle from './ratingAction';
import history from '../../../shared/utilities/history';

class Ratings extends Component {
  changeRating = (rating) => {
    const {
      user,
      article,
      rate,
      selectable = false,
      isAuthenticated,
      location,
    } = this.props;
    if (selectable) {
      if (!isAuthenticated) {
        toastr.error('You must be logged to rate an article');
        return history.push('/login', { from: location.pathname });
      }
      return rate({ rating, article, token: user.token });
    }
    return null;
  }

  averageRating = (ratings) => {
    if (!ratings || ratings.length === 0) {
      return 0;
    }
    let sum = 0;
    ratings.map((rating) => {
      sum += rating.value;
      return sum;
    });
    return (sum / ratings.length);
  }

  render() {
    const { article } = this.props;
    const averageRating = this.averageRating(article.ratings);
    const numberOfRatings = article.ratings.length;
    return (
      <div className="rating-block">
        <div className="star-rating">
          <StarRatings
            rating={averageRating}
            starHoverColor="#26519A"
            isSelectable
            starRatedColor="#26519A"
            starDimension="20px"
            starSpacing="0px"
            isAggregateRating
            changeRating={this.changeRating}
            numOfStars={5}
          />
        </div>
        {numberOfRatings
          ? (
            <span className="rating-text">
              {averageRating.toFixed(1)}/5
              (<em>{numberOfRatings} rating{numberOfRatings > 1 ? 's' : false}</em>)
            </span>
          )
          : false}
      </div>
    );
  }
}

Ratings.propTypes = {
  article: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  selectable: PropTypes.bool,
  rate: PropTypes.func.isRequired,
};

Ratings.defaultProps = {
  selectable: false,
};

const mapStateToProps = state => ({
  errors: state.articles.errors,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  location: state.router.location,
});
const mapDispatchToProps = dispatch => ({
  rate: payload => dispatch(rateArticle(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
