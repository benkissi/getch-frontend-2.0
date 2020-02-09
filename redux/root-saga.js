import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user-sagas";
import {searchSagas} from './search/search-sagas'

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(searchSagas)
  ]);
}
