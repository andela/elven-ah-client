import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const stripMarkup = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || '';
};
const getImage = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  const imgSrc = div.querySelectorAll('img');
  if (imgSrc === undefined) return false;
  if (imgSrc[0] === undefined) return false;
  return imgSrc[0].src;
};
const ArticleCard = ({
  gridSpan, articleUrl, title, author, timeToRead, snippet, rating,
}) => (
  <div className={gridSpan}>
    <Link className="card-link" to={articleUrl}>
      <div className="card single-article-card flex-md-col mb-4 box-shadow h-md-250">
        <div style={{
          width: '100%', height: '15em', maxHeight: '55% !important', background: `#f1f1f1 url(${getImage(snippet)}) no-repeat center center`, backgroundSize: '100%',
        }}
        />
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            {title}
          </h3>
          <div className="mb-1 text-muted">{author} <small>&nbsp;&nbsp;&nbsp;{timeToRead}</small></div>
          <p className="card-text mb-auto">{gridSpan === ('col-md-8' || 'col-md-6') ? `${stripMarkup(snippet).substring(0, 200)} ... ` : gridSpan === 'col-md-3' ? `${stripMarkup(snippet).substring(0, 50)} ... ` : `${stripMarkup(snippet).substring(0, 70)} ... `}</p>
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
  snippet: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ArticleCard;
