import {
  LOADING, COMPLETE, USER_ERROR, NETWORK_ERROR,
} from '../constants/ActionTypes';

const initialState = {
  errors: {},
  message: '',
  error: false,
  loading: false,
};

const commonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return Object.assign(
        {},
        { ...state },
        {
          loading: true,
          error: false,
        },
      );
    case COMPLETE:
      return Object.assign(
        {},
        { ...state },
        {
          loading: false,
          error: false,
        },
      );
    case USER_ERROR:
      return Object.assign(
        {},
        { ...state },
        {
          loading: false,
          error: true,
          errors: payload,
        },
      );
    case NETWORK_ERROR:
      return Object.assign(
        {},
        { ...state },
        {
          loading: false,
          error: true,
          message: 'Oops! unable to connect to the Internet. Please check your connection and try again',
        },
      );
    default:
      return state;
  }
};

export default commonReducer;
