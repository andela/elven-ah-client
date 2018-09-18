import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'short-id';
import MyArticles from './MyArticles';

export default class MyArticlesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ratingAverage = (ratings) => {
    if (!ratings || ratings.length === 0) {
      return 0;
    }
    let sum = 0;
    ratings.map((rating) => {
      sum += rating.value;
      return sum;
    });
    return Math.floor(sum / ratings.length);
  }

  render() {
    const { user } = this.props;
    const {
      firstName, lastName, image, articles,
    } = user;
    return (
      <React.Fragment>
        {
          articles
            ? articles.map(article => (
              <MyArticles
                key={shortId.generate()}
                firstName={firstName}
                lastName={lastName}
                article={article}
                rating={this.ratingAverage(article.ratings)}
                image={image}
              />
            )) : ''
        }
      </React.Fragment>
    );
  }
}

MyArticlesContainer.propTypes = {
  user: PropTypes.shape({}).isRequired,
};
