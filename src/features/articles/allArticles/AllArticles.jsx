import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../../../common/ArticleCard';
import readTime from '../../../shared/utilities/readingTime';
import HTMLUtil from '../../../shared/utilities/HTMLUtil';

const AllArticles = ({ article, rating, bootstrapGrid }) => (
  <ArticleCard
    title={article.title}
    author={`${article.author.firstName} ${article.author.lastName}`}
    timeToRead={readTime(HTMLUtil.stripMarkup(article.body))}
    body={article.body}
    articleUrl={`/articles/${article.slug}`}
    gridSpan={bootstrapGrid}
    rating={rating}
    article={article}
  />
);
AllArticles.propTypes = {
  article: PropTypes.shape({}).isRequired,
  rating: PropTypes.number.isRequired,
  bootstrapGrid: PropTypes.string.isRequired,
};

export default AllArticles;
