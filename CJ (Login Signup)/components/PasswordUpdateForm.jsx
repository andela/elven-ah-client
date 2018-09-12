import React, { Component } from 'react';

export default class PasswordUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      confirmOldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { oldPassword, confirmOldPassword, newPassword, confirmNewPassword } = this.state;
    if (oldPassword !== confirmOldPassword) {
      alert('Confirm Old Password should match Old Password');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert('Confirm New Password should match New Password');
      return;
    }
    alert(this.props.successMessage(email));
    this.setState({
      email: ''
    })
  }

  render() {
    return (
      <form className="form-login" onSubmit={this.handleSubmit}>
        <div className="text-center mb-4">
          <em>{this.props.message}</em>
        </div>
        <div className="form-label-group mb-3">
          <input
            type="password"
            id="oldPassword"
            value={this.state.oldPassword}
            name="oldPassword"
            className="form-control formInput"
            placeholder="Old Password"
            onChange={this.handleChange}
            required
          />
          <span className="invalid-feedback"></span>
        </div>
        <div className="form-label-group mb-3">
          <input
            type="password"
            id="confirmOldPassword"
            value={this.state.confirmOldPassword}
            name="confirmOldPassword"
            className="form-control formInput"
            placeholder="Confirm Old Password"
            onChange={this.handleChange}
            required
          />
          <span className="invalid-feedback"></span>
        </div>
        <div className="form-label-group mb-3">
          <input
            type="password"
            id="newPassword"
            value={this.state.newPassword}
            name="newPassword"
            className="form-control formInput"
            placeholder="New Password"
            onChange={this.handleChange}
            required
          />
          <span className="invalid-feedback"></span>
        </div>
        <div className="form-label-group mb-3">
          <input
            type="password"
            id="confirmNewPassword"
            value={this.state.confirmNewPassword}
            name="confirmNewPassword"
            className="form-control formInput"
            placeholder="Confirm New Password"
            onChange={this.handleChange}
            required
          />
          <span className="invalid-feedback"></span>
        </div>
        <button
          className="btn btn-lg col-xl-8 col-lg-6 col-md-8 col-sm-9 mx-auto btn-block authSubmitBtn"
          type="submit">
            {this.props.buttonText}
        </button>
      </form>
    );
  }
}
