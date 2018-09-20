/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import EditProfile from './EditProfile';

export default class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      bio: '',
      image: null,
      email: '',
      fileName: 'Select Profile Photo...',
      ...props.profile,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleImageUpload = (event) => {
    const file = event.target.files[0];
    this.setState({
      image: file,
      fileName: file.name,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { editUserProfile: editUserProfileAlias } = this.props;
    editUserProfileAlias(this.state);
  }

  handleImageSubmit = (event) => {
    event.preventDefault();
    const { editUserImage: editUserImageAlias } = this.props;
    editUserImageAlias(this.state);
  }

  render() {
    const {
      firstName, lastName, bio, fileName,
    } = this.state;
    return (
      <React.Fragment>
        <form className="form-text" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <span
              className="col-sm-2 col-form-span"
            >
              Firstname
            </span>
            <div className="col-sm-8">
              <EditProfile
                className="form-control profile-input"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <span
              className="col-sm-2 col-form-span"
            >
            Lastname
            </span>
            <div className="col-sm-8">
              <EditProfile
                className="form-control profile-input"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <span
              className="col-sm-2 col-form-span"
            >
                    Biography
            </span>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                rows="3"
                name="bio"
                value={bio}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                id="profileSubmit-btn"
                className="btn update-profile-button float-right"
                type="submit"
                value="Save"
              >
                <i className="fas fa-edit" />
                Update Profile
              </button>
            </div>
          </div>
        </form>
        <form className="form-text" onSubmit={this.handleImageSubmit} encType="multipart/form-data">
          <div className="custom-file col-md-10">
            <EditProfile
              className="custom-file-input float-right"
              id="validatedCustomFile"
              type="file"
              onChange={this.handleImageUpload}
            />
            <label
              className="custom-file-label"
              htmlFor="validatedCustomFile"
            >
              {fileName}
            </label>
          </div>
          <div className="form-group row">
            <div className="col-md-10">
              <button
                id="imgSubmit-btn"
                className="btn update-profile-button float-right"
                type="submit"
                value="Save"
              >
                <i className="fas fa-camera" />
                Update Profile Photo
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

EditProfileContainer.propTypes = {
  editUserProfile: PropTypes.func,
  editUserImage: PropTypes.func,
  profile: PropTypes.shape({}).isRequired,
};

EditProfileContainer.defaultProps = {
  editUserProfile: () => true,
  editUserImage: () => true,
};
