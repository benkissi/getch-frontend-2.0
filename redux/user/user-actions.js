import UserActionTypes from "./user-types";

export const siginSuccess = signedIn => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: signedIn
});

export const siginStart = () => ({
  type: UserActionTypes.SIGN_IN_START
});

export const signupStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
})

export const addingCurrentUser = userData => ({
  type: UserActionTypes.ADDING_CURRENT_USER,
  payload: userData
});

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const siginFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const isLoading = loadingState => ({
  type: UserActionTypes.LOADING,
  payload: loadingState
});

export const authFacebook = data => ({
  type: UserActionTypes.AUTH_FACEBOOK,
  payload: data
})

export const facebookAuthSuccess = token => ({
  type: UserActionTypes.AUTH_FB_SUCCESS,
  payload: token
})

export const fbAuthFailure = error => ({
  type: UserActionTypes.AUTH_FB_FAILURE,
  payload: error
})
