import React, { Component } from 'react';
import '../assets/css/authForm.css';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
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
    const { email, username, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }
    this.props.submit(user);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    return (
      <div className="container-fluid col-xl-6 col-lg-10 col-md-10 col-sm-6 col-xs-7">
        <form className="form-signup" onSubmit={this.handleSubmit}>
          <div className="text-center mb-4">
            <em>Create an account to have access to<br/>a whole world of exciting stories<br/>specially curated for you.</em>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              name="firstName"
              className="form-control formInput"
              placeholder="First name"
              onChange={this.handleChange}
              required
              autoFocus
            />
            <span className="invalid-feedback"></span>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              name="lastName"
              className="form-control formInput"
              placeholder="Last name"
              onChange={this.handleChange}
              required
            />
            <span className="invalid-feedback"></span>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="email"
              id="email"
              value={this.state.email}
              name="email"
              className="form-control formInput"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
            <span className="invalid-feedback"></span>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="text"
              id="username"
              value={this.state.username}
              name="username"
              className="form-control formInput"
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
            <span className="invalid-feedback"></span>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="password"
              id="password"
              value={this.state.password}
              name="password"
              className="form-control formInput"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
            <span className="invalid-feedback"></span>
          </div>
          <div className="form-label-group mb-3">
            <input
              type="password"
              id="confirmPassword"
              value={this.state.confirmPassword}
              name="confirmPassword"
              className="form-control formInput"
              placeholder="Confirm Password"
              onChange={this.handleChange}
              required
            />
            <span className="invalid-feedback"></span>
          </div>
          <button className="btn btn-lg col-md-5 mx-auto btn-block authSubmitBtn" type="submit">Sign up</button>
        </form>
        <br/>
        <div className="text-center mb-4">
          <p>Already have an account? <a href="#" className="loginText"> Log in </a> </p>
        </div>
      </div>
    );
  }
};

export default SignupForm;
