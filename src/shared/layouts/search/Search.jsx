import React from 'react';

const Search = ({ value, onChange, onKeyPress }) => (
  <React.Fragment>
    <form className="form-inline my-2 my-md-0">
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} className="form-control search-box" placeholder="Search" aria-label="Search" />
    </form>
  </React.Fragment>
);

export default Search;
