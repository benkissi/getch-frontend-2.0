import UserActionTypes from "./user-types";

const INITIAL_STATE = {
  currentUser: null,
  fbToken: {
    token:null,
    expires: null
  },
  signedIn: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signedIn: action.payload,
        error: null
      };
    case UserActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null
      };
    case UserActionTypes.AUTH_FB_SUCCESS:
      return {
        ...state,
        fbToken: {...action.payload},
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.AUTH_FB_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
