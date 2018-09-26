/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewProfile = ({
  profile,
}) => (
  <React.Fragment>
    <div className="row profile" id="profile">
      <div className="col-12 col-sm-12 col-md-8">
        <div className="profile-block">
          <img
            className="profile-image-block rounded-circle border border-info author-image"
            src={profile.image || 'https://res.cloudinary.com/authorshaven/image/upload/v1537220880/garqpt79lrm3dpyfvob9.jpg'}
            alt="author"
          />
          <div className="profile-detail-block">
            <div className="profile-columns">
              <span className="profile_column"><strong>{profile.firstName}  {profile.lastName}</strong></span>
              {<button className="profile-column btn btn-sm btn-outline-primary" type="button">follow</button>}
            </div>
            <div className="">
              {profile.bio}
            </div>
            <div className="columns text-muted">
              <div className="following-metrics">
                <Link to="d">
                  {profile.followings ? profile.followings.length : 0}
                  {' '}
                    Following
                </Link>
                <Link to="d">
                  {profile.followers ? profile.followers.length : 0}
                  {' '}
                    Followers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);


ViewProfile.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  loggedInUser: PropTypes.shape({}).isRequired,
};

export default ViewProfile;
