import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
  <React.Fragment>
    {/* navbar/categories bar */}
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <Link className="p-2 text-muted" to="/categories/politics">Politics</Link>
        <Link className="p-2 text-muted" to="/categories/design">Design</Link>
        <Link className="p-2 text-muted" to="/categories/africa">Africa</Link>
        <Link className="p-2 text-muted" to="/categories/tech">Technology</Link>
        <Link className="p-2 text-muted" to="/categories/culture">Culture</Link>
        <Link className="p-2 text-muted" to="/categories/business">Business</Link>
        <Link className="p-2 text-muted" to="/categories/romance">Romance</Link>
        <Link className="p-2 text-muted" to="/categories/health">Health</Link>
        <Link className="p-2 text-muted" to="/categories/style">Style</Link>
        <Link className="p-2 text-muted" to="/categories/travel">Travel</Link>
        <Link className="p-2 text-muted" to="/categories/diy">DIY</Link>
        <Link className="p-2 text-muted" to="/categories/opinion">Opinion</Link>
      </nav>
    </div>
  </React.Fragment>
);

export default Categories;
