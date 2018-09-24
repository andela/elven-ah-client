import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavBar from '../../../shared/layouts/Navbar';
import ViewProfile from './viewProfile/ViewProfile';
import EditProfile from './editProfile/EditProfileContainer';
import MyArticles from './myArticles/MyArticlesContainer';
import { getUserProfile, editUserImage, editUserProfile } from './profileAction';
import history from '../../../shared/utilities/history';

export class Profile extends React.PureComponent {
  componentWillMount = async () => {
    const { auth } = this.props;
    const authToken = auth.user.token;
    if (!authToken) {
      history.push('/login');
      return null;
    }
    const { getUserProfile: getUserProfileAlias } = await this.props;
    return getUserProfileAlias();
  }

  render() {
    const {
      editUserImage: editUserImageAlias,
      editUserProfile: editUserProfileAlias,
      auth,
    } = this.props;
    return (
      <div className="container">
        <NavBar />
        {auth.user.followings
          ? (
            <div className="row profile" id="profile">
              <div className="col-12 col-sm-12 col-md-12">
                <ViewProfile
                  {...auth.user}
                  isUser
                  followingLength={auth.user.followings.length}
                  followerLength={auth.user.followers.length}
                />
                <div className="profile-content">
                  <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="tab-color nav-link active"
                        id="pills-article-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        My Stories
                      </a>
                    </li>
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

                        <MyArticles user={auth.user} />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <EditProfile
                        editUserImage={editUserImageAlias}
                        editUserProfile={editUserProfileAlias}
                        profile={auth.user}
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : false}
      </div>
    );
  }
}

Profile.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  editUserImage: PropTypes.func.isRequired,
  editUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getUserProfile, editUserProfile, editUserImage,
})(Profile);
