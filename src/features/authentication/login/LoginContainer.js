import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Login from './Login';
import loginUser from './loginAction';
import SocialLogin from '../SocialLogin';
import Footer from '../Footer';
import '../authPages.css';
import logo from '../../../shared/assets/img/AH_LOGO.svg';
import { clearValidationErrors } from '../authAction';

/**
 * @class Handles Account verification
 * @requires react
 * @requires react-redux
 * @requires prop-types
 * @requires query-string
 * @requires VerifyAccount
 * @requires verifyAccountActions
 * @requires AH_LOGO
 */
export class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      emailOrUsername: '',
      password: '',
    };
  }

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  handleChange = (event) => {
    const { clearValidation } = this.props;
    this.setState({ [event.target.id]: event.target.value });
    clearValidation(event.target.id);
  }


  /**
   * @description Handles the form submit
   * @param {Object} event The event object
   * @returns {Object}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    const { emailOrUsername, password } = this.state;
    const field = emailOrUsername.includes('@') && emailOrUsername.includes('.') ? 'email' : 'username';
    login({ [field]: emailOrUsername, password }, history);
  }

  /**
   * @description Renders the component on a DOM node
   */
  render() {
    const { errors } = this.props;
    return (
      <div className="h-100 justify-content-center align-items-center">
        <div className="text-center mb-4">
          <img className="mb-4 mt-5" src={logo} alt="logo" width="71" height="71" />
        </div>
        <div className="body row mt-6">
          <div className="col-md-6 divider justify-content-center">
            <Login
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              values={this.state}
              errors={errors}
            />
          </div>
          <SocialLogin />
        </div>
        <Footer />
      </div>
    );
  }
}


LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  clearValidation: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
};

LoginContainer.defaultProps = {
  errors: {},
};

const mapDispatchToProps = dispatch => ({
  login: (user, history) => dispatch(loginUser(user, history)),
  clearValidation: field => dispatch(clearValidationErrors(field)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
