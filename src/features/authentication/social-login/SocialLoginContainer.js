import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { parse } from '../../../query-string';
import socialLoginAsync from './socialLoginActions';
import Navbar from '../../../shared/layouts/Navbar';

/**
 * @class Handles Social Login
 * @requires react
 * @requires react-redux
 * @requires prop-types
 * @requires query-string
 * @requires socialLoginActions
 */
export class SocialLoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { history, match } = props;
    const { code } = parse(history.location.search);
    const { socialLogin } = match.params;
    if (!code && (socialLogin === 'facebook' || socialLogin === 'google')) {
      window.location = `https://authors-haven-staging.herokuapp.com/api/v1/auth/${socialLogin}`;
    }
    if (!code && (socialLogin !== 'facebook' || socialLogin !== 'google')) {
      history.push('/signup');
    }
  }

  /**
   * @description Handles the user authentication process
   * It makes an ajax call to the passport.js callback route on the API
   * On a successful login an access token is returned and the user is redirected to the home
   * @returns {Object}
   */
  componentDidMount = async () => {
    const { history, social, match } = this.props;
    const { code } = parse(history.location.search);
    const { socialLogin } = match.params;
    if (!code) return undefined;
    const response = await social(code, socialLogin);
    if (!response) {
      history.push('/signup');
      return null;
    }
    return history.push('/');
  };

  /**
   * @description Renders the React component
   * @returns {Object}
   */
  render() {
    return (<Navbar />);
  }
}

SocialLoginContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  social: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  social: (accessToken, socialLogin) => dispatch(socialLoginAsync(accessToken, socialLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialLoginContainer);
