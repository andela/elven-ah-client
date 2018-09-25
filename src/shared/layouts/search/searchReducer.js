import {
  SEARCH_FUNCTION_SUCCESS, SEARCH_FUNCTION_ERROR,
} from '../../constants/ActionTypes';

const search = {};

const searchReducer = (state = search, action) => {
  switch (action.type) {
    case SEARCH_FUNCTION_SUCCESS:
      return {
        ...state,
        search: action.search,
      };

    case SEARCH_FUNCTION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default searchReducer;
