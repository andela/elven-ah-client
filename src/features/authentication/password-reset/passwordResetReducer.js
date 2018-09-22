import {
  PASSWORD_RESET_REQUEST_SUCCESSFUL,
  PASSWORD_RESET_REQUEST_FAILED,
  PASSWORD_RESET_LINK_VALID,
  PASSWORD_RESET_LINK_INVALID,
  PASSWORD_RESET_SUCCESSFUL,
  PASSWORD_RESET_FAILED,
} from '../../../shared/constants/ActionTypes';

const passwordResetReducer = (state, { type, data, errors }) => {
  switch (type) {
    // Request verification link
    case PASSWORD_RESET_REQUEST_SUCCESSFUL:
      return {
        ...state,
      };
    case PASSWORD_RESET_REQUEST_FAILED:
      return {
        ...state,
        errors,
      };
    // Verify passwordreset link
    case PASSWORD_RESET_LINK_VALID:
      return {
        ...state,
        passwordResetToken: data.token,
      };
    case PASSWORD_RESET_LINK_INVALID:
      return {
        ...state,
        passwordResetToken: undefined,
        resetLinkError: errors.message,
        errors,
      };
    // Handle the new password
    case PASSWORD_RESET_SUCCESSFUL:
      return {
        ...state,
        passwordResetToken: undefined,
      };
    case PASSWORD_RESET_FAILED:
      return {
        ...state,
        errors,
        passwordResetToken: undefined,
      };
    default:
      return state;
  }
};

export default passwordResetReducer;
