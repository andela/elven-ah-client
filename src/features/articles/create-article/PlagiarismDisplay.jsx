import React from 'react';
import PropTypes from 'prop-types';

const PlagiarismDisplay = ({ scanResults }) => (
  <React.Fragment>
    <br /><br />
    <span className="invalid-feedback">The content of your article was dicovered below.</span>
    <br />
    <ul className="list-group">
      {scanResults.map(({ title, url, totalMatchedPercents }) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={`${title}${url}`}>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
          <span className="badge badge-primary badge-pill">{totalMatchedPercents}%</span>
        </li>
      ))}
    </ul>
    <br />
    <span className="invalid-feedback">Please ensure that you resolve them or attribute all relevant sources.</span>
  </React.Fragment>
);

PlagiarismDisplay.propTypes = {
  scanResults: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PlagiarismDisplay;
