import { takeLatest, put, all, call, select } from "redux-saga/effects";
import {
  searchSuccess,
  searchFailure,
  isLoading,
  setInterestCount,
} from "./search-actions";

import {
  searchInterest,
  updateSearchCount,
  compileInterestSuggestions,
} from "../../api/api";
import {
  addScore,
  getInterestNames,
  containsKeyword,
  addLinks,
} from "../../utils/search";
import SearchActionTypes from "./search-types";

import { selectInterestTotal } from "./search-selectors";

function* getInterest({ payload }) {
  try {
    const { token, value, limit, xToken } = payload;
    yield put(isLoading(true));
    const data = yield searchInterest(token, value, limit);
    const levelOne = addScore(data.data, 5);
    let names = getInterestNames(data.data);

    const suggestions = yield compileInterestSuggestions(token, names);

    const levelTwo = addScore(suggestions, 3);
    let allInterest = [...levelOne, ...levelTwo];
    const rankedList = allInterest.map((interest) => {
      const exist = containsKeyword(value, interest.name);
      if (exist !== -1) {
        interest["relevance"] = interest.relevance + 3;
      }
      const searchName = interest.name.toLowerCase().split(" ").join("+");
      interest["links"] = [
        `https://www.facebook.com/search/pages/?q=${searchName}`,
        `https://www.google.com/search?q=${searchName}`,
      ];
      // const formatter = new Intl.NumberFormat("en-US");

      // interest["audience_size"] = formatter.format(interest["audience_size"]);
      return interest;
    });
    const { count } = yield updateSearchCount(xToken);
    console.log("count saga", count);
    yield put(searchSuccess({ data: rankedList, keyword: value, count }));
    const total = yield select(selectInterestTotal);
    yield put(setInterestCount(total));
    yield put(isLoading(false));
  } catch (error) {
    yield put(isLoading(false));
    yield put(searchFailure(error));
  }
}

export function* onSearchStart() {
  yield takeLatest(SearchActionTypes.START_SEARCH, getInterest);
}

export function* searchSagas() {
  yield all([call(onSearchStart)]);
}
