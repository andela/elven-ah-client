import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
  <React.Fragment>
    <div className="nav-scroller py-1 mb-3 category">
      <nav className="nav d-flex justify-content-between">
        <Link className="p-1 text-muted" to="/category">World</Link>
        <Link className="p-1 text-muted" to="/category">U.S.</Link>
        <Link className="p-1 text-muted" to="/category">Technology</Link>
        <Link className="p-1 text-muted" to="/category">Design</Link>
        <Link className="p-1 text-muted" to="/category">Culture</Link>
        <Link className="p-1 text-muted" to="/category">Business</Link>
        <Link className="p-1 text-muted" to="/category">Politics</Link>
        <Link className="p-1 text-muted" to="/category">Opinion</Link>
      </nav>
    </div>
  </React.Fragment>
);

export default Categories;
