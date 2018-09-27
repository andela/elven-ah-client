import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../../../common/ArticleCard';

const AllArticles = ({ article, rating, bootstrapGrid }) => (
  <ArticleCard
    title={article.title}
    author={`${article.author.firstName} ${article.author.lastName}`}
    timeToRead="10 minutes"
    snippet={article.body}
    articleUrl={`/articles/${article.slug}`}
    gridSpan={bootstrapGrid}
    rating={rating}
  />
);
AllArticles.propTypes = {
  article: PropTypes.shape({}).isRequired,
  rating: PropTypes.number.isRequired,
  bootstrapGrid: PropTypes.string.isRequired,
};

export default AllArticles;
