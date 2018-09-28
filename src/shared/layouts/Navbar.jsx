import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
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
        <div className="bg-light">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand header-brand-text text-dark">
                <img
                  src="https://res.cloudinary.com/cj-odina/image/upload/v1537734888/Logo_sywa2j.png"
                  className="brand-logo"
                  alt=""
                />
                Authors{"'"} Haven
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  {isLoggedIn
                    ? (
                      <React.Fragment>
                        <li className="nav-item">
                          <Link to="/upgrade" className="nav-link ml-auto">
                            <button type="button" className="btn btn-sm upgrade-button">
                              Upgrade
                            </button>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/notifications" className="nav-item nav-link">
                            <i className="nav-item nav-link fas fa-lg fa-bell" />
                            <span className="notification-value">2</span>
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link to="/" className="nav-item nav-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={user.image} className="rounded-circle profile-photo border border-info" alt="" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link to="/articles/publish" className="dropdown-item">
                              New Story
                            </Link>
                            <Link to={`/users/${user.username}`} onClick={this.fetchUserProfile} className="dropdown-item">
                              Profile
                            </Link>
                            <button type="button" onClick={logout} className="dropdown-item">
                              Logout
                            </button>
                          </div>
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
            <Categories />
          </div>
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
