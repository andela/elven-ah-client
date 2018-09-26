import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import logo from '../assets/img/AH_LOGO.svg';
import Categories from './Categories';
import { logoutUser } from '../../features/authentication/authAction';
import { getUserProfile } from '../../features/authentication/profile/profileAction';

class NavBar extends Component {
  fetchUserProfile = () => {
    const {
      user, match = {}, profile, getProfile,
    } = this.props;
    const authToken = user.token;
    if (!profile || profile.username !== match.params.username) {
      return getProfile({ username: match.params.username, token: authToken });
    }
    return null;
  }

  render() {
    const { isLoggedIn, user, logout } = this.props;
    return (
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
                  {isLoggedIn
                    ? (
                      <React.Fragment>
                        <li className="nav-item">
                          <Link to="/articles/create" className="nav-link text-muted text-spaces">
                            <button type="button" className="btn create-story-button">
                              Tell-Your-Story
                            </button>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/upgrade" className="nav-link text-muted text-spaces">
                            <button type="button" className="btn upgrade-button">
                              Upgrade
                            </button>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/notifications" className="nav-link text-muted text-spaces">
                            <div className="notification-bell-true">
                              <i className="fas fa-lg fa-bell" />
                            </div>
                            <div className="notification-value">2</div>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to={`/users/${user.username}`} onClick={this.fetchUserProfile} className="nav-link nav-bar-profile-image text-muted text-spaces">
                            <img src={user.image} className="rounded-circle profile-photo border border-info" alt="" />
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link text-muted text-spaces">
                            <button type="button" onClick={logout} className="btn logout-button">
                              Logout
                            </button>
                          </Link>
                        </li>
                      </React.Fragment>
                    )
                    : (
                      <React.Fragment>
                        <li className="nav-item">
                          <Link to="/login" className="nav-link text-muted text-spaces">
                            <button type="button" className="btn login-button">
                              Login
                            </button>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/signup" className="nav-link text-muted text-spaces">
                            <button type="button" className="btn login-button">
                              Signup
                            </button>
                          </Link>
                        </li>
                      </React.Fragment>
                    )
                  }
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
  }
}

NavBar.propTypes = {
  user: PropTypes.shape({}).isRequired,
  profile: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  getProfile: profile => dispatch(getUserProfile(profile)),
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isAuthenticated,
  user: state.auth.user,
  profile: state.auth.profile,
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
