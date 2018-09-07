import { loading, userError, networkError } from '../../shared/actions/commonActions';
import { COMPLETE } from '../../shared/constants/ActionTypes';

const baseUrl = 'https://authors-haven-staging.herokuapp.com/api';

const authAsync = (payload, history, route) => (dispatch) => {
  dispatch(loading());
  return fetch(`${baseUrl}/auth/${route}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 201:
        dispatch({ type: COMPLETE });
        history.push('/success');
        break;
      default:
        dispatch(userError(response.errors));
        console.log(response);
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

export default authAsync;
