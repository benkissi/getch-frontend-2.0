import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user-types";
import {
  siginSuccess,
  setCurrentUser,
  siginFailure,
  isLoading,
  facebookAuthSuccess,
  fbAuthFailure
} from "./user-actions";
import {fbAuthentication} from '../../api/api'

export function* setUser({ payload }) {
  console.log("********", payload);
  try {
    yield put(isLoading(true));
    if (!payload) {
      throw new Error("No user");
    }

    yield put(setCurrentUser(payload));
    yield put(siginSuccess(true));
    yield put(isLoading(false));
  } catch (error) {
    yield put(siginFailure(error));
    yield put(isLoading(false));
  }
}

export function* signIn() {}

export function* facebookAuth({payload}){
  yield put(isLoading(true));
  try {
    const {token, id, fbId} = payload
    yield put(isLoading(true));
    const fbToken = yield fbAuthentication(token, id, fbId)
    yield put(facebookAuthSuccess(fbToken))
    yield put(isLoading(false))
  } catch (error) {
    yield put(fbAuthFailure(error))
    yield put(isLoading(false))
  }
  
}

export function* onAddingCurrentUser() {
  yield takeLatest(UserActionTypes.ADDING_CURRENT_USER, setUser);
}

export function* onSigninStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* onAuthFacebook() {
  yield takeLatest(UserActionTypes.AUTH_FACEBOOK, facebookAuth)
}

export function* userSagas() {
  yield all([
    call(onAuthFacebook),
    call(onAddingCurrentUser), 
    call(onSigninStart)
  ]);
}
