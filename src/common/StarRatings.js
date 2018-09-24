import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const StarRating = ({
  rating, starRatedColor, changeRating,
  numberOfStars, name, starHoverColor,
  starDimension, starSpacing, starEmptyColor,
}) => (
  <React.Fragment>
    <StarRatings
      rating={rating}
      starRatedColor={starRatedColor}
      changeRating={changeRating}
      numberOfStars={numberOfStars}
      name={name}
      starHoverColor={starHoverColor}
      starDimension={starDimension}
      starSpacing={starSpacing}
      starEmptyColor={starEmptyColor}
    />
  </React.Fragment>
);

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  starRatedColor: PropTypes.string.isRequired,
  changeRating: PropTypes.func,
  numberOfStars: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starHoverColor: PropTypes.string.isRequired,
  starDimension: PropTypes.string.isRequired,
  starSpacing: PropTypes.string.isRequired,
  starEmptyColor: PropTypes.string.isRequired,
};

StarRating.defaultProps = {
  changeRating: () => true,
};

export default StarRating;
