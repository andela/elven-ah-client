import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top mb-2">
    <div className="container">
      <Link to="/" className="navbar-brand js-scroll-trigger text-white">Authors Haven</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar-responsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link js-scroll-trigger text-white">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
