import axios from 'axios';


/**
 * @description This is a utility function that handles all API calls.
 * It simplifies the payload of the request to a single object.
 * it also formats the response such that both success and error
 * responses can be handled easily
 * @param {Object} payload The request payload. Should contain:
 * `url`: without the base url (eg. 'auth/login'. defaults to '/'),
 * the `method`: (eg. 'post', defaults to 'get'), `headers`: to be sent
 * with the request (eg. {x-access-token: 'hhdfdgdfdfdf'}), and
 * `data`: object to be sent in the request body (eg. {username: 'JohnAwesome'} )
 * @returns {Object} The HTTP response object
 */
const fetchData = async (payload) => {
  const {
    url, method, data, headers,
  } = payload;
  const response = await axios({
    baseURL: 'http://localhost:4000/api/v1/',
    url,
    method: method || 'get',
    data,
    headers,

  })
    .then(resp => resp)
    .catch(error => error.response);
  return response;
};

export default fetchData;
