import React, { Component } from 'react';

export default class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
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
    const { email } = this.state;
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
        <button
          className="btn btn-lg col-xl-8 col-lg-6 col-md-8 col-sm-9 mx-auto btn-block authSubmitBtn"
          type="submit">
            {this.props.buttonText}
        </button>
      </form>
    );
  }
}
