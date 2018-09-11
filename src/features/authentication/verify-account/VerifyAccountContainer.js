import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { parse } from 'query-string';
import VerifyAccount from './VerifyAccount';
import verifyAccount, { resendVerificationLink } from './verifyAccountActions';

export class VerifyAccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      resend: false,
      message: 'Processing request',
    };
  }

  componentWillMount = async () => {
    const { history, verify } = this.props;
    const { evc } = parse(history.location.search);
    if (!evc) return null;
    const response = await verify(evc);
    if (response.status === 200) {
      history.push('/');
      return null;
    }
    return this.setState({
      message: response.data.message,
    });
  }

  /**
   * @description Handles the text change for input field
   * @param {Object} event The event object
   */
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * @description Handles the action to make resend link form visible
   */
  handleResendLink = () => {
    this.setState({
      resend: true,
    });
  }

  /**
   * @description Handles the form submit
   * @param {Object} event The event object
   */
  handleSubmit = async (event) => {
    event.preventDefault();
    const { resendLink } = this.props;
    const { email } = this.state;
    const response = await resendLink(email);
    if (response) {
      this.setState({
        resend: false,
        message: response,
      });
      return null;
    }
    return this.setState({
      email: '',
      message: 'Failed to resend verification link, please try again later',
    });
  }

  render() {
    const { errors } = this.props;
    const { email, resend, message } = this.state;
    return (
      <VerifyAccount
        handleChange={this.handleChange}
        email={email}
        resend={resend}
        errors={errors}
        message={message}
        handleResendLink={this.handleResendLink}
        handleSubmit={this.handleSubmit}
      />
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
