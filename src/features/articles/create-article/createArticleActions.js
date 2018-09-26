import toastr from 'toastr';
import {
  IS_LOADING,
  VALIDATION_ERROR,
  IS_COMPLETE,
  CREATE_ARTICLE_FAILED,
  CREATE_ARTICLE_SUCESSFUL,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import Auth from '../../../shared/utilities/copyleaks/Auth';
import Scanner from '../../../shared/utilities/copyleaks/Scan';
import Mailer from '../../../shared/utilities/Mailer';
import emails from '../../../shared/utilities/emailMessages';

/**
 * @description Makes an ajax call to create a new article
 * @param {Object} article The article to be created
 * @returns {Object}
 */
const createArticle = article => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth.user;
  dispatch({ type: IS_LOADING });
  try {
    const response = await fetchData({
      url: '/articles',
      method: 'post',
      data: article,
      headers: {
        'x-access-token': token,
      },
    });
    dispatch({ type: IS_COMPLETE });
    switch (response.status) {
      case 201:
        dispatch({ type: CREATE_ARTICLE_SUCESSFUL, article: response.data.article });
        toastr.success(response.data.message);
        return response;
      case 400:
      case 599:
        dispatch({ type: VALIDATION_ERROR, errors: response.data.errors });
        return null;
      default:
        dispatch({ type: CREATE_ARTICLE_FAILED, errors: { ...response.data.errors } });
        toastr.info(response.data.message || 'Failed to publish your article please try again later!');
        return null;
    }
  } catch (error) {
    toastr.info('Unable to connect to the Internet, please check your connection and try agian...');
    return null;
  }
};

export const checkPlagiarism = htmlText => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  toastr.info('Running a plagiarism on the content of your article');
  const htmlElement = document.createElement('div');
  htmlElement.innerHTML = htmlText;
  try {
    const scanner = new Scanner(Auth.accesstoken);
    const processId = await scanner.uploadScan(htmlElement.textContent);
    const response = await scanner.checkResult(processId);
    dispatch({ type: IS_COMPLETE });
    const foundIn = response.results.filter(occurrence => occurrence.totalMatchedPercents >= 50);
    if (foundIn.length >= 1) {
      return foundIn;
    }
    return false;
  } catch (err) {
    dispatch({ type: IS_COMPLETE });
    const msg = emails.copyleaksCreditExhaustion(process.env.REACT_APP_SITE_ADMIN_EMAIL);
    Mailer.sendMail(msg);
    return false;
  }
};

export default createArticle;
