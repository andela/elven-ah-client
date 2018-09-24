import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Categories from './Categories';

const NavBar = () => (
  <React.Fragment>
    <div className="container">
      <header className="blog-header py-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="nav-link text-muted text-spaces">
            <img src={logo} className="brand-logo" alt="" />
          </Link>
          <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-collapse collapse" id="navb">

            <ul className="navbar-nav mr-auto" />

            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control search-box" type="text" placeholder="Search" aria-label="Search" />
                </form>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-muted text-spaces">
                  <button type="button" className="btn upgrade-button">Upgrade</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-muted text-spaces">
                  <button type="button" className="btn create-story-button">
              Tell-Your-Story
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="notification" className="nav-link text-muted text-spaces">
                  <i className="fas fa-lg fa-bell notification-bell-true" />
                  <div className="notification-value">3</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link nav-bar-profile-image text-muted text-spaces">
                  <img src={logo} className="rounded-circle profile-photo border border-info" alt="" />
                </Link>
              </li>
            </ul>

          </div>
        </nav>
        <hr className="top-hr" />
        <Categories />
      </header>
      <hr className="below-hr" />

    </div>

  </React.Fragment>
);

export default NavBar;
