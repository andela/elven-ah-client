import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import queryString from '../../../query-string';
import { requestPasswordReset, verifyResetLink, resetPassword } from './passwordResetAction';
import { clearValidationErrors } from '../authAction';

import Reset from './Reset';
import ProcessReset from './ProcessReset';
import Request from './Request';
import Footer from '../Footer';

import logo from '../../../shared/assets/img/AH_LOGO.svg';

/**
 * @class Handles Password Reset
 * @requires react
 * @requires react-redux
 * @requires prop-types
 * @requires query-string
 * @requires Reset
 * @requires ProcessReset
 * @requires Request
 */
export class ResetContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      confirmPassword: '',
      password: '',
    };
  }

  /**
   * @description Verifies the password change token in the query param
   * @returns {null}
   */
  async componentDidMount() {
    const { verify, history, location } = this.props;
    const parsedQuery = queryString.parse(location.search);
    let token = parsedQuery.tokenId;
    if (token) await verify(token, history);
    token = '';
  }

  /**
   * @description Handles the change event
   * @param {Object} event The event object
   * @returns {null}
   */
  handleChange = (event) => {
    const { clearValidation } = this.props;
    this.setState({ [event.target.id]: event.target.value });
    clearValidation(event.target.id);
  }

  /**
   * @description Handles the password reset request
   * @param {Object} event The event object
   * @returns {null}
   */
  handleRequest = (event) => {
    event.preventDefault();
    const { request, history } = this.props;
    const { email } = this.state;
    request({ email }, history);
  }

  /**
   * @description Handles the password reset
   * @param {Object} event The event object
   * @returns {null}
   */
  handleReset = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const { reset, history, resetToken } = this.props;
    reset({ password, confirmPassword, resetToken }, history);
  }

  render() {
    const {
      location, resetToken, resetLinkError, errors,
    } = this.props;
    const componentToRender = () => {
      const parsedQuery = queryString.parse(location.search);
      if (parsedQuery.tokenId) {
        return <ProcessReset />;
      }
      if (resetToken) {
        return (
          <Reset
            handleChange={this.handleChange}
            handleReset={this.handleReset}
            values={this.state}
            errors={errors}
          />
        );
      }
      return (
        <Request
          handleChange={this.handleChange}
          handleRequest={this.handleRequest}
          errors={errors}
          resetLinkError={resetLinkError}
          values={this.state}
        />
      );
    };
    return (
      <div className="justify-content-center align-items-center">
        <div className="text-center mb-4">
          <img className="mb-4 mt-5" src={logo} alt="logo" width="71" height="71" />
        </div>
        <div className="row mx-4 mt-5 mb-8 justify-content-center align-items-center">
          {componentToRender()}
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}


ResetContainer.propTypes = {
  clearValidation: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  request: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  resetLinkError: PropTypes.string,
  resetToken: PropTypes.string,
  verify: PropTypes.func.isRequired,
};

ResetContainer.defaultProps = {
  errors: {},
  resetLinkError: '',
  resetToken: '',
};

const mapDispatchToProps = dispatch => ({
  request: (email, history) => dispatch(requestPasswordReset(email, history)),
  verify: (token, history) => dispatch(verifyResetLink(token, history)),
  reset: (data, history) => dispatch(resetPassword(data, history)),
  clearValidation: field => dispatch(clearValidationErrors(field)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
  resetLinkError: state.auth.resetLinkError,
  resetToken: state.auth.passwordResetToken,
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetContainer);
