import {
  PROFILE_UPDATE, PROFILE_VIEW, PROFILE_UPDATE_USER_IMAGE, PROFILE_CLEAR,
} from '../../../shared/constants/ActionTypes';

const profileReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_VIEW:
      return {
        ...state,
        profile: action.profile,
      };
    case PROFILE_CLEAR:
      return {
        ...state,
        profile: undefined,
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.profile,
        },
        profile: {
          ...state.profile,
          ...action.profile,
        },
      };
    case PROFILE_UPDATE_USER_IMAGE:
      return {
        ...state,
        user: Object.assign({}, { ...state.user }, { image: action.image }),
        profile: {
          ...state.profile,
          ...action.profile,
        },
      };

    default:
      return state;
  }
};

export default profileReducer;
