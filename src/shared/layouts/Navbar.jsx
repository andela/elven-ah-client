import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const NavBar = () => (
  <header className="blog-header py-3">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-brand abs">
        <img src={logo} className="brand-logo" alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <form className="form-inline my-2 my-md-0">
              <input className="form-control search-box" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <Link to="/" className="nav-link text-muted text-spaces">
              <button type="button" className="btn upgrade-button">Upgrade</button>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="notification" className="nav-link text-muted text-spaces">
              <i className="far fa-lg fa-bell notification-false" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-muted text-spaces">
              <img src={logo} className="rounded-circle profile-photo border border-info" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
