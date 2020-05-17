import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user-types";
import {
  siginSuccess,
  signupSuccess,
  signupFailure,
  setCurrentUser,
  siginFailure,
  isLoading,
  facebookAuthSuccess,
  fbAuthFailure,
  userLogoutSuccess,
  userLogoutFailure,
  paymentSuccessful,
  paymentFailure,
} from "./user-actions";
import { setCount } from "../search/search-actions";
import {
  fbAuthentication,
  signUp,
  signIn,
  userLogout,
  verifyPayment,
} from "../../api/api";

export function* setUser({ payload }) {
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

export function* signUpUser({ payload }) {
  try {
    yield put(isLoading(true));
    console.log("the payload", payload);
    const res = yield signUp(payload.email, payload.password);

    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken,
      plan: res.plan,
    };
    yield put(setCurrentUser(userData));
    yield put(setCount(res.searchCount));
    yield put(signupSuccess(true));
    yield put(isLoading(false));
  } catch (error) {
    yield put(signupFailure(error));
  }
}

export function* signInUser({ payload }) {
  try {
    yield put(isLoading(true));
    const res = yield signIn(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken,
      plan: res.plan,
    };
    yield put(setCurrentUser(userData));
    yield put(setCount(res.searchCount));
    console.log("search count", res.searchCount);
    yield put(isLoading(false));
  } catch (error) {
    yield put(isLoading(false));
    yield put(siginFailure(error));
  }
}

export function* facebookAuth({ payload }) {
  yield put(isLoading(true));
  try {
    const { token, id, fbId, name } = payload;
    console.log("payload", payload);
    yield put(isLoading(true));
    const fbToken = yield fbAuthentication(token, id, fbId, name);

    yield put(facebookAuthSuccess(fbToken));
    yield put(isLoading(false));
  } catch (error) {
    yield put(fbAuthFailure(error));
    yield put(isLoading(false));
  }
}

export function* logout({ payload }) {
  try {
    yield put(isLoading(true));
    const res = yield userLogout(payload);
    if (res === true) {
      console.log("logout done");
      yield put(userLogoutSuccess());
      yield put(isLoading(false));
    }
  } catch (error) {
    yield put(isLoading(false));
    yield put(userLogoutFailure(error));
  }
}

export function* verifyUserPayment({ payload }) {
  try {
    yield put(isLoading(true));
    const { token, ref, plan } = payload;
    const res = yield verifyPayment(token, plan, ref);
    console.log("user saga", res);
    if (res.plan == "PL002") {
      yield put(paymentSuccessful(res.plan));
      console.log("paid");
    }
  } catch (error) {
    yield put(isLoading(false));
    yield put(paymentFailure(error));
  }
}

export function* onAddingCurrentUser() {
  yield takeLatest(UserActionTypes.ADDING_CURRENT_USER, setUser);
}

export function* onSignupStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser);
}

export function* onSigninStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInUser);
}

export function* onAuthFacebook() {
  yield takeLatest(UserActionTypes.AUTH_FACEBOOK, facebookAuth);
}

export function* onLogout() {
  yield takeLatest(UserActionTypes.LOG_OUT, logout);
}

export function* onVerifyPayment() {
  yield takeLatest(UserActionTypes.VERIFY_PAYMENT, verifyUserPayment);
}

export function* userSagas() {
  yield all([
    call(onAuthFacebook),
    call(onAddingCurrentUser),
    call(onSigninStart),
    call(onSignupStart),
    call(onLogout),
    call(onVerifyPayment),
  ]);
}
