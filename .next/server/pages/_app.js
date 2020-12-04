module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/*! exports provided: signUp, signIn, fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, fbPaginate, getCampaigns, getAdsets, getAds, getInterestStats, userLogout, updateSearchCount, verifyPayment */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchCount", function() { return updateSearchCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyPayment", function() { return verifyPayment; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ "./api/endpoints.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");



const signUp = async (email, password) => {
  console.log("getting", email, password);
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_UP;
  console.log('url', url);
  const data = {
    email,
    password
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data);
  const token = res.headers["x-auth"].replace("Bearer ", "");
  res.data["xToken"] = token;
  return res.data;
};
const signIn = async (email, password) => {
  console.log("sign in api");
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_IN;
  const params = {
    email,
    password
  };
  console.log("api", params);
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
  const token = res.headers["x-auth"].replace("Bearer ", "");
  res.data["xToken"] = token;
  return res.data;
};
const fbAuthentication = async (token, id, fbId, name) => {
  console.log("name api", name);
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
  console.log("res data", res.data);
  return res.data;
};
const searchInterest = async (token, keyword, limit = 500) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].FB_INTEREST_SEARCH(2.11);
  const params = {
    q: keyword,
    type: "adinterest",
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
    type: "adinterestsuggestion",
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
    Authorization: token
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
    Authorization: token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const getAdsets = async (camaignId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ADSETS(camaignId);
  const headers = {
    Authorization: token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const getAds = async (adsetId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ADS(adsetId);
  const headers = {
    Authorization: token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const getInterestStats = async (adId, token) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].GET_STATS(adId);
  const headers = {
    Authorization: token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  return res.data;
};
const userLogout = async token => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_OUT;
  const headers = {
    Authorization: token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  console.log("res", res);
  return res.data;
};
const updateSearchCount = async token => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_SEARCH_COUNT;
  const headers = {
    Authorization: token
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    headers
  });
  console.log("count", res);
  return res.data;
};
const verifyPayment = async (token, plan, ref) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].VERIFY_PAYMENT;
  const headers = {
    Authorization: token
  };
  const data = {
    plan,
    ref
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, {
    headers
  });
  console.log("api", res.data);
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
  GET_PRODUCTS: shop => `${"http://localhost:8080/"}shopify/products/${shop}`,
  FB_AUTH: `${"http://localhost:8080/"}facebook/auth`,
  FB_INTEREST_SEARCH: apiVersion => `https://graph.facebook.com/v${apiVersion}/search`,
  GET_ADACCOUNTS: fbId => `${"http://localhost:8080/"}facebook/adaccounts/${fbId}`,
  GET_CAMPAIGNS: accountId => `${"http://localhost:8080/"}facebook/campaigns/${accountId}`,
  GET_ADSETS: campaignId => `${"http://localhost:8080/"}facebook/adsets/${campaignId}`,
  GET_ADS: adsetId => `${"http://localhost:8080/"}facebook/ads/${adsetId}`,
  GET_STATS: adId => `${"http://localhost:8080/"}facebook/stats/${adId}`,
  SIGN_UP: `${"http://localhost:8080/"}users/signup`,
  SIGN_IN: `${"http://localhost:8080/"}users/signin`,
  LOG_OUT: `${"http://localhost:8080/"}users/logout`,
  UPDATE_SEARCH_COUNT: `${"http://localhost:8080/"}facebook/count`,
  VERIFY_PAYMENT: `${"http://localhost:8080/"}payments/verify`
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
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
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
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
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
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
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

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
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
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-gtm-module */ "react-gtm-module");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/ben/code/getch/getch-frontend-2.0/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // import "react-toastify/scss/main.scss";



/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"], {
  debug: true
})(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  componentDidMount() {
    const tagManagerArgs = {
      gtmId: "GTM-WZH3SMB"
    };
    react_gtm_module__WEBPACK_IMPORTED_MODULE_7___default.a.initialize(tagManagerArgs);
  }

  render() {
    const defaultLayout = props => __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
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
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx(Layout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
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
        lineNumber: 29,
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
/*! exports provided: searchStart, searchSuccess, searchFailure, setInterestCount, isLoading, setCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStart", function() { return searchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSuccess", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFailure", function() { return searchFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInterestCount", function() { return setInterestCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCount", function() { return setCount; });
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
const setCount = count => ({
  type: _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_COUNT,
  payload: count
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
  searchCount: 0,
  error: null,
  loading: false,
  interestCount: null
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        interests: action.payload.data,
        keyword: action.payload.keyword,
        searchCount: action.payload.count,
        error: null
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].IS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_COUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchCount: action.payload
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_INTEREST_COUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        interestCount: action.payload
      });

    case _search_types__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
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
      limit,
      xToken
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
        interest["relevance"] = interest.relevance + 3;
      }

      const searchName = interest.name.toLowerCase().split(" ").join("+");
      interest["links"] = [`https://www.facebook.com/search/pages/?q=${searchName}`, `https://www.google.com/search?q=${searchName}`]; // const formatter = new Intl.NumberFormat("en-US");
      // interest["audience_size"] = formatter.format(interest["audience_size"]);

      return interest;
    });
    const {
      count
    } = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["updateSearchCount"])(xToken);
    console.log("count saga", count);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_1__["searchSuccess"])({
      data: rankedList,
      keyword: value,
      count
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
const middlewares = [sagaMiddleware];

if (true) {
  middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a);
}

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
/*! exports provided: siginSuccess, signinStart, signupStart, signupSuccess, signupFailure, addingCurrentUser, setCurrentUser, siginFailure, isLoading, authFacebook, facebookAuthSuccess, fbAuthFailure, userLogout, userLogoutSuccess, userLogoutFailure, verifyPayment, paymentSuccessful, paymentFailure */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyPayment", function() { return verifyPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentSuccessful", function() { return paymentSuccessful; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentFailure", function() { return paymentFailure; });
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
const verifyPayment = details => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].VERIFY_PAYMENT,
  payload: details
});
const paymentSuccessful = plan => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].PAYMENT_SUCCESSFUL,
  payload: plan
});
const paymentFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].PAYMENT_FAILED,
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
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.payload,
        error: null,
        signedIn: true,
        logout: false
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signedIn: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FB_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        fbToken: _objectSpread({}, action.payload),
        currentUser: _objectSpread(_objectSpread({}, state.currentUser), {}, {
          name: action.payload.name
        }),
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: null,
        fbToken: {
          token: null,
          expires: null
        },
        signedIn: false,
        logout: true,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].PAYMENT_SUCCESSFUL:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: _objectSpread(_objectSpread({}, state.currentUser), {}, {
          plan: action.payload
        }),
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH_FB_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_UP_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].PAYMENT_FAILED:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
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
/*! exports provided: setUser, signUpUser, signInUser, facebookAuth, logout, verifyUserPayment, onAddingCurrentUser, onSignupStart, onSigninStart, onAuthFacebook, onLogout, onVerifyPayment, userSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpUser", function() { return signUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUser", function() { return signInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuth", function() { return facebookAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyUserPayment", function() { return verifyUserPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddingCurrentUser", function() { return onAddingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSignupStart", function() { return onSignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSigninStart", function() { return onSigninStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthFacebook", function() { return onAuthFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onVerifyPayment", function() { return onVerifyPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSagas", function() { return userSagas; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _search_search_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search-actions */ "./redux/search/search-actions.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");





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
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["signUp"])(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken,
      plan: res.plan
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentUser"])(userData));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_search_actions__WEBPACK_IMPORTED_MODULE_3__["setCount"])(res.searchCount));
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
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["signIn"])(payload.email, payload.password);
    const userData = {
      id: res._id,
      name: res.name,
      email: res.email,
      xToken: res.xToken,
      plan: res.plan
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentUser"])(userData));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_search_search_actions__WEBPACK_IMPORTED_MODULE_3__["setCount"])(res.searchCount));
    console.log("search count", res.searchCount);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
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
    console.log("payload", payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));
    const fbToken = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["fbAuthentication"])(token, id, fbId, name);
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
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["userLogout"])(payload);

    if (res === true) {
      console.log("logout done");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogoutSuccess"])());
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogoutFailure"])(error));
  }
}
function* verifyUserPayment({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(true));
    const {
      token,
      ref,
      plan
    } = payload;
    const res = yield Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["verifyPayment"])(token, plan, ref);
    console.log("user saga", res);

    if (res.plan == "PL002") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["paymentSuccessful"])(res.plan));
      console.log("paid");
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["isLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_2__["paymentFailure"])(error));
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
function* onVerifyPayment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_1__["default"].VERIFY_PAYMENT, verifyUserPayment);
}
function* userSagas() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onAuthFacebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onAddingCurrentUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSigninStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSignupStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onVerifyPayment)]);
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
  LOG_OUT_FAILURE: "LOG_OUT_FAILURE",
  VERIFY_PAYMENT: "VERIFY_PAYMENT",
  PAYMENT_SUCCESSFUL: "PAYMENT_SUCCESSFUL",
  PAYMENT_FAILED: "PAYMENT_FAILED"
};
/* harmony default export */ __webpack_exports__["default"] = (UserActionTypes);

/***/ }),

/***/ "./utils/search.js":
/*!*************************!*\
  !*** ./utils/search.js ***!
  \*************************/
/*! exports provided: addScore, getInterestNames, containsKeyword, splitArray, addLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScore", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestNames", function() { return getInterestNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsKeyword", function() { return containsKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLinks", function() { return addLinks; });
const addScore = (data, score) => {
  const updated = data.map(item => {
    if (item.hasOwnProperty("relevance")) {
      return item.relevance = item.relevance + score;
    }

    item["relevance"] = score;
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
const addLinks = array => {
  const updated = data.map(item => {
    item["links"] = [`https://www.facebook.com/search/pages/?q=${item.name}`, `https://www.google.com/search?q=${item.name}`];
    return item;
  });
  return updated;
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

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL2VuZHBvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3Jvb3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290LXNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2VhcmNoL3NlYXJjaC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlYXJjaC9zZWFyY2gtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zZWFyY2gvc2VhcmNoLXNhZ2FzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlYXJjaC9zZWFyY2gtc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlYXJjaC9zZWFyY2gtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLXNhZ2FzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3VzZXIvdXNlci10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWd0bS1tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInVybCIsImVuZHBvaW50cyIsIlNJR05fVVAiLCJkYXRhIiwicmVzIiwiYXhpb3MiLCJwb3N0IiwidG9rZW4iLCJoZWFkZXJzIiwicmVwbGFjZSIsInNpZ25JbiIsIlNJR05fSU4iLCJwYXJhbXMiLCJnZXQiLCJmYkF1dGhlbnRpY2F0aW9uIiwiaWQiLCJmYklkIiwibmFtZSIsIkZCX0FVVEgiLCJzZWFyY2hJbnRlcmVzdCIsImtleXdvcmQiLCJsaW1pdCIsIkZCX0lOVEVSRVNUX1NFQVJDSCIsInEiLCJ0eXBlIiwiYWNjZXNzX3Rva2VuIiwiZ2V0SW50ZXJlc3RTdWdnZXN0aW9ucyIsImtleXdvcmRzIiwiaW50ZXJlc3RTdWdnZXN0aW9ucyIsInJlc3BvbnNlIiwiaW50ZXJlc3RfbGlzdCIsInB1c2giLCJwYWdlIiwicGFnaW5nIiwibmV4dCIsImNvbXBpbGVJbnRlcmVzdFN1Z2dlc3Rpb25zIiwibGVuZ3RoIiwic3VnZ2VzdGlvbnMiLCJkYXRhQXJyYXkiLCJzcGxpdEFycmF5IiwiaSIsImdldFByb2R1Y3RzIiwic2hvcE5hbWUiLCJHRVRfUFJPRFVDVFMiLCJnZXRBZEFjY291bnRzIiwiR0VUX0FEQUNDT1VOVFMiLCJBdXRob3JpemF0aW9uIiwiZmJQYWdpbmF0ZSIsImdldENhbXBhaWducyIsImFjY291bnRJZCIsIkdFVF9DQU1QQUlHTlMiLCJnZXRBZHNldHMiLCJjYW1haWduSWQiLCJHRVRfQURTRVRTIiwiZ2V0QWRzIiwiYWRzZXRJZCIsIkdFVF9BRFMiLCJnZXRJbnRlcmVzdFN0YXRzIiwiYWRJZCIsIkdFVF9TVEFUUyIsInVzZXJMb2dvdXQiLCJMT0dfT1VUIiwidXBkYXRlU2VhcmNoQ291bnQiLCJVUERBVEVfU0VBUkNIX0NPVU5UIiwidmVyaWZ5UGF5bWVudCIsInBsYW4iLCJyZWYiLCJWRVJJRllfUEFZTUVOVCIsInNob3AiLCJwcm9jZXNzIiwiYXBpVmVyc2lvbiIsImNhbXBhaWduSWQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIndpdGhSZWR1eCIsIm1ha2VTdG9yZSIsImRlYnVnIiwiTXlBcHAiLCJjb21wb25lbnREaWRNb3VudCIsInRhZ01hbmFnZXJBcmdzIiwiZ3RtSWQiLCJUYWdNYW5hZ2VyIiwiaW5pdGlhbGl6ZSIsImRlZmF1bHRMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwic3RvcmUiLCJMYXlvdXQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInVzZXJSZWR1Y2VyIiwic2VhcmNoIiwic2VhcmNoUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwicm9vdFNhZ2EiLCJhbGwiLCJjYWxsIiwidXNlclNhZ2FzIiwic2VhcmNoU2FnYXMiLCJzZWFyY2hTdGFydCIsInNlYXJjaFBhcmFtcyIsIlNlYXJjaEFjdGlvblR5cGVzIiwiU1RBUlRfU0VBUkNIIiwicGF5bG9hZCIsInNlYXJjaFN1Y2Nlc3MiLCJTRUFSQ0hfU1VDQ0VTUyIsInNlYXJjaEZhaWx1cmUiLCJlcnJvciIsIlNFQVJDSF9GQUlMVVJFIiwic2V0SW50ZXJlc3RDb3VudCIsImNvdW50IiwiU0VUX0lOVEVSRVNUX0NPVU5UIiwiaXNMb2FkaW5nIiwic3RhdHVzIiwiSVNfTE9BRElORyIsInNldENvdW50IiwiU0VUX0NPVU5UIiwiSU5JVElBTF9TVEFURSIsImludGVyZXN0cyIsInNlYXJjaENvdW50IiwibG9hZGluZyIsImludGVyZXN0Q291bnQiLCJzdGF0ZSIsImFjdGlvbiIsImdldEludGVyZXN0IiwidmFsdWUiLCJ4VG9rZW4iLCJwdXQiLCJsZXZlbE9uZSIsImFkZFNjb3JlIiwibmFtZXMiLCJnZXRJbnRlcmVzdE5hbWVzIiwibGV2ZWxUd28iLCJhbGxJbnRlcmVzdCIsInJhbmtlZExpc3QiLCJtYXAiLCJpbnRlcmVzdCIsImV4aXN0IiwiY29udGFpbnNLZXl3b3JkIiwicmVsZXZhbmNlIiwic2VhcmNoTmFtZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwidG90YWwiLCJzZWxlY3QiLCJzZWxlY3RJbnRlcmVzdFRvdGFsIiwib25TZWFyY2hTdGFydCIsInRha2VMYXRlc3QiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsIml0ZW0iLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGVXYXJlIiwibWlkZGxld2FyZXMiLCJsb2dnZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsInBlcnNpc3RTdG9yZSIsImluaXRpYWxTdGF0ZSIsInNpZ2luU3VjY2VzcyIsInNpZ25lZEluIiwiVXNlckFjdGlvblR5cGVzIiwiU0lHTl9JTl9TVUNDRVNTIiwic2lnbmluU3RhcnQiLCJ1c2VyQ3JlZGVudGlhbHMiLCJTSUdOX0lOX1NUQVJUIiwic2lnbnVwU3RhcnQiLCJTSUdOX1VQX1NUQVJUIiwic2lnbnVwU3VjY2VzcyIsIlNJR05fVVBfU1VDQ0VTUyIsInNpZ251cEZhaWx1cmUiLCJTSUdOX1VQX0ZBSUxVUkUiLCJhZGRpbmdDdXJyZW50VXNlciIsInVzZXJEYXRhIiwiQURESU5HX0NVUlJFTlRfVVNFUiIsInNldEN1cnJlbnRVc2VyIiwiU0VUX0NVUlJFTlRfVVNFUiIsInNpZ2luRmFpbHVyZSIsIlNJR05fSU5fRkFJTFVSRSIsImxvYWRpbmdTdGF0ZSIsIkxPQURJTkciLCJhdXRoRmFjZWJvb2siLCJBVVRIX0ZBQ0VCT09LIiwiZmFjZWJvb2tBdXRoU3VjY2VzcyIsIkFVVEhfRkJfU1VDQ0VTUyIsImZiQXV0aEZhaWx1cmUiLCJBVVRIX0ZCX0ZBSUxVUkUiLCJ1c2VyTG9nb3V0U3VjY2VzcyIsIkxPR19PVVRfU1VDQ0VTUyIsInVzZXJMb2dvdXRGYWlsdXJlIiwiTE9HX09VVF9GQUlMVVJFIiwiZGV0YWlscyIsInBheW1lbnRTdWNjZXNzZnVsIiwiUEFZTUVOVF9TVUNDRVNTRlVMIiwicGF5bWVudEZhaWx1cmUiLCJQQVlNRU5UX0ZBSUxFRCIsImN1cnJlbnRVc2VyIiwiZmJUb2tlbiIsImV4cGlyZXMiLCJsb2dvdXQiLCJzZXRVc2VyIiwiRXJyb3IiLCJzaWduVXBVc2VyIiwiX2lkIiwic2lnbkluVXNlciIsImZhY2Vib29rQXV0aCIsInZlcmlmeVVzZXJQYXltZW50Iiwib25BZGRpbmdDdXJyZW50VXNlciIsIm9uU2lnbnVwU3RhcnQiLCJvblNpZ25pblN0YXJ0Iiwib25BdXRoRmFjZWJvb2siLCJvbkxvZ291dCIsIm9uVmVyaWZ5UGF5bWVudCIsIkFVVEhfRkJfU1RBUlQiLCJzY29yZSIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsInBocmFzZSIsImxvd2VyUGhyYXNlIiwibG93ZXJLZXkiLCJpbmRleE9mIiwiYXJyYXkiLCJzaXplIiwic2V0TnVtYmVyIiwiTWF0aCIsImNlaWwiLCJzdGFydCIsImFycmF5U3BsaXQiLCJzZXQiLCJzbGljZSIsImFkZExpbmtzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FB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Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tIFwiLi9lbmRwb2ludHNcIjtcbmltcG9ydCB7IHNwbGl0QXJyYXkgfSBmcm9tIFwiLi4vdXRpbHMvc2VhcmNoXCI7XG5cbmV4cG9ydCBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiZ2V0dGluZ1wiLCBlbWFpbCwgcGFzc3dvcmQpO1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuU0lHTl9VUDtcbiAgY29uc29sZS5sb2coJ3VybCcsIHVybClcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBlbWFpbCxcbiAgICBwYXNzd29yZCxcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XG4gIGNvbnN0IHRva2VuID0gcmVzLmhlYWRlcnNbXCJ4LWF1dGhcIl0ucmVwbGFjZShcIkJlYXJlciBcIiwgXCJcIik7XG4gIHJlcy5kYXRhW1wieFRva2VuXCJdID0gdG9rZW47XG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwic2lnbiBpbiBhcGlcIik7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5TSUdOX0lOO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgZW1haWwsXG4gICAgcGFzc3dvcmQsXG4gIH07XG4gIGNvbnNvbGUubG9nKFwiYXBpXCIsIHBhcmFtcyk7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIHBhcmFtcyxcbiAgfSk7XG4gIGNvbnN0IHRva2VuID0gcmVzLmhlYWRlcnNbXCJ4LWF1dGhcIl0ucmVwbGFjZShcIkJlYXJlciBcIiwgXCJcIik7XG4gIHJlcy5kYXRhW1wieFRva2VuXCJdID0gdG9rZW47XG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmYkF1dGhlbnRpY2F0aW9uID0gYXN5bmMgKHRva2VuLCBpZCwgZmJJZCwgbmFtZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIm5hbWUgYXBpXCIsIG5hbWUpO1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuRkJfQVVUSDtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHRva2VuLFxuICAgIGlkLFxuICAgIGZiSWQsXG4gICAgbmFtZSxcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgcGFyYW1zLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcInJlcyBkYXRhXCIsIHJlcy5kYXRhKTtcblxuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoSW50ZXJlc3QgPSBhc3luYyAodG9rZW4sIGtleXdvcmQsIGxpbWl0ID0gNTAwKSA9PiB7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5GQl9JTlRFUkVTVF9TRUFSQ0goMi4xMSk7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBxOiBrZXl3b3JkLFxuICAgIHR5cGU6IFwiYWRpbnRlcmVzdFwiLFxuICAgIGFjY2Vzc190b2tlbjogdG9rZW4sXG4gICAgbGltaXQsXG4gIH07XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBwYXJhbXMsXG4gIH0pO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW50ZXJlc3RTdWdnZXN0aW9ucyA9IGFzeW5jICh0b2tlbiwga2V5d29yZHMsIGxpbWl0ID0gMTAwKSA9PiB7XG4gIGxldCBpbnRlcmVzdFN1Z2dlc3Rpb25zID0gW107XG4gIGxldCByZXNwb25zZTtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkZCX0lOVEVSRVNUX1NFQVJDSCgyLjExKTtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGludGVyZXN0X2xpc3Q6IGtleXdvcmRzLFxuICAgIHR5cGU6IFwiYWRpbnRlcmVzdHN1Z2dlc3Rpb25cIixcbiAgICBhY2Nlc3NfdG9rZW46IHRva2VuLFxuICAgIGxpbWl0OiBsaW1pdCxcbiAgfTtcbiAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgcGFyYW1zLFxuICB9KTtcbiAgaW50ZXJlc3RTdWdnZXN0aW9ucy5wdXNoKC4uLnJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gIGxldCBwYWdlID0gMDtcbiAgd2hpbGUgKHJlc3BvbnNlLmRhdGEucGFnaW5nLm5leHQpIHtcbiAgICBpZiAocGFnZSA+IDUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChyZXNwb25zZS5kYXRhLnBhZ2luZy5uZXh0KTtcbiAgICBpbnRlcmVzdFN1Z2dlc3Rpb25zLnB1c2goLi4ucmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICBwYWdlKys7XG4gIH1cbiAgcmV0dXJuIGludGVyZXN0U3VnZ2VzdGlvbnM7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcGlsZUludGVyZXN0U3VnZ2VzdGlvbnMgPSBhc3luYyAoXG4gIHRva2VuLFxuICBrZXl3b3JkcyxcbiAgbGltaXQgPSAxMDBcbikgPT4ge1xuICBpZiAoa2V5d29yZHMubGVuZ3RoID4gMjAwKSB7XG4gICAgbGV0IHN1Z2dlc3Rpb25zID0gW107XG4gICAgY29uc3QgZGF0YUFycmF5ID0gc3BsaXRBcnJheShrZXl3b3JkcywgMjAwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgc3VnZ2VzdGlvbnMucHVzaChcbiAgICAgICAgLi4uKGF3YWl0IGdldEludGVyZXN0U3VnZ2VzdGlvbnModG9rZW4sIGRhdGFBcnJheVtpXSwgbGltaXQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGdldEludGVyZXN0U3VnZ2VzdGlvbnModG9rZW4sIGtleXdvcmRzLCBsaW1pdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoc2hvcE5hbWUpID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkdFVF9QUk9EVUNUUyhzaG9wTmFtZSk7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBsaW1pdDogMTAsXG4gIH07XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBwYXJhbXMsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBZEFjY291bnRzID0gYXN5bmMgKGZiSWQsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5HRVRfQURBQ0NPVU5UUyhmYklkKTtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBmYklkLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBoZWFkZXJzLFxuICAgIHBhcmFtcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGZiUGFnaW5hdGUgPSBhc3luYyAocGFnZSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQocGFnZSk7XG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYW1wYWlnbnMgPSBhc3luYyAoYWNjb3VudElkLCB0b2tlbikgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuR0VUX0NBTVBBSUdOUyhhY2NvdW50SWQpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gIH07XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIGhlYWRlcnMsXG4gIH0pO1xuXG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBZHNldHMgPSBhc3luYyAoY2FtYWlnbklkLCB0b2tlbikgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuR0VUX0FEU0VUUyhjYW1haWduSWQpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gIH07XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIGhlYWRlcnMsXG4gIH0pO1xuXG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBZHMgPSBhc3luYyAoYWRzZXRJZCwgdG9rZW4pID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkdFVF9BRFMoYWRzZXRJZCk7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgaGVhZGVycyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEludGVyZXN0U3RhdHMgPSBhc3luYyAoYWRJZCwgdG9rZW4pID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkdFVF9TVEFUUyhhZElkKTtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBoZWFkZXJzLFxuICB9KTtcblxuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9IGFzeW5jICh0b2tlbikgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuTE9HX09VVDtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBoZWFkZXJzLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xuXG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hDb3VudCA9IGFzeW5jICh0b2tlbikgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuVVBEQVRFX1NFQVJDSF9DT1VOVDtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHsgaGVhZGVycyB9KTtcbiAgY29uc29sZS5sb2coXCJjb3VudFwiLCByZXMpO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdmVyaWZ5UGF5bWVudCA9IGFzeW5jICh0b2tlbiwgcGxhbiwgcmVmKSA9PiB7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5WRVJJRllfUEFZTUVOVDtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgcGxhbixcbiAgICByZWYsXG4gIH07XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEsIHsgaGVhZGVycyB9KTtcbiAgY29uc29sZS5sb2coXCJhcGlcIiwgcmVzLmRhdGEpO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuIiwiY29uc3QgZW5kcG9pbnRzID0ge1xuICBHRVRfUFJPRFVDVFM6IChzaG9wKSA9PiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1zaG9waWZ5L3Byb2R1Y3RzLyR7c2hvcH1gLFxuICBGQl9BVVRIOiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1mYWNlYm9vay9hdXRoYCxcbiAgRkJfSU5URVJFU1RfU0VBUkNIOiAoYXBpVmVyc2lvbikgPT5cbiAgICBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdiR7YXBpVmVyc2lvbn0vc2VhcmNoYCxcbiAgR0VUX0FEQUNDT1VOVFM6IChmYklkKSA9PlxuICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfWZhY2Vib29rL2FkYWNjb3VudHMvJHtmYklkfWAsXG4gIEdFVF9DQU1QQUlHTlM6IChhY2NvdW50SWQpID0+XG4gICAgYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9ZmFjZWJvb2svY2FtcGFpZ25zLyR7YWNjb3VudElkfWAsXG4gIEdFVF9BRFNFVFM6IChjYW1wYWlnbklkKSA9PlxuICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfWZhY2Vib29rL2Fkc2V0cy8ke2NhbXBhaWduSWR9YCxcbiAgR0VUX0FEUzogKGFkc2V0SWQpID0+IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfWZhY2Vib29rL2Fkcy8ke2Fkc2V0SWR9YCxcbiAgR0VUX1NUQVRTOiAoYWRJZCkgPT4gYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9ZmFjZWJvb2svc3RhdHMvJHthZElkfWAsXG4gIFNJR05fVVA6IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXVzZXJzL3NpZ251cGAsXG4gIFNJR05fSU46IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXVzZXJzL3NpZ25pbmAsXG4gIExPR19PVVQ6IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXVzZXJzL2xvZ291dGAsXG4gIFVQREFURV9TRUFSQ0hfQ09VTlQ6IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfWZhY2Vib29rL2NvdW50YCxcbiAgVkVSSUZZX1BBWU1FTlQ6IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXBheW1lbnRzL3ZlcmlmeWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmRwb2ludHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IG1ha2VTdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG4vLyBpbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9zY3NzL21haW4uc2Nzc1wiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5Lm1pbi5jc3NcIjtcbmltcG9ydCBUYWdNYW5hZ2VyIGZyb20gXCJyZWFjdC1ndG0tbW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSkoXG4gIGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHRhZ01hbmFnZXJBcmdzID0ge1xuICAgICAgICBndG1JZDogXCJHVE0tV1pIM1NNQlwiLFxuICAgICAgfTtcblxuICAgICAgVGFnTWFuYWdlci5pbml0aWFsaXplKHRhZ01hbmFnZXJBcmdzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgZGVmYXVsdExheW91dCA9IChwcm9wcykgPT4gPGRpdj57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xuICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBMYXlvdXQgPSBDb21wb25lbnQuTGF5b3V0IHx8IGRlZmF1bHRMYXlvdXQ7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiXG4gICAgICAgICAgICAgIGF1dG9DbG9zZT17NTAwMH1cbiAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgICAgICAgcGF1c2VPblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4pO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xuXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlci91c2VyLXJlZHVjZXJcIjtcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gJy4vc2VhcmNoL3NlYXJjaC1yZWR1Y2VyJ1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBrZXk6IFwicm9vdFwiLFxuICBzdG9yYWdlXG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICBzZWFyY2g6IHNlYXJjaFJlZHVjZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB7IHVzZXJTYWdhcyB9IGZyb20gXCIuL3VzZXIvdXNlci1zYWdhc1wiO1xuaW1wb3J0IHtzZWFyY2hTYWdhc30gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLXNhZ2FzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgY2FsbCh1c2VyU2FnYXMpLFxuICAgIGNhbGwoc2VhcmNoU2FnYXMpXG4gIF0pO1xufVxuIiwiaW1wb3J0IFNlYXJjaEFjdGlvblR5cGVzIGZyb20gXCIuL3NlYXJjaC10eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoU3RhcnQgPSAoc2VhcmNoUGFyYW1zKSA9PiAoe1xuICB0eXBlOiBTZWFyY2hBY3Rpb25UeXBlcy5TVEFSVF9TRUFSQ0gsXG4gIHBheWxvYWQ6IHNlYXJjaFBhcmFtcyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VTUyxcbiAgcGF5bG9hZDogZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IGVycm9yLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRJbnRlcmVzdENvdW50ID0gKGNvdW50KSA9PiAoe1xuICB0eXBlOiBTZWFyY2hBY3Rpb25UeXBlcy5TRVRfSU5URVJFU1RfQ09VTlQsXG4gIHBheWxvYWQ6IGNvdW50LFxufSk7XG5cbmV4cG9ydCBjb25zdCBpc0xvYWRpbmcgPSAoc3RhdHVzKSA9PiAoe1xuICB0eXBlOiBTZWFyY2hBY3Rpb25UeXBlcy5JU19MT0FESU5HLFxuICBwYXlsb2FkOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldENvdW50ID0gKGNvdW50KSA9PiAoe1xuICB0eXBlOiBTZWFyY2hBY3Rpb25UeXBlcy5TRVRfQ09VTlQsXG4gIHBheWxvYWQ6IGNvdW50LFxufSk7XG4iLCJpbXBvcnQgU2VhcmNoQWN0aW9uVHlwZXMgZnJvbSBcIi4vc2VhcmNoLXR5cGVzXCI7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGtleXdvcmQ6IG51bGwsXG4gIGludGVyZXN0czogbnVsbCxcbiAgc2VhcmNoQ291bnQ6IDAsXG4gIGVycm9yOiBudWxsLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgaW50ZXJlc3RDb3VudDogbnVsbCxcbn07XG5cbmNvbnN0IHNlYXJjaFJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW50ZXJlc3RzOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICBrZXl3b3JkOiBhY3Rpb24ucGF5bG9hZC5rZXl3b3JkLFxuICAgICAgICBzZWFyY2hDb3VudDogYWN0aW9uLnBheWxvYWQuY291bnQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIFNlYXJjaEFjdGlvblR5cGVzLklTX0xPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VUX0NPVU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaENvdW50OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRVRfSU5URVJFU1RfQ09VTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW50ZXJlc3RDb3VudDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0LCBhbGwsIGNhbGwsIHNlbGVjdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7XG4gIHNlYXJjaFN1Y2Nlc3MsXG4gIHNlYXJjaEZhaWx1cmUsXG4gIGlzTG9hZGluZyxcbiAgc2V0SW50ZXJlc3RDb3VudCxcbn0gZnJvbSBcIi4vc2VhcmNoLWFjdGlvbnNcIjtcblxuaW1wb3J0IHtcbiAgc2VhcmNoSW50ZXJlc3QsXG4gIHVwZGF0ZVNlYXJjaENvdW50LFxuICBjb21waWxlSW50ZXJlc3RTdWdnZXN0aW9ucyxcbn0gZnJvbSBcIi4uLy4uL2FwaS9hcGlcIjtcbmltcG9ydCB7XG4gIGFkZFNjb3JlLFxuICBnZXRJbnRlcmVzdE5hbWVzLFxuICBjb250YWluc0tleXdvcmQsXG4gIGFkZExpbmtzLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvc2VhcmNoXCI7XG5pbXBvcnQgU2VhcmNoQWN0aW9uVHlwZXMgZnJvbSBcIi4vc2VhcmNoLXR5cGVzXCI7XG5cbmltcG9ydCB7IHNlbGVjdEludGVyZXN0VG90YWwgfSBmcm9tIFwiLi9zZWFyY2gtc2VsZWN0b3JzXCI7XG5cbmZ1bmN0aW9uKiBnZXRJbnRlcmVzdCh7IHBheWxvYWQgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW4sIHZhbHVlLCBsaW1pdCwgeFRva2VuIH0gPSBwYXlsb2FkO1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcodHJ1ZSkpO1xuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBzZWFyY2hJbnRlcmVzdCh0b2tlbiwgdmFsdWUsIGxpbWl0KTtcbiAgICBjb25zdCBsZXZlbE9uZSA9IGFkZFNjb3JlKGRhdGEuZGF0YSwgNSk7XG4gICAgbGV0IG5hbWVzID0gZ2V0SW50ZXJlc3ROYW1lcyhkYXRhLmRhdGEpO1xuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB5aWVsZCBjb21waWxlSW50ZXJlc3RTdWdnZXN0aW9ucyh0b2tlbiwgbmFtZXMpO1xuXG4gICAgY29uc3QgbGV2ZWxUd28gPSBhZGRTY29yZShzdWdnZXN0aW9ucywgMyk7XG4gICAgbGV0IGFsbEludGVyZXN0ID0gWy4uLmxldmVsT25lLCAuLi5sZXZlbFR3b107XG4gICAgY29uc3QgcmFua2VkTGlzdCA9IGFsbEludGVyZXN0Lm1hcCgoaW50ZXJlc3QpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gY29udGFpbnNLZXl3b3JkKHZhbHVlLCBpbnRlcmVzdC5uYW1lKTtcbiAgICAgIGlmIChleGlzdCAhPT0gLTEpIHtcbiAgICAgICAgaW50ZXJlc3RbXCJyZWxldmFuY2VcIl0gPSBpbnRlcmVzdC5yZWxldmFuY2UgKyAzO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VhcmNoTmFtZSA9IGludGVyZXN0Lm5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIitcIik7XG4gICAgICBpbnRlcmVzdFtcImxpbmtzXCJdID0gW1xuICAgICAgICBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlYXJjaC9wYWdlcy8/cT0ke3NlYXJjaE5hbWV9YCxcbiAgICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JHtzZWFyY2hOYW1lfWAsXG4gICAgICBdO1xuICAgICAgLy8gY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIik7XG5cbiAgICAgIC8vIGludGVyZXN0W1wiYXVkaWVuY2Vfc2l6ZVwiXSA9IGZvcm1hdHRlci5mb3JtYXQoaW50ZXJlc3RbXCJhdWRpZW5jZV9zaXplXCJdKTtcbiAgICAgIHJldHVybiBpbnRlcmVzdDtcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvdW50IH0gPSB5aWVsZCB1cGRhdGVTZWFyY2hDb3VudCh4VG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKFwiY291bnQgc2FnYVwiLCBjb3VudCk7XG4gICAgeWllbGQgcHV0KHNlYXJjaFN1Y2Nlc3MoeyBkYXRhOiByYW5rZWRMaXN0LCBrZXl3b3JkOiB2YWx1ZSwgY291bnQgfSkpO1xuICAgIGNvbnN0IHRvdGFsID0geWllbGQgc2VsZWN0KHNlbGVjdEludGVyZXN0VG90YWwpO1xuICAgIHlpZWxkIHB1dChzZXRJbnRlcmVzdENvdW50KHRvdGFsKSk7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB5aWVsZCBwdXQoc2VhcmNoRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25TZWFyY2hTdGFydCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTZWFyY2hBY3Rpb25UeXBlcy5TVEFSVF9TRUFSQ0gsIGdldEludGVyZXN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBzZWFyY2hTYWdhcygpIHtcbiAgeWllbGQgYWxsKFtjYWxsKG9uU2VhcmNoU3RhcnQpXSk7XG59XG4iLCJleHBvcnQgY29uc3Qgc2VsZWN0SW50ZXJlc3RUb3RhbCA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4gc3RhdGUuc2VhcmNoLmludGVyZXN0cy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIDFcbiAgICB9LDApXG59IiwiY29uc3QgU2VhcmNoQWN0aW9uVHlwZXMgPSB7XG4gICAgU1RBUlRfU0VBUkNIOidTVEFSVF9TRUFSQ0gnLFxuICAgIFNFQVJDSF9TVUNDRVNTOiAnU0VBUkNIX1NVQ0NFU1MnLFxuICAgIFNFQVJDSF9GQUlMVVJFOiAnU0VBUkNIX0ZBSUxVUkUnLFxuICAgIElTX0xPQURJTkc6ICdJU19MT0FESU5HJyxcbiAgICBTRVRfQ09VTlQ6ICdTRVRfQ09VTlQnLFxuICAgIFNFVF9JTlRFUkVTVF9DT1VOVDogJ1NFVF9JTlRFUkVTVF9DT1VOVCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQWN0aW9uVHlwZXMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxlV2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcm9vdC1yZWR1Y2VyXCI7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4vcm9vdC1zYWdhXCI7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZVdhcmUoKTtcblxuY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIG1pZGRsZXdhcmVzLnB1c2gobG9nZ2VyKTtcbiAgfVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG4gIHBlcnNpc3RTdG9yZShzdG9yZSk7XG5cbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZVxuXG4iLCJpbXBvcnQgVXNlckFjdGlvblR5cGVzIGZyb20gXCIuL3VzZXItdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNpZ2luU3VjY2VzcyA9IChzaWduZWRJbikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNJR05fSU5fU1VDQ0VTUyxcbiAgcGF5bG9hZDogc2lnbmVkSW4sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25pblN0YXJ0ID0gKHVzZXJDcmVkZW50aWFscykgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNJR05fSU5fU1RBUlQsXG4gIHBheWxvYWQ6IHVzZXJDcmVkZW50aWFscyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbnVwU3RhcnQgPSAodXNlckNyZWRlbnRpYWxzKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0lHTl9VUF9TVEFSVCxcbiAgcGF5bG9hZDogdXNlckNyZWRlbnRpYWxzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWdudXBTdWNjZXNzID0gKHN0YXR1cykgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNJR05fVVBfU1VDQ0VTUyxcbiAgcGF5bG9hZDogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWdudXBGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0lHTl9VUF9GQUlMVVJFLFxuICBwYXlsb2FkOiBlcnJvcixcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkaW5nQ3VycmVudFVzZXIgPSAodXNlckRhdGEpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5BRERJTkdfQ1VSUkVOVF9VU0VSLFxuICBwYXlsb2FkOiB1c2VyRGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSAodXNlcikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1VTRVIsXG4gIHBheWxvYWQ6IHVzZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ2luRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNJR05fSU5fRkFJTFVSRSxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcblxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IChsb2FkaW5nU3RhdGUpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5MT0FESU5HLFxuICBwYXlsb2FkOiBsb2FkaW5nU3RhdGUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGF1dGhGYWNlYm9vayA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuQVVUSF9GQUNFQk9PSyxcbiAgcGF5bG9hZDogZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmFjZWJvb2tBdXRoU3VjY2VzcyA9ICh0b2tlbikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkFVVEhfRkJfU1VDQ0VTUyxcbiAgcGF5bG9hZDogdG9rZW4sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZiQXV0aEZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5BVVRIX0ZCX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IGVycm9yLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKHRva2VuKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuTE9HX09VVCxcbiAgcGF5bG9hZDogdG9rZW4sXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXRTdWNjZXNzID0gKCkgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkxPR19PVVRfU1VDQ0VTUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlckxvZ291dEZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5MT0dfT1VUX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IGVycm9yLFxufSk7XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlQYXltZW50ID0gKGRldGFpbHMpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5WRVJJRllfUEFZTUVOVCxcbiAgcGF5bG9hZDogZGV0YWlscyxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGF5bWVudFN1Y2Nlc3NmdWwgPSAocGxhbikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlBBWU1FTlRfU1VDQ0VTU0ZVTCxcbiAgcGF5bG9hZDogcGxhbixcbn0pO1xuXG5leHBvcnQgY29uc3QgcGF5bWVudEZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5QQVlNRU5UX0ZBSUxFRCxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcbiIsImltcG9ydCBVc2VyQWN0aW9uVHlwZXMgZnJvbSBcIi4vdXNlci10eXBlc1wiO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBjdXJyZW50VXNlcjogbnVsbCxcbiAgZmJUb2tlbjoge1xuICAgIHRva2VuOiBudWxsLFxuICAgIGV4cGlyZXM6IG51bGwsXG4gIH0sXG4gIHNpZ25lZEluOiBmYWxzZSxcbiAgbG9nb3V0OiBmYWxzZSxcbiAgZXJyb3I6IG51bGwsXG59O1xuXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBzaWduZWRJbjogdHJ1ZSxcbiAgICAgICAgbG9nb3V0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNpZ25lZEluOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLkxPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5BVVRIX0ZCX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmJUb2tlbjogeyAuLi5hY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICBjdXJyZW50VXNlcjogeyAuLi5zdGF0ZS5jdXJyZW50VXNlciwgbmFtZTogYWN0aW9uLnBheWxvYWQubmFtZSB9LFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuTE9HX09VVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBudWxsLFxuICAgICAgICBmYlRva2VuOiB7XG4gICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgZXhwaXJlczogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgc2lnbmVkSW46IGZhbHNlLFxuICAgICAgICBsb2dvdXQ6IHRydWUsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5QQVlNRU5UX1NVQ0NFU1NGVUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudFVzZXI6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJyZW50VXNlcixcbiAgICAgICAgICBwbGFuOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLlNJR05fSU5fRkFJTFVSRTpcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5BVVRIX0ZCX0ZBSUxVUkU6XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9VUF9GQUlMVVJFOlxuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLkxPR19PVVRfRkFJTFVSRTpcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5QQVlNRU5UX0ZBSUxFRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcbiIsImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IFVzZXJBY3Rpb25UeXBlcyBmcm9tIFwiLi91c2VyLXR5cGVzXCI7XG5pbXBvcnQge1xuICBzaWdpblN1Y2Nlc3MsXG4gIHNpZ251cFN1Y2Nlc3MsXG4gIHNpZ251cEZhaWx1cmUsXG4gIHNldEN1cnJlbnRVc2VyLFxuICBzaWdpbkZhaWx1cmUsXG4gIGlzTG9hZGluZyxcbiAgZmFjZWJvb2tBdXRoU3VjY2VzcyxcbiAgZmJBdXRoRmFpbHVyZSxcbiAgdXNlckxvZ291dFN1Y2Nlc3MsXG4gIHVzZXJMb2dvdXRGYWlsdXJlLFxuICBwYXltZW50U3VjY2Vzc2Z1bCxcbiAgcGF5bWVudEZhaWx1cmUsXG59IGZyb20gXCIuL3VzZXItYWN0aW9uc1wiO1xuaW1wb3J0IHsgc2V0Q291bnQgfSBmcm9tIFwiLi4vc2VhcmNoL3NlYXJjaC1hY3Rpb25zXCI7XG5pbXBvcnQge1xuICBmYkF1dGhlbnRpY2F0aW9uLFxuICBzaWduVXAsXG4gIHNpZ25JbixcbiAgdXNlckxvZ291dCxcbiAgdmVyaWZ5UGF5bWVudCxcbn0gZnJvbSBcIi4uLy4uL2FwaS9hcGlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBzZXRVc2VyKHsgcGF5bG9hZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyh0cnVlKSk7XG4gICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyXCIpO1xuICAgIH1cblxuICAgIHlpZWxkIHB1dChzZXRDdXJyZW50VXNlcihwYXlsb2FkKSk7XG4gICAgeWllbGQgcHV0KHNpZ2luU3VjY2Vzcyh0cnVlKSk7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChzaWdpbkZhaWx1cmUoZXJyb3IpKTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBzaWduVXBVc2VyKHsgcGF5bG9hZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyh0cnVlKSk7XG4gICAgY29uc29sZS5sb2coXCJ0aGUgcGF5bG9hZFwiLCBwYXlsb2FkKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBzaWduVXAocGF5bG9hZC5lbWFpbCwgcGF5bG9hZC5wYXNzd29yZCk7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIGlkOiByZXMuX2lkLFxuICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICBlbWFpbDogcmVzLmVtYWlsLFxuICAgICAgeFRva2VuOiByZXMueFRva2VuLFxuICAgICAgcGxhbjogcmVzLnBsYW4sXG4gICAgfTtcbiAgICB5aWVsZCBwdXQoc2V0Q3VycmVudFVzZXIodXNlckRhdGEpKTtcbiAgICB5aWVsZCBwdXQoc2V0Q291bnQocmVzLnNlYXJjaENvdW50KSk7XG4gICAgeWllbGQgcHV0KHNpZ251cFN1Y2Nlc3ModHJ1ZSkpO1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoc2lnbnVwRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogc2lnbkluVXNlcih7IHBheWxvYWQgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcodHJ1ZSkpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIHNpZ25JbihwYXlsb2FkLmVtYWlsLCBwYXlsb2FkLnBhc3N3b3JkKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIGlkOiByZXMuX2lkLFxuICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICBlbWFpbDogcmVzLmVtYWlsLFxuICAgICAgeFRva2VuOiByZXMueFRva2VuLFxuICAgICAgcGxhbjogcmVzLnBsYW4sXG4gICAgfTtcbiAgICB5aWVsZCBwdXQoc2V0Q3VycmVudFVzZXIodXNlckRhdGEpKTtcbiAgICB5aWVsZCBwdXQoc2V0Q291bnQocmVzLnNlYXJjaENvdW50KSk7XG4gICAgY29uc29sZS5sb2coXCJzZWFyY2ggY291bnRcIiwgcmVzLnNlYXJjaENvdW50KTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICAgIHlpZWxkIHB1dChzaWdpbkZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGZhY2Vib29rQXV0aCh7IHBheWxvYWQgfSkge1xuICB5aWVsZCBwdXQoaXNMb2FkaW5nKHRydWUpKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHRva2VuLCBpZCwgZmJJZCwgbmFtZSB9ID0gcGF5bG9hZDtcbiAgICBjb25zb2xlLmxvZyhcInBheWxvYWRcIiwgcGF5bG9hZCk7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyh0cnVlKSk7XG4gICAgY29uc3QgZmJUb2tlbiA9IHlpZWxkIGZiQXV0aGVudGljYXRpb24odG9rZW4sIGlkLCBmYklkLCBuYW1lKTtcblxuICAgIHlpZWxkIHB1dChmYWNlYm9va0F1dGhTdWNjZXNzKGZiVG9rZW4pKTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGZiQXV0aEZhaWx1cmUoZXJyb3IpKTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBsb2dvdXQoeyBwYXlsb2FkIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKHRydWUpKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCB1c2VyTG9nb3V0KHBheWxvYWQpO1xuICAgIGlmIChyZXMgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0IGRvbmVcIik7XG4gICAgICB5aWVsZCBwdXQodXNlckxvZ291dFN1Y2Nlc3MoKSk7XG4gICAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB5aWVsZCBwdXQodXNlckxvZ291dEZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHZlcmlmeVVzZXJQYXltZW50KHsgcGF5bG9hZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyh0cnVlKSk7XG4gICAgY29uc3QgeyB0b2tlbiwgcmVmLCBwbGFuIH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIHZlcmlmeVBheW1lbnQodG9rZW4sIHBsYW4sIHJlZik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyIHNhZ2FcIiwgcmVzKTtcbiAgICBpZiAocmVzLnBsYW4gPT0gXCJQTDAwMlwiKSB7XG4gICAgICB5aWVsZCBwdXQocGF5bWVudFN1Y2Nlc3NmdWwocmVzLnBsYW4pKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGFpZFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICAgIHlpZWxkIHB1dChwYXltZW50RmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25BZGRpbmdDdXJyZW50VXNlcigpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVc2VyQWN0aW9uVHlwZXMuQURESU5HX0NVUlJFTlRfVVNFUiwgc2V0VXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25TaWdudXBTdGFydCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVc2VyQWN0aW9uVHlwZXMuU0lHTl9VUF9TVEFSVCwgc2lnblVwVXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25TaWduaW5TdGFydCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVEFSVCwgc2lnbkluVXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25BdXRoRmFjZWJvb2soKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVXNlckFjdGlvblR5cGVzLkFVVEhfRkFDRUJPT0ssIGZhY2Vib29rQXV0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25Mb2dvdXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVXNlckFjdGlvblR5cGVzLkxPR19PVVQsIGxvZ291dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25WZXJpZnlQYXltZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVzZXJBY3Rpb25UeXBlcy5WRVJJRllfUEFZTUVOVCwgdmVyaWZ5VXNlclBheW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJTYWdhcygpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBjYWxsKG9uQXV0aEZhY2Vib29rKSxcbiAgICBjYWxsKG9uQWRkaW5nQ3VycmVudFVzZXIpLFxuICAgIGNhbGwob25TaWduaW5TdGFydCksXG4gICAgY2FsbChvblNpZ251cFN0YXJ0KSxcbiAgICBjYWxsKG9uTG9nb3V0KSxcbiAgICBjYWxsKG9uVmVyaWZ5UGF5bWVudCksXG4gIF0pO1xufVxuIiwiY29uc3QgVXNlckFjdGlvblR5cGVzID0ge1xuICBTRVRfQ1VSUkVOVF9VU0VSOiBcIlNFVF9DVVJSRU5UX1VTRVJcIixcbiAgU0lHTl9JTl9TVEFSVDogXCJTSUdOX0lOX1NUQVJUXCIsXG4gIFNJR05fSU5fU1VDQ0VTUzogXCJTSUdOX0lOX1NVQ0NFU1NcIixcbiAgU0lHTl9JTl9GQUlMVVJFOiBcIlNJR05fSU5fRkFJTFVSRVwiLFxuICBBVVRIX0ZCX1NUQVJUOiBcIkFVVEhfRkJfU1RBUlRcIixcbiAgQVVUSF9GQl9TVUNDRVNTOiBcIkFVVEhfRkJfU1VDQ0VTU1wiLFxuICBBVVRIX0ZCX0ZBSUxVUkU6IFwiQVVUSF9GQl9GQUlMVVJFXCIsXG4gIEFERElOR19DVVJSRU5UX1VTRVI6IFwiQURESU5HX0NVUlJFTlRfVVNFUlwiLFxuICBMT0FESU5HOiBcIkxPQURJTkdcIixcbiAgQVVUSF9GQUNFQk9PSzogXCJBVVRIX0ZBQ0VCT09LXCIsXG4gIFNJR05fVVBfU1RBUlQ6IFwiU0lHTl9VUF9TVEFSVFwiLFxuICBTSUdOX1VQX1NVQ0NFU1M6IFwiU0lHTl9VUF9TVUNDRVNTXCIsXG4gIFNJR05fVVBfRkFJTFVSRTogXCJTSUdOX1VQX0ZBSUxVUkVcIixcbiAgTE9HX09VVDogXCJMT0dfT1VUXCIsXG4gIExPR19PVVRfU1VDQ0VTUzogXCJMT0dfT1VUX1NVQ0NFU1NcIixcbiAgTE9HX09VVF9GQUlMVVJFOiBcIkxPR19PVVRfRkFJTFVSRVwiLFxuICBWRVJJRllfUEFZTUVOVDogXCJWRVJJRllfUEFZTUVOVFwiLFxuICBQQVlNRU5UX1NVQ0NFU1NGVUw6IFwiUEFZTUVOVF9TVUNDRVNTRlVMXCIsXG4gIFBBWU1FTlRfRkFJTEVEOiBcIlBBWU1FTlRfRkFJTEVEXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQWN0aW9uVHlwZXM7XG4iLCJleHBvcnQgY29uc3QgYWRkU2NvcmUgPSAoZGF0YSwgc2NvcmUpID0+IHtcbiAgY29uc3QgdXBkYXRlZCA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJyZWxldmFuY2VcIikpIHtcbiAgICAgIHJldHVybiAoaXRlbS5yZWxldmFuY2UgPSBpdGVtLnJlbGV2YW5jZSArIHNjb3JlKTtcbiAgICB9XG4gICAgaXRlbVtcInJlbGV2YW5jZVwiXSA9IHNjb3JlO1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcblxuICByZXR1cm4gdXBkYXRlZDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbnRlcmVzdE5hbWVzID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbmFtZXMgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWluc0tleXdvcmQgPSAoa2V5LCBwaHJhc2UpID0+IHtcbiAgY29uc3QgbG93ZXJQaHJhc2UgPSBwaHJhc2UudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgbG93ZXJLZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gbG93ZXJQaHJhc2UuaW5kZXhPZihsb3dlcktleSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3BsaXRBcnJheSA9IChhcnJheSwgc2l6ZSkgPT4ge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGNvbnN0IHNldE51bWJlciA9IE1hdGguY2VpbChsZW5ndGggLyBzaXplKTtcbiAgbGV0IGxpbWl0ID0gc2l6ZTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGFycmF5U3BsaXQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNldE51bWJlcjsgaSsrKSB7XG4gICAgY29uc3Qgc2V0ID0gYXJyYXkuc2xpY2Uoc3RhcnQsIGxpbWl0KTtcbiAgICBhcnJheVNwbGl0LnB1c2goc2V0KTtcbiAgICBsaW1pdCA9IGxpbWl0ICsgc2l6ZTtcbiAgICBzdGFydCA9IHN0YXJ0ICsgc2l6ZTtcbiAgfVxuICByZXR1cm4gYXJyYXlTcGxpdDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMaW5rcyA9IChhcnJheSkgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICBpdGVtW1wibGlua3NcIl0gPSBbXG4gICAgICBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlYXJjaC9wYWdlcy8/cT0ke2l0ZW0ubmFtZX1gLFxuICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JHtpdGVtLm5hbWV9YCxcbiAgICBdO1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcblxuICByZXR1cm4gdXBkYXRlZDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ3RtLW1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=