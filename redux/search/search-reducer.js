import SearchActionTypes from "./search-types";

const INITIAL_STATE = {
  keyword: null,
  interests: null,
  searchCount: 0,
  error: null,
  loading: false,
  interestCount: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        interests: action.payload.data,
        keyword: action.payload.keyword,
        searchCount: action.payload.count,
        error: null,
      };
    case SearchActionTypes.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SearchActionTypes.SET_COUNT:
      return {
        ...state,
        searchCount: action.payload,
      };
    case SearchActionTypes.SET_INTEREST_COUNT:
      return {
        ...state,
        interestCount: action.payload,
      };
    case SearchActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
