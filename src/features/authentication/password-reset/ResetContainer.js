import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import queryString from 'query-string';
import Reset from './Reset';
import ProcessReset from './ProcessReset';
import Request from './Request';
import { requestPasswordReset, verifyResetLink, resetPassword } from './passwordResetAction';

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
class ResetContainer extends Component {
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
    this.setState({ [event.target.id]: event.target.value });
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
    this.setState({ email: '' });
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
    this.setState({ confirmPassword: '', password: '' });
  }

  render() {
    const { location, resetToken, errors } = this.props;
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
            errors={errors}
          />
        );
      }
      return (
        <Request
          handleChange={this.handleChange}
          handleRequest={this.handleRequest}
          errors={errors}
        />
      );
    };
    return componentToRender();
  }
}


ResetContainer.propTypes = {
  request: PropTypes.func.isRequired,
  verify: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
  resetToken: PropTypes.string,
};

ResetContainer.defaultProps = {
  errors: {},
  resetToken: '',
};

const mapDispatchToProps = dispatch => ({
  request: (email, history) => dispatch(requestPasswordReset(email, history)),
  verify: (token, history) => dispatch(verifyResetLink(token, history)),
  reset: (data, history) => dispatch(resetPassword(data, history)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
  resetToken: state.auth.passwordResetToken,
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetContainer);
