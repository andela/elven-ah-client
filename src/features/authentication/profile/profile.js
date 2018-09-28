import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavBar from '../../../shared/layouts/Navbar';
import ViewProfile from './viewProfile/ViewProfile';
import EditProfile from './editProfile/EditProfileContainer';
import MyArticles from './myArticles/MyArticlesContainer';
import { getUserProfile, editUserImage, editUserProfile } from './profileAction';


export class Profile extends React.PureComponent {
  constructor(props) {
    const { auth } = props;
    super(props);
    this.state = {
      profile: auth.profile,
    };
  }

  componentDidMount = async () => {
    const { auth, match, getProfile } = this.props;
    const authToken = auth.user.token;
    const { profile } = this.state;
    if (!profile || profile.username !== match.params.username) {
      return getProfile({ username: match.params.username, token: authToken });
    }
    return null;
  }

  render() {
    const {
      editImage,
      editProfile,
      auth,
      match,
    } = this.props;
    const { profile, user: loggedInUser } = auth;
    return (
      <React.Fragment>
        <div className="single-article-nav">
          <NavBar match={match} />
        </div>
        <div className="container single-article-nav">
          {profile
            ? (
              <div className="row profile" id="profile">
                <div className="col-12 col-sm-12 col-md-12">
                  <ViewProfile
                    profile={profile}
                    loggedInUser={loggedInUser}
                  />
                  <div className="profile-content">
                    <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-article-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Latest Stories
                        </a>
                      </li>
                      {profile.username === loggedInUser.username
                        ? (
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-toggle="pill"
                              href="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Edit Profile
                            </a>
                          </li>
                        ) : false
                      }
                    </ul>
                    <div
                      className="tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="card-deck">

                          <MyArticles profile={profile} />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <EditProfile
                          editUserImage={editImage}
                          editUserProfile={editProfile}
                          profile={auth.user}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : false}
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  editImage: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = dispatch => ({
  getProfile: username => dispatch(getUserProfile(username)),
  editProfile: username => dispatch(editUserProfile(username)),
  editImage: username => dispatch(editUserImage(username)),
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
