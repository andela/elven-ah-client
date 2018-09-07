import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Signup from './Signup';
import authAsync from '../authThunk';

class SignupContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, signup } = this.props;
    signup(this.state, history, 'signup');
    this.setState({
      password: '',
      confirmPassword: '',
    });
  }

  render() {
    return (
      <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}


const mapDispatchToProps = dispatch => ({
  signup: (user, history, route) => dispatch(authAsync(user, history, route)),
});

SignupContainer.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};
export default connect(null, mapDispatchToProps)(SignupContainer);
