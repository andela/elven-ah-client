import { PROFILE_UPDATE, PROFILE_VIEW, PROFILE_UPDATE_USER_IMAGE } from '../../../shared/constants/ActionTypes';

const loginReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_VIEW:
      return {
        ...state,
        user: Object.assign({}, { ...state.user }, { ...action.profile }),
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        user: Object.assign({}, { ...state.user }, { ...action.profile }),
      };
    case PROFILE_UPDATE_USER_IMAGE:
      return {
        ...state,
        user: Object.assign({}, { ...state.user }, { image: action.image }),
      };

    default:
      return state;
  }
};

export default loginReducer;
