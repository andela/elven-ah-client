import React from 'react';
import { PropTypes } from 'prop-types';
import Navbar from '../shared/layouts/Navbar';


/**
 * Display varying length of the article body as snippet on the article card
 * based on the size of the card
 * @param {String} gridSpan - the grid class of the article card
 * @param {*} body - the body of the article
 */
const NotFound = ({ match }) => (
  <React.Fragment>
    <div className="single-article-nav">
      <Navbar match={match} />
    </div>
    <div className="not-found page-wrap d-flex flex-row align-items-center">
      <div className="not-found-block container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-5 text-center">
            <span className="display-1 d-block" role="img" aria-label="sad face">😥</span>
            <div className="mb-4 lead">The page you are looking for was not found.</div>
            <a href="/" className="btn btn-link">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

NotFound.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default NotFound;
