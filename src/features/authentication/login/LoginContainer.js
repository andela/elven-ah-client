import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Login from './Login';
import loginUser from './loginAction';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      emailOrUsername: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    const { emailOrUsername, password } = this.state;
    const field = emailOrUsername.includes('@') && emailOrUsername.includes('.') ? 'email' : 'username';
    login({ [field]: emailOrUsername, password }, history);
    this.setState({ emailOrUsername: '', password: '' });
  }

  render() {
    const { errors } = this.props;
    return (
      <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={errors} />
    );
  }
}


LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
};

LoginContainer.defaultProps = {
  errors: {},
};

const mapDispatchToProps = dispatch => ({
  login: (user, history) => dispatch(loginUser(user, history)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
