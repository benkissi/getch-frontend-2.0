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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: signUp, signIn, fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, fbPaginate, getCampaigns, getAdsets, getAds, getInterestStats, userLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbAuthentication", function() { return fbAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInterest", function() { return searchInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestSuggestions", function() { return getInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileInterestSuggestions", function() { return compileInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdAccounts", function() { return getAdAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbPaginate", function() { return fbPaginate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaigns", function() { return getCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdsets", function() { return getAdsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAds", function() { return getAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestStats", function() { return getInterestStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ "./api/endpoints.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");



const signUp = async (email, password) => {
  console.log('getting', email, password);
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_UP;
  const data = {
    email,
    password
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data);
  const token = res.headers['x-auth'].replace('Bearer ', '');
  res.data['xToken'] = token;
  return res.data;
};
const signIn = async (email, password) => {
  console.log('sign in api');
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_IN;
  const params = {
    email,
    password
  };
  console.log('api', params);
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
  const token = res.headers['x-auth'].replace('Bearer ', '');
  res.data['xToken'] = token;
  return res.data;
};
const fbAuthentication = async (token, id, fbId, name) => {
  console.log('name api', name);
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].FB_AUTH;
  const params = {
    token,
    id,
    fbId,
    name
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
  console.log('res data', res.data);
  return res.data;
};
const searchInterest = async (token, keyword, limit = 500) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].FB_INTEREST_SEARCH(2.11);
  const params = {
    q: keyword,
    type: 'adinterest',
    access_token: token,
    limit
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
  return res.data;
};
const getInterestSuggestions = async (token, keywords, limit = 100) => {
  let interestSuggestions = [];
  let response;
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].FB_INTEREST_SEARCH(2.11);
  const params = {
    interest_list: keywords,
    type: 'adinterestsuggestion',
    access_token: token,
    limit: limit
  };
  response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
  interestSuggestions.push(...response.data.data);
  let page = 0;

  while (response.data.paging.next) {
    if (page > 5) {
      break;
    }

    response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(response.data.paging.next);
    interestSuggestions.push(...response.data.data);
    page++;
  }

  return interestSuggestions;
};
const compileInterestSuggestions = async (token, keywords, limit = 100) => {
  if (keywords.length > 200) {
    let suggestions = [];
    const dataArray = Object(_utils_search__WEBPACK_IMPORTED_MODULE_2__["splitArray"])(keywords, 200);

    for (let i = 0; i < dataArray.length; i++) {
      suggestions.push(...(await getInterestSuggestions(token, dataArray[i], limit)));
    }

    return suggestions;
  }

  return await getInterestSuggestions(token, keywords, limit);
};
const getProducts = async shopName => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRODUCTS(shopName);
  const params = {
    limit: 10
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
  console.log(res.data);
};
const getAdAccounts = async (fbId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ADACCOUNTS(fbId);
  const headers = {
    'Authorization': token
  };
  const params = {
    fbId
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers,
    params
  });
  return res.data;
};
const fbPaginate = async page => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(page);
  return res.data;
};
const getCampaigns = async (accountId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_CAMPAIGNS(accountId);
  const headers = {
    'Authorization': token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const getAdsets = async (camaignId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ADSETS(camaignId);
  const headers = {
    'Authorization': token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const getAds = async (adsetId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ADS(adsetId);
  const headers = {
    'Authorization': token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const getInterestStats = async (adId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_STATS(adId);
  const headers = {
    'Authorization': token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const userLogout = async token => {
  console.log('user token', token);
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_OUT;
  console.log('url', url);
  const headers = {
    'Authorization': token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  console.log('res', res);
  return res.data;
};

/***/ }),

/***/ "./api/endpoints.js":
/*!**************************!*\
  !*** ./api/endpoints.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

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
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
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
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-toastify/scss/main.scss":
/*!****************************************************!*\
  !*** ./node_modules/react-toastify/scss/main.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_scss_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/scss/main.scss */ "./node_modules/react-toastify/scss/main.scss");
/* harmony import */ var react_toastify_scss_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_scss_main_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"], {
  debug: true
})(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const defaultLayout = props => __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 40
      }
    }, props.children);

    const {
      Component,
      pageProps,
      store
    } = this.props;
    const Layout = Component.Layout || defaultLayout;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(Layout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnVisibilityChange: true,
      draggable: true,
      pauseOnHover: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })));
  }

}));

/***/ }),

/***/ "./redux/root-reducer.js":
/*!*******************************!*\
  !*** ./redux/root-reducer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user-reducer */ "./redux/user/user-reducer.js");
/* harmony import */ var _search_search_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search-reducer */ "./redux/search/search-reducer.js");





const persistConfig = {
  key: "root",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default())
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  search: _search_search_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistConfig, rootReducer));

/***/ }),

/***/ "./redux/root-saga.js":
/*!****************************!*\
  !*** ./redux/root-saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_user_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user-sagas */ "./redux/user/user-sagas.js");
/* harmony import */ var _search_search_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search-sagas */ "./redux/search/search-sagas.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_user_user_sagas__WEBPACK_IMPORTED_MODULE_1__["userSagas"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_search_search_sagas__WEBPACK_IMPORTED_MODULE_2__["searchSagas"])]);
}

/***/ }),

/***/ "./redux/search/search-actions.js":
/*!****************************************!*\
  !*** ./redux/search/search-actions.js ***!
  \****************************************/
/*! exports provided: searchStart, searchSuccess, searchFailure, setInterestCount, isLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStart", function() { return searchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSuccess", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFailure", function() { return searchFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInterestCount", function() { return setInterestCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony import */ var _search_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-types */ "./redux/search/search-types.js");

const searchStart = searchParams => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].START_SEARCH,
  payload: searchParams
});
const searchSuccess = data => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_SUCCESS,
  payload: data
});
const searchFailure = error => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_FAILURE,
  payload: error
});
const setInterestCount = count => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_INTEREST_COUNT,
  payload: count
});
const isLoading = status => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].IS_LOADING,
  payload: status
});

/***/ }),

/***/ "./redux/search/search-reducer.js":
/*!****************************************!*\
  !*** ./redux/search/search-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-types */ "./redux/search/search-types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  keyword: null,
  interests: null,
  searchCount: null,
  error: null,
  loading: false,
  interestCount: null
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_SUCCESS:
      return _objectSpread({}, state, {
        interests: action.payload.data,
        keyword: action.payload.keyword,
        error: null
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].IS_LOADING:
      return _objectSpread({}, state, {
        loading: action.payload
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_COUNT:
      return _objectSpread({}, state, {
        searchCount: action.payload
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_INTEREST_COUNT:
      return _objectSpread({}, state, {
        interestCount: action.payload
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (searchReducer);

/***/ }),

/***/ "./redux/search/search-sagas.js":
/*!**************************************!*\
  !*** ./redux/search/search-sagas.js ***!
  \**************************************/
/*! exports provided: onSearchStart, searchSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSearchStart", function() { return onSearchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSagas", function() { return searchSagas; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-actions */ "./redux/search/search-actions.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/search */ "./utils/search.js");
/* harmony import */ var _search_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-types */ "./redux/search/search-types.js");
/* harmony import */ var _search_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-selectors */ "./redux/search/search-selectors.js");







function* getInterest({
  payload
}) {
  try {
    const {
      token,
      value,
      limit
    } = payload;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["isLoading"])(true));
    const data = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["searchInterest"])(token, value, limit);
    const levelOne = Object(_utils_search__WEBPACK_IMPORTED_MODULE_3__["addScore"])(data.data, 5);
    let names = Object(_utils_search__WEBPACK_IMPORTED_MODULE_3__["getInterestNames"])(data.data);
    const suggestions = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["compileInterestSuggestions"])(token, names);
    const levelTwo = Object(_utils_search__WEBPACK_IMPORTED_MODULE_3__["addScore"])(suggestions, 3);
    let allInterest = [...levelOne, ...levelTwo];
    const rankedList = allInterest.map(interest => {
      const exist = Object(_utils_search__WEBPACK_IMPORTED_MODULE_3__["containsKeyword"])(value, interest.name);

      if (exist !== -1) {
        interest['relevance'] = interest.relevance + 3;
      }

      return interest;
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["searchSuccess"])({
      data: rankedList,
      keyword: value
    }));
    const total = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_search_selectors__WEBPACK_IMPORTED_MODULE_5__["selectInterestTotal"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["setInterestCount"])(total));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["isLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["isLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["searchFailure"])(error));
  }
}

function* onSearchStart() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_search_types__WEBPACK_IMPORTED_MODULE_4__["default"].START_SEARCH, getInterest);
}
function* searchSagas() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSearchStart)]);
}

/***/ }),

/***/ "./redux/search/search-selectors.js":
/*!******************************************!*\
  !*** ./redux/search/search-selectors.js ***!
  \******************************************/
/*! exports provided: selectInterestTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInterestTotal", function() { return selectInterestTotal; });
const selectInterestTotal = state => {
  return state.search.interests.reduce((accumulator, item) => {
    return accumulator + 1;
  }, 0);
};

/***/ }),

/***/ "./redux/search/search-types.js":
/*!**************************************!*\
  !*** ./redux/search/search-types.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SearchActionTypes = {
  START_SEARCH: 'START_SEARCH',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',
  IS_LOADING: 'IS_LOADING',
  SET_COUNT: 'SET_COUNT',
  SET_INTEREST_COUNT: 'SET_INTEREST_COUNT'
};
/* harmony default export */ __webpack_exports__["default"] = (SearchActionTypes);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-reducer */ "./redux/root-reducer.js");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-saga */ "./redux/root-saga.js");






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
const middlewares = [sagaMiddleware]; // if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"])(store);

const makeStore = initialState => {
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ "./redux/user/user-actions.js":
/*!************************************!*\
  !*** ./redux/user/user-actions.js ***!
  \************************************/
/*! exports provided: siginSuccess, signinStart, signupStart, signupSuccess, signupFailure, addingCurrentUser, setCurrentUser, siginFailure, isLoading, authFacebook, facebookAuthSuccess, fbAuthFailure, userLogout, userLogoutSuccess, userLogoutFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginSuccess", function() { return siginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signinStart", function() { return signinStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupStart", function() { return signupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupSuccess", function() { return signupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupFailure", function() { return signupFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addingCurrentUser", function() { return addingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginFailure", function() { return siginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFacebook", function() { return authFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuthSuccess", function() { return facebookAuthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbAuthFailure", function() { return fbAuthFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogoutSuccess", function() { return userLogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogoutFailure", function() { return userLogoutFailure; });
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");

const siginSuccess = signedIn => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_SUCCESS,
  payload: signedIn
});
const signinStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_START,
  payload: userCredentials
});
const signupStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_UP_START,
  payload: userCredentials
});
const signupSuccess = status => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_UP_SUCCESS,
  payload: status
});
const signupFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_UP_FAILURE,
  payload: error
});
const addingCurrentUser = userData => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].ADDING_CURRENT_USER,
  payload: userData
});
const setCurrentUser = user => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CURRENT_USER,
  payload: user
});
const siginFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_FAILURE,
  payload: error
});
const isLoading = loadingState => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING,
  payload: loadingState
});
const authFacebook = data => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FACEBOOK,
  payload: data
});
const facebookAuthSuccess = token => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FB_SUCCESS,
  payload: token
});
const fbAuthFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FB_FAILURE,
  payload: error
});
const userLogout = token => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT,
  payload: token
});
const userLogoutSuccess = () => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT_SUCCESS
});
const userLogoutFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT_FAILURE,
  payload: error
});

/***/ }),

/***/ "./redux/user/user-reducer.js":
/*!************************************!*\
  !*** ./redux/user/user-reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");
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
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_SUCCESS:
      return _objectSpread({}, state, {
        signedIn: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING:
      return _objectSpread({}, state, {
        loading: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FB_SUCCESS:
      return _objectSpread({}, state, {
        fbToken: _objectSpread({}, action.payload),
        currentUser: _objectSpread({}, state.currentUser, {
          name: action.payload.name
        }),
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT_SUCCESS:
      return _objectSpread({}, state, {
        currentUser: null,
        fbToken: null,
        logout: true,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FB_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_UP_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./redux/user/user-sagas.js":
/*!**********************************!*\
  !*** ./redux/user/user-sagas.js ***!
  \**********************************/
/*! exports provided: setUser, signUpUser, signInUser, facebookAuth, logout, onAddingCurrentUser, onSignupStart, onSigninStart, onAuthFacebook, onLogout, userSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpUser", function() { return signUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUser", function() { return signInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuth", function() { return facebookAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddingCurrentUser", function() { return onAddingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSignupStart", function() { return onSignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSigninStart", function() { return onSigninStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthFacebook", function() { return onAuthFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSagas", function() { return userSagas; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");




function* setUser({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));

    if (!payload) {
      throw new Error("No user");
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentUser"])(payload));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["siginSuccess"])(true));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["siginFailure"])(error));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
  }
}
function* signUpUser({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));
    console.log("the payload", payload);
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["signUp"])(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken
    };
    console.log("User data", userData);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentUser"])(userData));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["signupSuccess"])(true));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["signupFailure"])(error));
  }
}
function* signInUser({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["signIn"])(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentUser"])(userData));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    console.log("signin response", userData);
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["siginFailure"])(error));
  }
}
function* facebookAuth({
  payload
}) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));

  try {
    const {
      token,
      id,
      fbId,
      name
    } = payload;
    console.log('payload', payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));
    const fbToken = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["fbAuthentication"])(token, id, fbId, name);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["facebookAuthSuccess"])(fbToken));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["fbAuthFailure"])(error));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
  }
}
function* logout({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["userLogout"])(payload);

    if (res === true) {
      console.log('logout done');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogoutSuccess"])());
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogoutFailure"])(error));
  }
}
function* onAddingCurrentUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_1__["default"].ADDING_CURRENT_USER, setUser);
}
function* onSignupStart() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_UP_START, signUpUser);
}
function* onSigninStart() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_IN_START, signInUser);
}
function* onAuthFacebook() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_1__["default"].AUTH_FACEBOOK, facebookAuth);
}
function* onLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_OUT, logout);
}
function* userSagas() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onAuthFacebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onAddingCurrentUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSigninStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSignupStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onLogout)]);
}

/***/ }),

/***/ "./redux/user/user-types.js":
/*!**********************************!*\
  !*** ./redux/user/user-types.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (UserActionTypes);

/***/ }),

/***/ "./utils/search.js":
/*!*************************!*\
  !*** ./utils/search.js ***!
  \*************************/
/*! exports provided: addScore, getInterestNames, containsKeyword, splitArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScore", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestNames", function() { return getInterestNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsKeyword", function() { return containsKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map