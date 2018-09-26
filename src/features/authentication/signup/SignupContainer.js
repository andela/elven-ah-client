import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Signup from './Signup';
import signupUser from './signupAction';
import SocialLogin from '../social-login/SocialLogin';
import ahLogo from '../../../shared/assets/img/AH_LOGO.svg';
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
export class SignupContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
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
   */
  handleSubmit = async (event) => {
    event.preventDefault();
    const { history, signup } = this.props;
    const response = await signup(this.state);
    if (response) history.push('/');
  }

  /**
   * @description Renders the component on a DOM node
   */
  render() {
    const { errors } = this.props;
    return (
      <div className="">
        <div className="text-center mb-4">
          <img className="mb-4 mt-5" src={ahLogo} alt="logo" width="71" height="71" />
        </div>
        <div className="body row mt-4">
          <div className="col-md-6 divider">
            <Signup
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              bindValues={this.state}
              errors={errors}
            />
          </div>
          <SocialLogin />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupUser(user)),
  clearValidation: field => dispatch(clearValidationErrors(field)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
});

SignupContainer.propTypes = {
  signup: PropTypes.func.isRequired,
  clearValidation: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
