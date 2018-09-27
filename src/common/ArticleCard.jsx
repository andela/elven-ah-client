import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import HTMLUtil from '../shared/utilities/HTMLUtil';

/**
 * Display varying length of the article body as snippet on the article card
 * based on the size of the card
 * @param {String} gridSpan - the grid class of the article card
 * @param {*} body - the body of the article
 */
const displayArticleSnippet = (gridSpan, body) => {
  if (gridSpan === 'col-md-8' || gridSpan === 'col-md-6') {
    return HTMLUtil.stripMarkup(body).substring(0, 200);
  }
  if (gridSpan === 'col-md-3') {
    return HTMLUtil.stripMarkup(body).substring(0, 50);
  }
  return HTMLUtil.stripMarkup(body).substring(0, 70);
};
const ArticleCard = ({
  gridSpan, articleUrl, title, author, timeToRead, body, rating,
}) => (
  <div className={gridSpan}>
    <Link className="card-link" to={articleUrl}>
      <div className="card single-article-card flex-md-col mb-4 box-shadow h-md-250">
        <div style={{
          width: '100%', height: '15em', maxHeight: '55% !important', background: `#fff url(${HTMLUtil.getImage(body)}) no-repeat center center`, backgroundSize: '100%',
        }}
        />
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            {title}
          </h3>
          <div className="mb-1 text-muted">{author} <small>&nbsp;&nbsp;&nbsp;{timeToRead}</small></div>
          <p className="card-text mb-auto">{displayArticleSnippet(gridSpan, body)}</p>
          <p className="card-text mb-auto">{`${rating} stars`}</p>
        </div>
      </div>
    </Link>
  </div>
);

ArticleCard.propTypes = {
  gridSpan: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ArticleCard;
