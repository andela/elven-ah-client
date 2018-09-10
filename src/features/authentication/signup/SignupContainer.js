import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Signup from './Signup';
import signupUser from './signupAction';

export class SignupContainer extends Component {
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

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * @description Handles the form submit
   * @param {Object} event The event object
   */
  handleSubmit = async (event) => {
    event.preventDefault();
    const { history, signup } = this.props;
    const response = await signup(this.state);
    if (response) history.push('/');
    this.setState({
      password: '',
      confirmPassword: '',
    });
  }

  render() {
    const { errors } = this.props;
    return (
      <Signup
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        bindValues={this.state}
        errors={errors}
      />
    );
  }
}


const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupUser(user)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
});

SignupContainer.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
