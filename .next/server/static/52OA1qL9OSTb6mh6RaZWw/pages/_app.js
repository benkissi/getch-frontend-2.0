module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/921":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const UserActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SIGN_IN_START: "SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  AUTH_FB_START: "AUTH_FB_START",
  AUTH_FB_SUCCESS: "AUTH_FB_SUCCESS",
  AUTH_FB_FAILURE: "AUTH_FB_FAILURE",
  ADDING_CURRENT_USER: "ADDING_CURRENT_USER",
  LOADING: "LOADING",
  AUTH_FACEBOOK: "AUTH_FACEBOOK",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
  LOG_OUT: "LOG_OUT",
  LOG_OUT_SUCCESS: "LOG_OUT_SUCCESS",
  LOG_OUT_FAILURE: "LOG_OUT_FAILURE"
};
/* harmony default export */ __webpack_exports__["a"] = (UserActionTypes);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: ./redux/user/user-types.js
var user_types = __webpack_require__("/921");

// CONCATENATED MODULE: ./redux/user/user-reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  currentUser: null,
  fbToken: {
    token: null,
    expires: null
  },
  signedIn: false,
  logout: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user_types["a" /* default */].SET_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: action.payload,
        error: null
      });

    case user_types["a" /* default */].SIGN_IN_SUCCESS:
      return _objectSpread({}, state, {
        signedIn: action.payload,
        error: null
      });

    case user_types["a" /* default */].LOADING:
      return _objectSpread({}, state, {
        loading: action.payload,
        error: null
      });

    case user_types["a" /* default */].AUTH_FB_SUCCESS:
      return _objectSpread({}, state, {
        fbToken: _objectSpread({}, action.payload),
        currentUser: _objectSpread({}, state.currentUser, {
          name: action.payload.name
        }),
        error: null
      });

    case user_types["a" /* default */].LOG_OUT_SUCCESS:
      return _objectSpread({}, state, {
        currentUser: null,
        fbToken: null,
        logout: true,
        error: null
      });

    case user_types["a" /* default */].SIGN_IN_FAILURE:
    case user_types["a" /* default */].AUTH_FB_FAILURE:
    case user_types["a" /* default */].SIGN_UP_FAILURE:
    case user_types["a" /* default */].LOG_OUT_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var user_reducer = (userReducer);
// EXTERNAL MODULE: ./redux/search/search-types.js
var search_types = __webpack_require__("Hn5k");

// CONCATENATED MODULE: ./redux/search/search-reducer.js
function search_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_reducer_ownKeys(Object(source), true).forEach(function (key) { search_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const search_reducer_INITIAL_STATE = {
  keyword: null,
  interests: null,
  searchCount: null,
  error: null,
  loading: false,
  interestCount: null
};

const searchReducer = (state = search_reducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case search_types["a" /* default */].SEARCH_SUCCESS:
      return search_reducer_objectSpread({}, state, {
        interests: action.payload.data,
        keyword: action.payload.keyword,
        error: null
      });

    case search_types["a" /* default */].IS_LOADING:
      return search_reducer_objectSpread({}, state, {
        loading: action.payload
      });

    case search_types["a" /* default */].SET_COUNT:
      return search_reducer_objectSpread({}, state, {
        searchCount: action.payload
      });

    case search_types["a" /* default */].SET_INTEREST_COUNT:
      return search_reducer_objectSpread({}, state, {
        interestCount: action.payload
      });

    case search_types["a" /* default */].SEARCH_FAILURE:
      return search_reducer_objectSpread({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var search_reducer = (searchReducer);
// CONCATENATED MODULE: ./redux/root-reducer.js





const persistConfig = {
  key: "root",
  storage: storage_default.a
};
const rootReducer = Object(external_redux_["combineReducers"])({
  user: user_reducer,
  search: search_reducer
});
/* harmony default export */ var root_reducer = (Object(external_redux_persist_["persistReducer"])(persistConfig, rootReducer));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./redux/user/user-actions.js
var user_actions = __webpack_require__("hSKJ");

// EXTERNAL MODULE: ./api/api.js + 1 modules
var api = __webpack_require__("Mplf");

// CONCATENATED MODULE: ./redux/user/user-sagas.js




function* setUser({
  payload
}) {
  try {
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(true));

    if (!payload) {
      throw new Error("No user");
    }

    yield Object(effects_["put"])(Object(user_actions["f" /* setCurrentUser */])(payload));
    yield Object(effects_["put"])(Object(user_actions["h" /* siginSuccess */])(true));
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
  } catch (error) {
    yield Object(effects_["put"])(Object(user_actions["g" /* siginFailure */])(error));
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
  }
}
function* signUpUser({
  payload
}) {
  try {
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(true));
    console.log("the payload", payload);
    const res = yield Object(api["k" /* signUp */])(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken
    };
    console.log("User data", userData);
    yield Object(effects_["put"])(Object(user_actions["f" /* setCurrentUser */])(userData));
    yield Object(effects_["put"])(Object(user_actions["l" /* signupSuccess */])(true));
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
  } catch (error) {
    yield Object(effects_["put"])(Object(user_actions["j" /* signupFailure */])(error));
  }
}
function* signInUser({
  payload
}) {
  try {
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(true));
    const res = yield Object(api["j" /* signIn */])(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken
    };
    yield Object(effects_["put"])(Object(user_actions["f" /* setCurrentUser */])(userData));
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
    console.log("signin response", userData);
  } catch (error) {
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
    yield Object(effects_["put"])(Object(user_actions["g" /* siginFailure */])(error));
  }
}
function* facebookAuth({
  payload
}) {
  yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(true));

  try {
    const {
      token,
      id,
      fbId,
      name
    } = payload;
    console.log('payload', payload);
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(true));
    const fbToken = yield Object(api["b" /* fbAuthentication */])(token, id, fbId, name);
    yield Object(effects_["put"])(Object(user_actions["c" /* facebookAuthSuccess */])(fbToken));
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
  } catch (error) {
    yield Object(effects_["put"])(Object(user_actions["d" /* fbAuthFailure */])(error));
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
  }
}
function* logout({
  payload
}) {
  try {
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(true));
    const res = yield Object(api["l" /* userLogout */])(payload);

    if (res === true) {
      console.log('logout done');
      yield Object(effects_["put"])(Object(user_actions["o" /* userLogoutSuccess */])());
      yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
    }
  } catch (error) {
    yield Object(effects_["put"])(Object(user_actions["e" /* isLoading */])(false));
    yield Object(effects_["put"])(Object(user_actions["n" /* userLogoutFailure */])(error));
  }
}
function* onAddingCurrentUser() {
  yield Object(effects_["takeLatest"])(user_types["a" /* default */].ADDING_CURRENT_USER, setUser);
}
function* onSignupStart() {
  yield Object(effects_["takeLatest"])(user_types["a" /* default */].SIGN_UP_START, signUpUser);
}
function* onSigninStart() {
  yield Object(effects_["takeLatest"])(user_types["a" /* default */].SIGN_IN_START, signInUser);
}
function* onAuthFacebook() {
  yield Object(effects_["takeLatest"])(user_types["a" /* default */].AUTH_FACEBOOK, facebookAuth);
}
function* onLogout() {
  yield Object(effects_["takeLatest"])(user_types["a" /* default */].LOG_OUT, logout);
}
function* userSagas() {
  yield Object(effects_["all"])([Object(effects_["call"])(onAuthFacebook), Object(effects_["call"])(onAddingCurrentUser), Object(effects_["call"])(onSigninStart), Object(effects_["call"])(onSignupStart), Object(effects_["call"])(onLogout)]);
}
// EXTERNAL MODULE: ./redux/search/search-actions.js
var search_actions = __webpack_require__("OCjW");

// EXTERNAL MODULE: ./utils/search.js
var search = __webpack_require__("Kk7H");

// CONCATENATED MODULE: ./redux/search/search-selectors.js
const selectInterestTotal = state => {
  return state.search.interests.reduce((accumulator, item) => {
    return accumulator + 1;
  }, 0);
};
// CONCATENATED MODULE: ./redux/search/search-sagas.js







function* getInterest({
  payload
}) {
  try {
    const {
      token,
      value,
      limit
    } = payload;
    yield Object(effects_["put"])(Object(search_actions["a" /* isLoading */])(true));
    const data = yield Object(api["i" /* searchInterest */])(token, value, limit);
    const levelOne = Object(search["a" /* addScore */])(data.data, 5);
    let names = Object(search["c" /* getInterestNames */])(data.data);
    const suggestions = yield Object(api["a" /* compileInterestSuggestions */])(token, names);
    const levelTwo = Object(search["a" /* addScore */])(suggestions, 3);
    let allInterest = [...levelOne, ...levelTwo];
    const rankedList = allInterest.map(interest => {
      const exist = Object(search["b" /* containsKeyword */])(value, interest.name);

      if (exist !== -1) {
        interest['relevance'] = interest.relevance + 3;
      }

      return interest;
    });
    yield Object(effects_["put"])(Object(search_actions["d" /* searchSuccess */])({
      data: rankedList,
      keyword: value
    }));
    const total = yield Object(effects_["select"])(selectInterestTotal);
    yield Object(effects_["put"])(Object(search_actions["e" /* setInterestCount */])(total));
    yield Object(effects_["put"])(Object(search_actions["a" /* isLoading */])(false));
  } catch (error) {
    yield Object(effects_["put"])(Object(search_actions["a" /* isLoading */])(false));
    yield Object(effects_["put"])(Object(search_actions["b" /* searchFailure */])(error));
  }
}

function* onSearchStart() {
  yield Object(effects_["takeLatest"])(search_types["a" /* default */].START_SEARCH, getInterest);
}
function* searchSagas() {
  yield Object(effects_["all"])([Object(effects_["call"])(onSearchStart)]);
}
// CONCATENATED MODULE: ./redux/root-saga.js



function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(userSagas), Object(effects_["call"])(searchSagas)]);
}
// CONCATENATED MODULE: ./redux/store.js






const sagaMiddleware = external_redux_saga_default()();
const middlewares = [sagaMiddleware];

if (false) {}

const store_store = Object(external_redux_["createStore"])(root_reducer, Object(external_redux_["applyMiddleware"])(...middlewares));
sagaMiddleware.run(rootSaga);
Object(external_redux_persist_["persistStore"])(store_store);

const makeStore = initialState => {
  return store_store;
};

/* harmony default export */ var redux_store = (makeStore);
// EXTERNAL MODULE: ./components/dashboardLayout.js + 3 modules
var dashboardLayout = __webpack_require__("xX2u");

// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;





/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(redux_store, {
  debug: true
})(class MyApp extends app_default.a {
  render() {
    const defaultLayout = props => __jsx("div", null, props.children);

    const {
      Component,
      pageProps,
      store
    } = this.props;
    const Layout = Component.Layout || defaultLayout;
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(Layout, null, __jsx(Component, pageProps)));
  }

}));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "G4lZ":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Hn5k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SearchActionTypes = {
  START_SEARCH: 'START_SEARCH',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',
  IS_LOADING: 'IS_LOADING',
  SET_COUNT: 'SET_COUNT',
  SET_INTEREST_COUNT: 'SET_INTEREST_COUNT'
};
/* harmony default export */ __webpack_exports__["a"] = (SearchActionTypes);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kk7H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getInterestNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return containsKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return splitArray; });
const addScore = (data, score) => {
  const updated = data.map(item => {
    if (item.hasOwnProperty('relevance')) {
      return item.relevance = item.relevance + score;
    }

    item['relevance'] = score;
    return item;
  });
  return updated;
};
const getInterestNames = data => {
  const names = data.map(item => {
    return item.name;
  });
  return names;
};
const containsKeyword = (key, phrase) => {
  const lowerPhrase = phrase.toLowerCase();
  const lowerKey = key.toLowerCase();
  return lowerPhrase.indexOf(lowerKey);
};
const splitArray = (array, size) => {
  const length = array.length;
  const setNumber = Math.ceil(length / size);
  let limit = size;
  let start = 0;
  let arraySplit = [];

  for (let i = 0; i < setNumber; i++) {
    const set = array.slice(start, limit);
    arraySplit.push(set);
    limit = limit + size;
    start = start + size;
  }

  return arraySplit;
};

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "Mplf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./api/endpoints.js
const endpoints = {
  GET_PRODUCTS: shop => `${"http://localhost:9090/"}shopify/products/${shop}`,
  FB_AUTH: `${"http://localhost:9090/"}facebook/auth`,
  FB_INTEREST_SEARCH: apiVersion => `https://graph.facebook.com/v${apiVersion}/search`,
  GET_ADACCOUNTS: fbId => `${"http://localhost:9090/"}facebook/adaccounts/${fbId}`,
  GET_CAMPAIGNS: accountId => `${"http://localhost:9090/"}facebook/campaigns/${accountId}`,
  GET_ADSETS: campaignId => `${"http://localhost:9090/"}facebook/adsets/${campaignId}`,
  GET_ADS: adsetId => `${"http://localhost:9090/"}facebook/ads/${adsetId}`,
  GET_STATS: adId => `${"http://localhost:9090/"}facebook/stats/${adId}`,
  SIGN_UP: `${"http://localhost:9090/"}users/signup`,
  SIGN_IN: `${"http://localhost:9090/"}users/signin`,
  LOG_OUT: `${"http://localhost:9090/"}users/logout`
};
/* harmony default export */ var api_endpoints = (endpoints);
// EXTERNAL MODULE: ./utils/search.js
var search = __webpack_require__("Kk7H");

// CONCATENATED MODULE: ./api/api.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fbAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return searchInterest; });
/* unused harmony export getInterestSuggestions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compileInterestSuggestions; });
/* unused harmony export getProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAdAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fbPaginate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAdsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getInterestStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return userLogout; });



const signUp = async (email, password) => {
  console.log('getting', email, password);
  const url = api_endpoints.SIGN_UP;
  const data = {
    email,
    password
  };
  const res = await external_axios_default.a.post(url, data);
  const token = res.headers['x-auth'].replace('Bearer ', '');
  res.data['xToken'] = token;
  return res.data;
};
const signIn = async (email, password) => {
  console.log('sign in api');
  const url = api_endpoints.SIGN_IN;
  const params = {
    email,
    password
  };
  console.log('api', params);
  const res = await external_axios_default.a.get(url, {
    params
  });
  const token = res.headers['x-auth'].replace('Bearer ', '');
  res.data['xToken'] = token;
  return res.data;
};
const fbAuthentication = async (token, id, fbId, name) => {
  console.log('name api', name);
  const url = api_endpoints.FB_AUTH;
  const params = {
    token,
    id,
    fbId,
    name
  };
  const res = await external_axios_default.a.get(url, {
    params
  });
  console.log('res data', res.data);
  return res.data;
};
const searchInterest = async (token, keyword, limit = 500) => {
  const url = api_endpoints.FB_INTEREST_SEARCH(2.11);
  const params = {
    q: keyword,
    type: 'adinterest',
    access_token: token,
    limit
  };
  const res = await external_axios_default.a.get(url, {
    params
  });
  return res.data;
};
const getInterestSuggestions = async (token, keywords, limit = 100) => {
  let interestSuggestions = [];
  let response;
  const url = api_endpoints.FB_INTEREST_SEARCH(2.11);
  const params = {
    interest_list: keywords,
    type: 'adinterestsuggestion',
    access_token: token,
    limit: limit
  };
  response = await external_axios_default.a.get(url, {
    params
  });
  interestSuggestions.push(...response.data.data);
  let page = 0;

  while (response.data.paging.next) {
    if (page > 5) {
      break;
    }

    response = await external_axios_default.a.get(response.data.paging.next);
    interestSuggestions.push(...response.data.data);
    page++;
  }

  return interestSuggestions;
};
const compileInterestSuggestions = async (token, keywords, limit = 100) => {
  if (keywords.length > 200) {
    let suggestions = [];
    const dataArray = Object(search["d" /* splitArray */])(keywords, 200);

    for (let i = 0; i < dataArray.length; i++) {
      suggestions.push(...(await getInterestSuggestions(token, dataArray[i], limit)));
    }

    return suggestions;
  }

  return await getInterestSuggestions(token, keywords, limit);
};
const getProducts = async shopName => {
  const url = api_endpoints.GET_PRODUCTS(shopName);
  const params = {
    limit: 10
  };
  const res = await external_axios_default.a.get(url, {
    params
  });
  console.log(res.data);
};
const getAdAccounts = async (fbId, token) => {
  const url = api_endpoints.GET_ADACCOUNTS(fbId);
  const headers = {
    'Authorization': token
  };
  const params = {
    fbId
  };
  const res = await external_axios_default.a.get(url, {
    headers,
    params
  });
  return res.data;
};
const fbPaginate = async page => {
  const res = await external_axios_default.a.get(page);
  return res.data;
};
const getCampaigns = async (accountId, token) => {
  const url = api_endpoints.GET_CAMPAIGNS(accountId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const getAdsets = async (camaignId, token) => {
  const url = api_endpoints.GET_ADSETS(camaignId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const getAds = async (adsetId, token) => {
  const url = api_endpoints.GET_ADS(adsetId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const getInterestStats = async (adId, token) => {
  const url = api_endpoints.GET_STATS(adId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const userLogout = async token => {
  console.log('user token', token);
  const url = api_endpoints.LOG_OUT;
  console.log('url', url);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  console.log('res', res);
  return res.data;
};

/***/ }),

/***/ "OCjW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setInterestCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLoading; });
/* harmony import */ var _search_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Hn5k");

const searchStart = searchParams => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].START_SEARCH,
  payload: searchParams
});
const searchSuccess = data => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SEARCH_SUCCESS,
  payload: data
});
const searchFailure = error => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SEARCH_FAILURE,
  payload: error
});
const setInterestCount = count => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_INTEREST_COUNT,
  payload: count
});
const isLoading = status => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].IS_LOADING,
  payload: status
});

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  true && (_cachedData = this.sdc[pathname]) ? Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "fv9D":
/***/ (function(module, exports) {



/***/ }),

/***/ "fwXI":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hSKJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return siginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return signinStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return signupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return signupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return signupFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return siginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return facebookAuthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fbAuthFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return userLogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return userLogoutFailure; });
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/921");

const siginSuccess = signedIn => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_IN_SUCCESS,
  payload: signedIn
});
const signinStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_IN_START,
  payload: userCredentials
});
const signupStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_UP_START,
  payload: userCredentials
});
const signupSuccess = status => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_UP_SUCCESS,
  payload: status
});
const signupFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_UP_FAILURE,
  payload: error
});
const addingCurrentUser = userData => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADDING_CURRENT_USER,
  payload: userData
});
const setCurrentUser = user => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_CURRENT_USER,
  payload: user
});
const siginFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_IN_FAILURE,
  payload: error
});
const isLoading = loadingState => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOADING,
  payload: loadingState
});
const authFacebook = data => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AUTH_FACEBOOK,
  payload: data
});
const facebookAuthSuccess = token => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AUTH_FB_SUCCESS,
  payload: token
});
const fbAuthFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AUTH_FB_FAILURE,
  payload: error
});
const userLogout = token => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_OUT,
  payload: token
});
const userLogoutSuccess = () => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_OUT_SUCCESS
});
const userLogoutFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_OUT_FAILURE,
  payload: error
});

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hr7U":
/***/ (function(module, exports) {



/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xX2u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var style = __webpack_require__("hr7U");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__("fv9D");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var external_styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/user/user-actions.js
var user_actions = __webpack_require__("hSKJ");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/sideBar.js


var __jsx = external_react_default.a.createElement;


const SideBar = () => {
  return __jsx("div", {
    className: "jsx-3102106043" + " " + "menu"
  }, __jsx("div", {
    className: "jsx-3102106043" + " " + "logo"
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-3102106043"
  })), __jsx("div", {
    className: "jsx-3102106043" + " " + "menu-item"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", {
    className: "jsx-3102106043" + " " + "item"
  }, "Search"))), __jsx("div", {
    className: "jsx-3102106043" + " " + "menu-item"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", {
    className: "jsx-3102106043" + " " + "item"
  }, "Performance"))), __jsx(external_styled_jsx_style_default.a, {
    id: "3102106043"
  }, [".menu.jsx-3102106043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:inherit;padding:10px;background:#281742;position:fixed;z-index:10;}", ".menu-item.jsx-3102106043{padding:5px;margin-bottom:20px;cursor:pointer;font-size:15px;}", ".menu-item.jsx-3102106043:hover{background:#9482a3;border-radius:4px;}", ".logo.jsx-3102106043{margin-bottom:100px;width:30%;}", ".logo.jsx-3102106043 img.jsx-3102106043{width:100%;}", ".item.jsx-3102106043{color:#785999;}", ".menu-item.jsx-3102106043:hover .item.jsx-3102106043{color:white;}"]));
};

/* harmony default export */ var sideBar = (SideBar);
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "react-facebook-login/dist/facebook-login-render-props"
var facebook_login_render_props_ = __webpack_require__("G4lZ");
var facebook_login_render_props_default = /*#__PURE__*/__webpack_require__.n(facebook_login_render_props_);

// CONCATENATED MODULE: ./components/onboarding.js






var onboarding_jsx = external_react_default.a.createElement;




const Onboarding = props => {
  const {
    authFb,
    user,
    fbToken
  } = props;

  const faceAuthStart = () => {
    console.log("#### FB auth start");
  };

  const responseFacebook = async res => {
    const {
      accessToken,
      userID,
      name
    } = res;
    console.log('fb', res);
    authFb(accessToken, user.id, userID, name);
  };

  return onboarding_jsx("div", {
    className: "jsx-2292966542"
  }, onboarding_jsx(modal_default.a, {
    visible: !!!fbToken,
    centered: true,
    footer: null,
    closable: false,
    width: 800
  }, onboarding_jsx("div", {
    className: "jsx-2292966542" + " " + "modal-inner"
  }, onboarding_jsx("h2", {
    className: "jsx-2292966542"
  }, "Almost done"), onboarding_jsx("div", {
    className: "jsx-2292966542" + " " + "fb"
  }, onboarding_jsx("img", {
    src: "/images/facebook.svg",
    className: "jsx-2292966542"
  })), onboarding_jsx("h3", {
    className: "jsx-2292966542"
  }, "Lets search Facebook"), onboarding_jsx("p", {
    className: "jsx-2292966542"
  }, "Connect to Facebook to begin searching for interest"), onboarding_jsx(facebook_login_render_props_default.a, {
    appId: "539788533190548",
    autoLoad: true,
    fields: "name,email,id",
    onClick: faceAuthStart,
    scope: "ads_management, email",
    callback: responseFacebook,
    render: renderProps => onboarding_jsx("div", {
      className: "jsx-2292966542" + " " + "connect"
    }, onboarding_jsx(button_default.a, {
      disabled: !!fbToken,
      type: "primary",
      onClick: renderProps.onClick
    }, "Connect Facebook"))
  }))), onboarding_jsx(external_styled_jsx_style_default.a, {
    id: "2292966542"
  }, [".modal-inner.jsx-2292966542{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "h2.jsx-2292966542{margin-bottom:50px;}", ".connect.jsx-2292966542{margin-bottom:50px;}", ".fb.jsx-2292966542{width:50px;}", ".fb.jsx-2292966542 img.jsx-2292966542{width:100%;}"]));
};

const mapStateToProps = state => ({
  fbToken: state.user.fbToken,
  user: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  authFb: (token, id, fbId, name) => dispatch(Object(user_actions["b" /* authFacebook */])({
    token,
    id,
    fbId,
    name
  }))
});

/* harmony default export */ var onboarding = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Onboarding));
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./components/header.js


var header_jsx = external_react_default.a.createElement;


const Header = props => {
  const handleSettingsClick = () => {
    router_default.a.push('/settings');
  };

  return header_jsx("div", {
    id: "wrapper",
    className: "jsx-1448644373"
  }, header_jsx("div", {
    className: "jsx-1448644373"
  }, "Header"), header_jsx("div", {
    className: "jsx-1448644373" + " " + "count"
  }, header_jsx("p", {
    className: "jsx-1448644373"
  }, "3 free search: ", header_jsx("span", {
    className: "jsx-1448644373"
  }, "You have 2 left"))), header_jsx("div", {
    id: "actions",
    className: "jsx-1448644373"
  }, props.actions ? props.actions.map((action, index) => header_jsx("div", {
    key: index,
    className: "jsx-1448644373"
  }, action)) : '', header_jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-1448644373" + " " + "profile-wrapper"
  }, header_jsx("img", {
    src: "/images/user.svg",
    className: "jsx-1448644373"
  }))), header_jsx(external_styled_jsx_style_default.a, {
    id: "1448644373"
  }, ["#wrapper.jsx-1448644373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}", "#actions.jsx-1448644373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#actions.jsx-1448644373>*.jsx-1448644373{margin:0 5px 0 5px;}", ".count.jsx-1448644373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;}", ".count.jsx-1448644373 p.jsx-1448644373{margin:0;}", ".count.jsx-1448644373 span.jsx-1448644373{font-weight:bold;}", ".profile-wrapper.jsx-1448644373{width:50px;height:30px;}", ".profile-wrapper.jsx-1448644373 img.jsx-1448644373{width:100%;height:100%;cursor:pointer;}"]));
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./components/dashboardLayout.js








var dashboardLayout_jsx = external_react_default.a.createElement;










const DashboardLayout = props => {
  const {
    authFb,
    user,
    fbToken,
    userError,
    searchError
  } = props;
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (searchError || userError) {
      external_react_toastify_["toast"].error(`There was an error.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [userError, searchError]);
  Object(external_react_["useEffect"])(() => {
    if (user == null) {
      router.push("/signup");
    }
  }, [props.user]);

  const faceAuthStart = () => {
    console.log("#### FB auth start");
  };

  const responseFacebook = async res => {
    const {
      accessToken,
      userID
    } = res;
    console.log('fb', res);
    authFb(accessToken, user.id, userID);
  };

  const actions = [dashboardLayout_jsx(button_default.a, {
    style: {
      background: "#f86326",
      border: "none",
      color: "white"
    }
  }, "Get life time access")];
  return dashboardLayout_jsx("div", {
    className: "jsx-747387214" + " " + "layout"
  }, dashboardLayout_jsx(external_react_toastify_["ToastContainer"], {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true
  }), dashboardLayout_jsx(row_default.a, null, dashboardLayout_jsx(col_default.a, {
    style: {
      position: 'relative',
      height: '100vh',
      width: "16.66666667%"
    },
    span: 4
  }, dashboardLayout_jsx(sideBar, null)), dashboardLayout_jsx(col_default.a, {
    style: {
      padding: '0 20px 0 20px',
      minHeight: '100vh'
    },
    span: 20,
    className: "child-container"
  }, dashboardLayout_jsx("div", {
    className: "jsx-747387214" + " " + "header"
  }, dashboardLayout_jsx(header, {
    actions: actions
  })), dashboardLayout_jsx("div", {
    className: "jsx-747387214" + " " + "children"
  }, props.children), !fbToken && user ? dashboardLayout_jsx(onboarding, null) : "", dashboardLayout_jsx("footer", {
    className: "jsx-747387214"
  }, dashboardLayout_jsx("div", {
    className: "jsx-747387214" + " " + "footer"
  }, dashboardLayout_jsx("p", {
    className: "jsx-747387214" + " " + "footer-item"
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), dashboardLayout_jsx(external_styled_jsx_style_default.a, {
    id: "747387214"
  }, [".layout.jsx-747387214{position:relative;min-height:100vh;}", ".layout-body.jsx-747387214{position:relative;}", ".child-container.jsx-747387214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".children.jsx-747387214{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".header.jsx-747387214{position:fixed;top:0;width:81%;background-color:white;z-index:100;}", "footer.jsx-747387214{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}", ".footer.jsx-747387214{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}"]));
};

const dashboardLayout_mapStateToProps = state => ({
  user: state.user.currentUser,
  fbToken: state.user.fbToken,
  userError: state.user.error,
  searchError: state.search.error
});

const dashboardLayout_mapDispatchToProps = dispatch => ({
  authFb: (token, id, fbId) => dispatch(Object(user_actions["b" /* authFacebook */])({
    token,
    id,
    fbId
  }))
});

/* harmony default export */ var dashboardLayout = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(dashboardLayout_mapStateToProps, dashboardLayout_mapDispatchToProps)(DashboardLayout));

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });