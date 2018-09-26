import httpClient from 'request-promise';

/**
 * This class contains all the methods responsible for copyleaks authentication
 */
class Auth {
  constructor(email, apiKey) {
    this.config = {
      method: 'post',
      uri: 'https://api.copyleaks.com/v1/account/login-api',
      body: {
        Email: email,
        ApiKey: apiKey,
      },
      json: true,
    };
    this.accessToken = {};
    this.login();
  }

  /**
   * returns the access token gotten after login
   */
  get accesstoken() {
    return this.accessToken.access_token;
  }

  /**
   * logs into the copyleaks api to get an access token
   */
  async login() {
    try {
      const response = await httpClient(this.config);
      this.accessToken = response;
    } catch (error) {
      throw error;
    }
  }
}

export default new Auth(process.env.REACT_APP_COPYLEAKS_EMAIL, process.env.REACT_APP_COPYLEAKS_KEY);
