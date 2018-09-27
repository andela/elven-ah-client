import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'short-id';
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
    const i = 0;
    return Math.floor(ratings.reduce((prev, curr) => prev + curr.value, i) / ratings.length);
  }

  render() {
    const { articles } = this.props;
    const classArray = ['col-md-8', 'col-md-4', 'col-md-4', 'col-md-4', 'col-md-4', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-6', 'col-md-6'];
    let classArrayIndex;
    return (
      <React.Fragment>
        {
          articles
            ? articles.map((article) => {
              classArrayIndex += 1;
              if (classArrayIndex === undefined
                || classArrayIndex > classArray.length - 1
                || Number.isNaN(classArrayIndex)) {
                classArrayIndex = 0;
              }
              return (
                <AllArticles
                  key={shortId.generate()}
                  article={article}
                  rating={this.ratingAverage(article.ratings)}
                  bootstrapGrid={classArray[classArrayIndex]}
                />
              );
            })
            : false
        }
      </React.Fragment>
    );
  }
}

AllArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
