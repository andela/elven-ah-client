/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewProfile = ({
  image, firstName, lastName, followingLength, followerLength, bio, isUser,
}) => (
  <React.Fragment>
    <div className="row profile" id="profile">
      <div className="col-12 col-sm-12 col-md-2" />
      <div className="col-12 col-sm-12 col-md-8">
        <div className="row profile-info">
          <div className="col-12 col-sm-12 col-md-4 profile-info profile-info-details">
            <img
              src={image || 'https://res.cloudinary.com/authorshaven/image/upload/v1537220880/garqpt79lrm3dpyfvob9.jpg'}
              className="rounded-circle profile-photo-big border border-info"
              alt="profile"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-8">
            <h5 className="profile-name-container">
              <font className="profile-name">{firstName}</font>
              {lastName}
              {isUser ? '' : (
                <button type="button" className="btn follow-button">
              follow
                </button>
              ) }
              {isUser ? '' : (
                <button type="button" className="btn unfollow-button">
              follow
                </button>
              )}
            </h5>
            <div className="profile-story">
              {bio}
            </div>
            <div className="following-metrics">
              <Link to="/">
                {followingLength}
                  Following
              </Link>
              <Link to="/">
                {followerLength}
                  Followers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);


ViewProfile.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followerLength: PropTypes.number,
  followingLength: PropTypes.number,
  isUser: PropTypes.bool.isRequired,
};

export default ViewProfile;
