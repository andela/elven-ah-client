import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'short-id';
import { Link } from 'react-router-dom';
import AllArticles from './AllArticles';

export default class AllArticlesContainer extends React.Component {
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
    const { articles } = this.props;
    return (
      <React.Fragment>
        {
          articles
            ? articles.map(article => (
              <Link className="card-link" to={`/articles/${article.slug}`}>
                <AllArticles
                  key={shortId.generate()}
                  article={article}
                  rating={this.ratingAverage(article.ratings)}
                />
              </Link>
            )) : ''
        }
      </React.Fragment>
    );
  }
}

AllArticlesContainer.propTypes = {
  articles: PropTypes.shape([]).isRequired,
};
