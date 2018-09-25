import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Search from './search/SearchContainer';
import { searchFilter } from './search/searchAction';

export class NavBar extends React.PureComponent {
  render() {
    const { search } = this.props;
    return (
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

                <Search search={search} />

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
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(searchFilter(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
