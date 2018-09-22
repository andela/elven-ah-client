import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { parse } from '../../../query-string';
import VerifyAccount from './VerifyAccount';
import verifyAccount, { resendVerificationLink } from './verifyAccountActions';
import ahLogo from '../../../shared/assets/img/AH_LOGO.svg';

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
export class VerifyAccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      resend: false,
      message: 'Processing request',
      type: '',
    };
  }

  /**
   * @description Handles the user account verification
   * @returns {Object}
   */
  componentWillMount = async () => {
    const { history, verify } = this.props;
    const { evc } = parse(history.location.search);
    if (!evc) {
      this.setState({
        message: '',
      });
      return null;
    }
    const response = await verify(evc);
    if (response && response.status === 200) {
      history.push('/');
      return null;
    }
    return this.setState({
      message: response ? response.data.message : 'Can not connect to the internet',
    });
  }

  /**
   * @description Handles the text change for input field
   * @param {Object} event The event object
   * @returns {null}
   */
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * @description Handles the action to make resend link form visible
   * @returns {null}
   */
  handleResendLink = () => {
    this.setState({
      resend: true,
    });
  }

  /**
   * @description Handles the form submit
   * @param {Object} event The event object
   * @returns {Object}
   */
  handleSubmit = async (event) => {
    event.preventDefault();
    const { resendLink } = this.props;
    const { email } = this.state;
    const response = await resendLink(email);
    if (response) {
      this.setState({
        resend: false,
        message: response.message,
        type: response.type,
      });
      return null;
    }
    return this.setState({
      email: '',
      message: 'Failed to resend verification link',
    });
  }

  /**
   * @description Renders the component on a DOM node
   * @returns {Object}
   */
  render() {
    const { errors } = this.props;
    const {
      email, resend, message, type,
    } = this.state;
    return (
      <div className="col-xl-3 col-lg-4 col-md-5 container-fluid">
        <div className="text-center mb-4">
          <img className="mb-4 mt-5" src={ahLogo} alt="logo" width="71" height="71" />
        </div>
        <div className="mt-6">
          <VerifyAccount
            handleChange={this.handleChange}
            email={email}
            resend={resend}
            errors={errors}
            type={type}
            message={message}
            handleResendLink={this.handleResendLink}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  verify: token => dispatch(verifyAccount(token)),
  resendLink: email => dispatch(resendVerificationLink(email)),
});

const mapStateToProps = state => ({
  errors: state.auth.errors,
});

VerifyAccountContainer.propTypes = {
  verify: PropTypes.func.isRequired,
  resendLink: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccountContainer);
