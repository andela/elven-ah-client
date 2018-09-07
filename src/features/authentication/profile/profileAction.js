import toastr from 'toastr';
import {
  IS_LOADING, IS_COMPLETE,
  PROFILE_VIEW, PROFILE_UPDATE, PROFILE_UPDATE_USER_IMAGE,
} from '../../../shared/constants/ActionTypes';
import fetchData from '../../../shared/utilities/fetchData';
import history from '../../../shared/utilities/history';
import localStorageUtil from '../../../shared/utilities/localStorageUtil';

export const viewUserProfile = profile => ({
  type: PROFILE_VIEW,
  profile,
});

export const updateUserProfile = profile => ({
  type: PROFILE_UPDATE,
  profile,
});

export const updateUserImage = image => ({
  type: PROFILE_UPDATE_USER_IMAGE,
  image,
});


/**
 * @description action to View User Profile Picture
 * @param {object} Users profile - contains users profile
 * @returns {object} success/failed users profile
 */
export const getUserProfile = userProfile => async (dispatch, getState) => {
  const state = getState();
  const { token, username } = state.auth.user;
  try {
    dispatch({ type: IS_LOADING });
    const response = await fetchData({
      url: `users/${username}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      data: userProfile,
    });
    dispatch({ type: IS_COMPLETE });
    if (response.statusText === 'Unauthorized') {
      return history.push('/login');
    } if (response.status === 200) {
      localStorageUtil.setItem('ah_user', Object.assign({}, { ...state.auth.user }, { ...response.data.user }));
      return dispatch(viewUserProfile(response.data.user));
    }
    const error = Object.assign({}, {
      status: response.data.status,
      message: response.data.message,
    });
    return Promise.reject(error);
  } catch (error) {
    return toastr.error(error);
  }
};

/**
 * @description action to Edit User Profile
 * @param {object} updated profile - contains updated profile
 * @returns {object} success/failed profile update
 */
export const editUserProfile = user => async (dispatch, getState) => {
  const state = getState();
  const {
    token, username, firstName, lastName, bio, email,
  } = state.auth.user;
  try {
    dispatch({ type: IS_LOADING });
    const response = await fetchData({
      method: 'put',
      url: `users/${username}`,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      data: {
        firstName: user.firstName || firstName,
        lastName: user.lastName || lastName,
        bio: user.bio || bio,
        username: user.username || username,
        email: user.email || email,
      },
    });
    dispatch({ type: IS_COMPLETE });
    if (response.statusText === 'Unauthorized') {
      return history.push('/login');
    } if (response.status === 200) {
      localStorageUtil.setItem('ah_user', Object.assign({}, { ...state.auth.user }, { ...response.data.user }));
      dispatch(updateUserProfile(response.data.user));
      return toastr.success('Your profile has been successfully updated');
    }
    const error = Object.assign({}, {
      status: response.data.status,
      message: response.data.message,
    });
    return Promise.reject(error);
  } catch (error) {
    return toastr.error(error);
  }
};

/**
 * @description action to Edit User Profile Picture
 * @param {object} updated profile - contains uploaded image
 * @returns {object} success/failed profile upload
 */
export const uploadUserImage = cloudImageUrl => async (dispatch, getState) => {
  const state = getState();
  const {
    token, username, email, image,
  } = state.auth.user;
  try {
    dispatch({ type: IS_LOADING });
    const response = await fetchData({
      method: 'put',
      url: `users/${username}`,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      data: {
        email,
        image: cloudImageUrl || image,
      },
    });
    dispatch({ type: IS_COMPLETE });
    if (response.statusText === 'Unauthorized') {
      return history.push('/login');
    } if (response.status === 200) {
      localStorageUtil.setItem('ah_user', Object.assign({}, { ...state.auth.user }, { ...response.data.user }));
      dispatch(updateUserImage(response.data.user.image));
      return toastr.success('Your profile picture has been successfully updated');
    }
    const error = Object.assign({}, {
      status: response.data.status,
      message: response.data.message,
    });
    return Promise.reject(error);
  } catch (error) {
    return toastr.error(error);
  }
};

/**
 * @description action to update a particular user image to cloudinary
 * @param {object} user - contains details of the user
 * @returns {object} success/failed image update
 */
export const editUserImage = user => async (dispatch) => {
  try {
    dispatch({ type: IS_LOADING });
    let cloudImageUrl = user.image;
    if (!user.image) {
      return dispatch(uploadUserImage(user, cloudImageUrl));
    }
    const getData = new FormData();
    getData.append('file', user.image);
    getData.append('upload_preset', 'onolv0mh');
    const response = await fetchData({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/authorshaven/image/upload',
      headers: {
        'Content-Type': 'application/json',
      },
      data: getData,
    });
    dispatch({ type: IS_COMPLETE });
    if (response.statusText === 'Unauthorized') {
      return history.push('/login');
    } if (response.status === 200) {
      cloudImageUrl = response.data.secure_url;
      return dispatch(uploadUserImage(cloudImageUrl));
    }
  } catch ({ response }) {
    return toastr.error('Failed to upload image. Try again');
  }
};
