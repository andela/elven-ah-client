import React, { Component } from 'react';
import '../assets/css/authForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: ''
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
    const { email, password } = this.state;
    alert(`Welcome, ${email}`);
    this.setState({
      email: '',
      username: ''
    })
  }

  render() {
    return (
      <div className="container-fluid col-xl-6 col-lg-10 col-md-10 col-sm-6 col-xs-7">
        <form className="form-login" onSubmit={this.handleSubmit}>
          <div className="text-center mb-4">
            <br/><br/>
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
              autoFocus
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
          <button className="btn btn-lg col-md-5 mx-auto btn-block authSubmitBtn" type="submit">Login</button>
        </form>
        <br/>
        <div className="text-center mb-4">
          <p>Don't have an account? <a href="#" className="loginText"> Create One </a> </p>
        </div>
      </div>
    );
  }
};

export default LoginForm;
