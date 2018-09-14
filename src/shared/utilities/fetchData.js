import axios from 'axios';


/**
 * @description This is a utility function that handles all API calls.
 * It simplifies the payload of the request to a single object.
 * it also formats the response such that both success and error
 * responses can be handled easily
 * @param {Object} payload the request payload. Should contain:
 * @param {string} [payload.url] the url path (eg. 'auth/login'. defaults to '/'),
 * @param {string} [payload.method] the http method. Defaults to 'get'
 * @param {object} [payload.headers] the http request headers object.
 * @param {object} [payload.data] the request body. For 'post', 'put', and 'patch'.
 */
const fetchData = async (payload) => {
  const {
    url, method, data, headers,
  } = payload;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  const response = await axios({
    baseURL: 'http://authors-haven-staging.herokuapp.com/api/v1/',
    url,
    method: method || 'get',
    data,
    headers: {
      'access-control-allow-origin': '*',
    },

  })
    .then(resp => resp)
    .catch((error) => {
      if (!error.response) {
        const networkError = {
          status: 502,
          message: 'NetWork Error',
        };
        return networkError;
      }
      return error.response;
    });
  return response;
};

export default fetchData;
