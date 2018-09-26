import {
  RATING_SUCCESSFUL, RATING_FAILED,
} from '../../../shared/constants/ActionTypes';

const ratingReducer = (state, { type, errors }) => {
  switch (type) {
    case RATING_SUCCESSFUL:
      return {
        ...state,
        errors: undefined,
      };
    case RATING_FAILED:
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default ratingReducer;
