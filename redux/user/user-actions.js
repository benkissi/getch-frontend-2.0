import UserActionTypes from "./user-types";

export const siginSuccess = (signedIn) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: signedIn,
});

export const signinStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: userCredentials,
});

export const signupStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signupSuccess = (status) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: status,
});

export const signupFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const addingCurrentUser = (userData) => ({
  type: UserActionTypes.ADDING_CURRENT_USER,
  payload: userData,
});

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const siginFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const isLoading = (loadingState) => ({
  type: UserActionTypes.LOADING,
  payload: loadingState,
});

export const authFacebook = (data) => ({
  type: UserActionTypes.AUTH_FACEBOOK,
  payload: data,
});

export const facebookAuthSuccess = (token) => ({
  type: UserActionTypes.AUTH_FB_SUCCESS,
  payload: token,
});

export const fbAuthFailure = (error) => ({
  type: UserActionTypes.AUTH_FB_FAILURE,
  payload: error,
});

export const userLogout = token => ({
  type: UserActionTypes.LOG_OUT,
  payload: token,
})

export const userLogoutSuccess = () => ({
  type: UserActionTypes.LOG_OUT_SUCCESS
})

export const userLogoutFailure = error => ({
  type: UserActionTypes.LOG_OUT_FAILURE,
  payload: error
})
