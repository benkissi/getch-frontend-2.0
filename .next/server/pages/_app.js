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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-gtm-module */ "react-gtm-module");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/ben/code/getch/getch-frontend-2.0/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






 // import "react-toastify/scss/main.scss";



/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_redux_store__WEBPACK_IMPORTED_MODULE_5__["default"], {
  debug: true
})(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  componentDidMount() {
    const tagManagerArgs = {
      gtmId: "GTM-WZH3SMB"
    };
    react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default.a.initialize(tagManagerArgs);
  }

  render() {
    const defaultLayout = props => __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
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
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx("link", {
      rel: "shortcut icon",
      href: "/images/fav.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    })), __jsx(Layout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
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
        lineNumber: 33,
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL2VuZHBvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3Jvb3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290LXNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2VhcmNoL3NlYXJjaC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlYXJjaC9zZWFyY2gtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zZWFyY2gvc2VhcmNoLXNhZ2FzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlYXJjaC9zZWFyY2gtc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlYXJjaC9zZWFyY2gtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLXNhZ2FzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3VzZXIvdXNlci10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWd0bS1tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInVybCIsImVuZHBvaW50cyIsIlNJR05fVVAiLCJkYXRhIiwicmVzIiwiYXhpb3MiLCJwb3N0IiwidG9rZW4iLCJoZWFkZXJzIiwicmVwbGFjZSIsInNpZ25JbiIsIlNJR05fSU4iLCJwYXJhbXMiLCJnZXQiLCJmYkF1dGhlbnRpY2F0aW9uIiwiaWQiLCJmYklkIiwibmFtZSIsIkZCX0FVVEgiLCJzZWFyY2hJbnRlcmVzdCIsImtleXdvcmQiLCJsaW1pdCIsIkZCX0lOVEVSRVNUX1NFQVJDSCIsInEiLCJ0eXBlIiwiYWNjZXNzX3Rva2VuIiwiZ2V0SW50ZXJlc3RTdWdnZXN0aW9ucyIsImtleXdvcmRzIiwiaW50ZXJlc3RTdWdnZXN0aW9ucyIsInJlc3BvbnNlIiwiaW50ZXJlc3RfbGlzdCIsInB1c2giLCJwYWdlIiwicGFnaW5nIiwibmV4dCIsImNvbXBpbGVJbnRlcmVzdFN1Z2dlc3Rpb25zIiwibGVuZ3RoIiwic3VnZ2VzdGlvbnMiLCJkYXRhQXJyYXkiLCJzcGxpdEFycmF5IiwiaSIsImdldFByb2R1Y3RzIiwic2hvcE5hbWUiLCJHRVRfUFJPRFVDVFMiLCJnZXRBZEFjY291bnRzIiwiR0VUX0FEQUNDT1VOVFMiLCJBdXRob3JpemF0aW9uIiwiZmJQYWdpbmF0ZSIsImdldENhbXBhaWducyIsImFjY291bnRJZCIsIkdFVF9DQU1QQUlHTlMiLCJnZXRBZHNldHMiLCJjYW1haWduSWQiLCJHRVRfQURTRVRTIiwiZ2V0QWRzIiwiYWRzZXRJZCIsIkdFVF9BRFMiLCJnZXRJbnRlcmVzdFN0YXRzIiwiYWRJZCIsIkdFVF9TVEFUUyIsInVzZXJMb2dvdXQiLCJMT0dfT1VUIiwidXBkYXRlU2VhcmNoQ291bnQiLCJVUERBVEVfU0VBUkNIX0NPVU5UIiwidmVyaWZ5UGF5bWVudCIsInBsYW4iLCJyZWYiLCJWRVJJRllfUEFZTUVOVCIsInNob3AiLCJwcm9jZXNzIiwiYXBpVmVyc2lvbiIsImNhbXBhaWduSWQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIndpdGhSZWR1eCIsIm1ha2VTdG9yZSIsImRlYnVnIiwiTXlBcHAiLCJjb21wb25lbnREaWRNb3VudCIsInRhZ01hbmFnZXJBcmdzIiwiZ3RtSWQiLCJUYWdNYW5hZ2VyIiwiaW5pdGlhbGl6ZSIsImRlZmF1bHRMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwic3RvcmUiLCJMYXlvdXQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInVzZXJSZWR1Y2VyIiwic2VhcmNoIiwic2VhcmNoUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwicm9vdFNhZ2EiLCJhbGwiLCJjYWxsIiwidXNlclNhZ2FzIiwic2VhcmNoU2FnYXMiLCJzZWFyY2hTdGFydCIsInNlYXJjaFBhcmFtcyIsIlNlYXJjaEFjdGlvblR5cGVzIiwiU1RBUlRfU0VBUkNIIiwicGF5bG9hZCIsInNlYXJjaFN1Y2Nlc3MiLCJTRUFSQ0hfU1VDQ0VTUyIsInNlYXJjaEZhaWx1cmUiLCJlcnJvciIsIlNFQVJDSF9GQUlMVVJFIiwic2V0SW50ZXJlc3RDb3VudCIsImNvdW50IiwiU0VUX0lOVEVSRVNUX0NPVU5UIiwiaXNMb2FkaW5nIiwic3RhdHVzIiwiSVNfTE9BRElORyIsInNldENvdW50IiwiU0VUX0NPVU5UIiwiSU5JVElBTF9TVEFURSIsImludGVyZXN0cyIsInNlYXJjaENvdW50IiwibG9hZGluZyIsImludGVyZXN0Q291bnQiLCJzdGF0ZSIsImFjdGlvbiIsImdldEludGVyZXN0IiwidmFsdWUiLCJ4VG9rZW4iLCJwdXQiLCJsZXZlbE9uZSIsImFkZFNjb3JlIiwibmFtZXMiLCJnZXRJbnRlcmVzdE5hbWVzIiwibGV2ZWxUd28iLCJhbGxJbnRlcmVzdCIsInJhbmtlZExpc3QiLCJtYXAiLCJpbnRlcmVzdCIsImV4aXN0IiwiY29udGFpbnNLZXl3b3JkIiwicmVsZXZhbmNlIiwic2VhcmNoTmFtZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwidG90YWwiLCJzZWxlY3QiLCJzZWxlY3RJbnRlcmVzdFRvdGFsIiwib25TZWFyY2hTdGFydCIsInRha2VMYXRlc3QiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsIml0ZW0iLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGVXYXJlIiwibWlkZGxld2FyZXMiLCJsb2dnZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsInBlcnNpc3RTdG9yZSIsImluaXRpYWxTdGF0ZSIsInNpZ2luU3VjY2VzcyIsInNpZ25lZEluIiwiVXNlckFjdGlvblR5cGVzIiwiU0lHTl9JTl9TVUNDRVNTIiwic2lnbmluU3RhcnQiLCJ1c2VyQ3JlZGVudGlhbHMiLCJTSUdOX0lOX1NUQVJUIiwic2lnbnVwU3RhcnQiLCJTSUdOX1VQX1NUQVJUIiwic2lnbnVwU3VjY2VzcyIsIlNJR05fVVBfU1VDQ0VTUyIsInNpZ251cEZhaWx1cmUiLCJTSUdOX1VQX0ZBSUxVUkUiLCJhZGRpbmdDdXJyZW50VXNlciIsInVzZXJEYXRhIiwiQURESU5HX0NVUlJFTlRfVVNFUiIsInNldEN1cnJlbnRVc2VyIiwiU0VUX0NVUlJFTlRfVVNFUiIsInNpZ2luRmFpbHVyZSIsIlNJR05fSU5fRkFJTFVSRSIsImxvYWRpbmdTdGF0ZSIsIkxPQURJTkciLCJhdXRoRmFjZWJvb2siLCJBVVRIX0ZBQ0VCT09LIiwiZmFjZWJvb2tBdXRoU3VjY2VzcyIsIkFVVEhfRkJfU1VDQ0VTUyIsImZiQXV0aEZhaWx1cmUiLCJBVVRIX0ZCX0ZBSUxVUkUiLCJ1c2VyTG9nb3V0U3VjY2VzcyIsIkxPR19PVVRfU1VDQ0VTUyIsInVzZXJMb2dvdXRGYWlsdXJlIiwiTE9HX09VVF9GQUlMVVJFIiwiZGV0YWlscyIsInBheW1lbnRTdWNjZXNzZnVsIiwiUEFZTUVOVF9TVUNDRVNTRlVMIiwicGF5bWVudEZhaWx1cmUiLCJQQVlNRU5UX0ZBSUxFRCIsImN1cnJlbnRVc2VyIiwiZmJUb2tlbiIsImV4cGlyZXMiLCJsb2dvdXQiLCJzZXRVc2VyIiwiRXJyb3IiLCJzaWduVXBVc2VyIiwiX2lkIiwic2lnbkluVXNlciIsImZhY2Vib29rQXV0aCIsInZlcmlmeVVzZXJQYXltZW50Iiwib25BZGRpbmdDdXJyZW50VXNlciIsIm9uU2lnbnVwU3RhcnQiLCJvblNpZ25pblN0YXJ0Iiwib25BdXRoRmFjZWJvb2siLCJvbkxvZ291dCIsIm9uVmVyaWZ5UGF5bWVudCIsIkFVVEhfRkJfU1RBUlQiLCJzY29yZSIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsInBocmFzZSIsImxvd2VyUGhyYXNlIiwibG93ZXJLZXkiLCJpbmRleE9mIiwiYXJyYXkiLCJzaXplIiwic2V0TnVtYmVyIiwiTWF0aCIsImNlaWwiLCJzdGFydCIsImFycmF5U3BsaXQiLCJzZXQiLCJzbGljZSIsImFkZExpbmtzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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a0MrSixJQUFJLENBQUMvSixJQUFLLEVBRi9CLENBQWhCO0FBSUEsV0FBTytKLElBQVA7QUFDRCxHQU5lLENBQWhCO0FBUUEsU0FBT2tFLE9BQVA7QUFDRCxDQVZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NQLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBlbmRwb2ludHMgZnJvbSBcIi4vZW5kcG9pbnRzXCI7XG5pbXBvcnQgeyBzcGxpdEFycmF5IH0gZnJvbSBcIi4uL3V0aWxzL3NlYXJjaFwiO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImdldHRpbmdcIiwgZW1haWwsIHBhc3N3b3JkKTtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLlNJR05fVVA7XG4gIGNvbnNvbGUubG9nKCd1cmwnLCB1cmwpXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZW1haWwsXG4gICAgcGFzc3dvcmQsXG4gIH07XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEpO1xuICBjb25zdCB0b2tlbiA9IHJlcy5oZWFkZXJzW1wieC1hdXRoXCJdLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xuICByZXMuZGF0YVtcInhUb2tlblwiXSA9IHRva2VuO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICBjb25zb2xlLmxvZyhcInNpZ24gaW4gYXBpXCIpO1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuU0lHTl9JTjtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGVtYWlsLFxuICAgIHBhc3N3b3JkLFxuICB9O1xuICBjb25zb2xlLmxvZyhcImFwaVwiLCBwYXJhbXMpO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBwYXJhbXMsXG4gIH0pO1xuICBjb25zdCB0b2tlbiA9IHJlcy5oZWFkZXJzW1wieC1hdXRoXCJdLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xuICByZXMuZGF0YVtcInhUb2tlblwiXSA9IHRva2VuO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZmJBdXRoZW50aWNhdGlvbiA9IGFzeW5jICh0b2tlbiwgaWQsIGZiSWQsIG5hbWUpID0+IHtcbiAgY29uc29sZS5sb2coXCJuYW1lIGFwaVwiLCBuYW1lKTtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkZCX0FVVEg7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICB0b2tlbixcbiAgICBpZCxcbiAgICBmYklkLFxuICAgIG5hbWUsXG4gIH07XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIHBhcmFtcyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJyZXMgZGF0YVwiLCByZXMuZGF0YSk7XG5cbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEludGVyZXN0ID0gYXN5bmMgKHRva2VuLCBrZXl3b3JkLCBsaW1pdCA9IDUwMCkgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuRkJfSU5URVJFU1RfU0VBUkNIKDIuMTEpO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgcToga2V5d29yZCxcbiAgICB0eXBlOiBcImFkaW50ZXJlc3RcIixcbiAgICBhY2Nlc3NfdG9rZW46IHRva2VuLFxuICAgIGxpbWl0LFxuICB9O1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgcGFyYW1zLFxuICB9KTtcbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEludGVyZXN0U3VnZ2VzdGlvbnMgPSBhc3luYyAodG9rZW4sIGtleXdvcmRzLCBsaW1pdCA9IDEwMCkgPT4ge1xuICBsZXQgaW50ZXJlc3RTdWdnZXN0aW9ucyA9IFtdO1xuICBsZXQgcmVzcG9uc2U7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5GQl9JTlRFUkVTVF9TRUFSQ0goMi4xMSk7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBpbnRlcmVzdF9saXN0OiBrZXl3b3JkcyxcbiAgICB0eXBlOiBcImFkaW50ZXJlc3RzdWdnZXN0aW9uXCIsXG4gICAgYWNjZXNzX3Rva2VuOiB0b2tlbixcbiAgICBsaW1pdDogbGltaXQsXG4gIH07XG4gIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIHBhcmFtcyxcbiAgfSk7XG4gIGludGVyZXN0U3VnZ2VzdGlvbnMucHVzaCguLi5yZXNwb25zZS5kYXRhLmRhdGEpO1xuICBsZXQgcGFnZSA9IDA7XG4gIHdoaWxlIChyZXNwb25zZS5kYXRhLnBhZ2luZy5uZXh0KSB7XG4gICAgaWYgKHBhZ2UgPiA1KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQocmVzcG9uc2UuZGF0YS5wYWdpbmcubmV4dCk7XG4gICAgaW50ZXJlc3RTdWdnZXN0aW9ucy5wdXNoKC4uLnJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgcGFnZSsrO1xuICB9XG4gIHJldHVybiBpbnRlcmVzdFN1Z2dlc3Rpb25zO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBpbGVJbnRlcmVzdFN1Z2dlc3Rpb25zID0gYXN5bmMgKFxuICB0b2tlbixcbiAga2V5d29yZHMsXG4gIGxpbWl0ID0gMTAwXG4pID0+IHtcbiAgaWYgKGtleXdvcmRzLmxlbmd0aCA+IDIwMCkge1xuICAgIGxldCBzdWdnZXN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IHNwbGl0QXJyYXkoa2V5d29yZHMsIDIwMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1Z2dlc3Rpb25zLnB1c2goXG4gICAgICAgIC4uLihhd2FpdCBnZXRJbnRlcmVzdFN1Z2dlc3Rpb25zKHRva2VuLCBkYXRhQXJyYXlbaV0sIGxpbWl0KSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzdWdnZXN0aW9ucztcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBnZXRJbnRlcmVzdFN1Z2dlc3Rpb25zKHRva2VuLCBrZXl3b3JkcywgbGltaXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHNob3BOYW1lKSA9PiB7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5HRVRfUFJPRFVDVFMoc2hvcE5hbWUpO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgbGltaXQ6IDEwLFxuICB9O1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgcGFyYW1zLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWRBY2NvdW50cyA9IGFzeW5jIChmYklkLCB0b2tlbikgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuR0VUX0FEQUNDT1VOVFMoZmJJZCk7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgfTtcblxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgZmJJZCxcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgaGVhZGVycyxcbiAgICBwYXJhbXMsXG4gIH0pO1xuXG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmYlBhZ2luYXRlID0gYXN5bmMgKHBhZ2UpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHBhZ2UpO1xuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FtcGFpZ25zID0gYXN5bmMgKGFjY291bnRJZCwgdG9rZW4pID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkdFVF9DQU1QQUlHTlMoYWNjb3VudElkKTtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBoZWFkZXJzLFxuICB9KTtcblxuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWRzZXRzID0gYXN5bmMgKGNhbWFpZ25JZCwgdG9rZW4pID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkdFVF9BRFNFVFMoY2FtYWlnbklkKTtcblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICBoZWFkZXJzLFxuICB9KTtcblxuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWRzID0gYXN5bmMgKGFkc2V0SWQsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5HRVRfQURTKGFkc2V0SWQpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gIH07XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgIGhlYWRlcnMsXG4gIH0pO1xuXG4gIHJldHVybiByZXMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbnRlcmVzdFN0YXRzID0gYXN5bmMgKGFkSWQsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHVybCA9IGVuZHBvaW50cy5HRVRfU1RBVFMoYWRJZCk7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgaGVhZGVycyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXQgPSBhc3luYyAodG9rZW4pID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLkxPR19PVVQ7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgaGVhZGVycyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcblxuICByZXR1cm4gcmVzLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoQ291bnQgPSBhc3luYyAodG9rZW4pID0+IHtcbiAgY29uc3QgdXJsID0gZW5kcG9pbnRzLlVQREFURV9TRUFSQ0hfQ09VTlQ7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgfTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnMgfSk7XG4gIGNvbnNvbGUubG9nKFwiY291bnRcIiwgcmVzKTtcbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHZlcmlmeVBheW1lbnQgPSBhc3luYyAodG9rZW4sIHBsYW4sIHJlZikgPT4ge1xuICBjb25zdCB1cmwgPSBlbmRwb2ludHMuVkVSSUZZX1BBWU1FTlQ7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgfTtcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHBsYW4sXG4gICAgcmVmLFxuICB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhLCB7IGhlYWRlcnMgfSk7XG4gIGNvbnNvbGUubG9nKFwiYXBpXCIsIHJlcy5kYXRhKTtcbiAgcmV0dXJuIHJlcy5kYXRhO1xufTtcbiIsImNvbnN0IGVuZHBvaW50cyA9IHtcbiAgR0VUX1BST0RVQ1RTOiAoc2hvcCkgPT4gYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9c2hvcGlmeS9wcm9kdWN0cy8ke3Nob3B9YCxcbiAgRkJfQVVUSDogYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9ZmFjZWJvb2svYXV0aGAsXG4gIEZCX0lOVEVSRVNUX1NFQVJDSDogKGFwaVZlcnNpb24pID0+XG4gICAgYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3Yke2FwaVZlcnNpb259L3NlYXJjaGAsXG4gIEdFVF9BREFDQ09VTlRTOiAoZmJJZCkgPT5cbiAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1mYWNlYm9vay9hZGFjY291bnRzLyR7ZmJJZH1gLFxuICBHRVRfQ0FNUEFJR05TOiAoYWNjb3VudElkKSA9PlxuICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfWZhY2Vib29rL2NhbXBhaWducy8ke2FjY291bnRJZH1gLFxuICBHRVRfQURTRVRTOiAoY2FtcGFpZ25JZCkgPT5cbiAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1mYWNlYm9vay9hZHNldHMvJHtjYW1wYWlnbklkfWAsXG4gIEdFVF9BRFM6IChhZHNldElkKSA9PiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1mYWNlYm9vay9hZHMvJHthZHNldElkfWAsXG4gIEdFVF9TVEFUUzogKGFkSWQpID0+IGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfWZhY2Vib29rL3N0YXRzLyR7YWRJZH1gLFxuICBTSUdOX1VQOiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH11c2Vycy9zaWdudXBgLFxuICBTSUdOX0lOOiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH11c2Vycy9zaWduaW5gLFxuICBMT0dfT1VUOiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH11c2Vycy9sb2dvdXRgLFxuICBVUERBVEVfU0VBUkNIX0NPVU5UOiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1mYWNlYm9vay9jb3VudGAsXG4gIFZFUklGWV9QQVlNRU5UOiBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1wYXltZW50cy92ZXJpZnlgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5kcG9pbnRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCBtYWtlU3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuLy8gaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5taW4uY3NzXCI7XG5pbXBvcnQgVGFnTWFuYWdlciBmcm9tIFwicmVhY3QtZ3RtLW1vZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pKFxuICBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB0YWdNYW5hZ2VyQXJncyA9IHtcbiAgICAgICAgZ3RtSWQ6IFwiR1RNLVdaSDNTTUJcIixcbiAgICAgIH07XG5cbiAgICAgIFRhZ01hbmFnZXIuaW5pdGlhbGl6ZSh0YWdNYW5hZ2VyQXJncyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRMYXlvdXQgPSAocHJvcHMpID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dCB8fCBkZWZhdWx0TGF5b3V0O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltYWdlcy9mYXYucG5nXCIgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxuICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgICBwYXVzZU9uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbik7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XG5cbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi91c2VyL3VzZXItcmVkdWNlclwiO1xuaW1wb3J0IHNlYXJjaFJlZHVjZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoLXJlZHVjZXInXG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gIGtleTogXCJyb290XCIsXG4gIHN0b3JhZ2Vcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdXNlcjogdXNlclJlZHVjZXIsXG4gIHNlYXJjaDogc2VhcmNoUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcbiIsImltcG9ydCB7IGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgdXNlclNhZ2FzIH0gZnJvbSBcIi4vdXNlci91c2VyLXNhZ2FzXCI7XG5pbXBvcnQge3NlYXJjaFNhZ2FzfSBmcm9tICcuL3NlYXJjaC9zZWFyY2gtc2FnYXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBjYWxsKHVzZXJTYWdhcyksXG4gICAgY2FsbChzZWFyY2hTYWdhcylcbiAgXSk7XG59XG4iLCJpbXBvcnQgU2VhcmNoQWN0aW9uVHlwZXMgZnJvbSBcIi4vc2VhcmNoLXR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hTdGFydCA9IChzZWFyY2hQYXJhbXMpID0+ICh7XG4gIHR5cGU6IFNlYXJjaEFjdGlvblR5cGVzLlNUQVJUX1NFQVJDSCxcbiAgcGF5bG9hZDogc2VhcmNoUGFyYW1zLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRVNTLFxuICBwYXlsb2FkOiBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTFVSRSxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEludGVyZXN0Q291bnQgPSAoY291bnQpID0+ICh7XG4gIHR5cGU6IFNlYXJjaEFjdGlvblR5cGVzLlNFVF9JTlRFUkVTVF9DT1VOVCxcbiAgcGF5bG9hZDogY291bnQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IChzdGF0dXMpID0+ICh7XG4gIHR5cGU6IFNlYXJjaEFjdGlvblR5cGVzLklTX0xPQURJTkcsXG4gIHBheWxvYWQ6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0Q291bnQgPSAoY291bnQpID0+ICh7XG4gIHR5cGU6IFNlYXJjaEFjdGlvblR5cGVzLlNFVF9DT1VOVCxcbiAgcGF5bG9hZDogY291bnQsXG59KTtcbiIsImltcG9ydCBTZWFyY2hBY3Rpb25UeXBlcyBmcm9tIFwiLi9zZWFyY2gtdHlwZXNcIjtcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAga2V5d29yZDogbnVsbCxcbiAgaW50ZXJlc3RzOiBudWxsLFxuICBzZWFyY2hDb3VudDogMCxcbiAgZXJyb3I6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBpbnRlcmVzdENvdW50OiBudWxsLFxufTtcblxuY29uc3Qgc2VhcmNoUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnRlcmVzdHM6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIGtleXdvcmQ6IGFjdGlvbi5wYXlsb2FkLmtleXdvcmQsXG4gICAgICAgIHNlYXJjaENvdW50OiBhY3Rpb24ucGF5bG9hZC5jb3VudCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuSVNfTE9BRElORzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRVRfQ09VTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoQ291bnQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFVF9JTlRFUkVTVF9DT1VOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnRlcmVzdENvdW50OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFJlZHVjZXI7XG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQsIGFsbCwgY2FsbCwgc2VsZWN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHtcbiAgc2VhcmNoU3VjY2VzcyxcbiAgc2VhcmNoRmFpbHVyZSxcbiAgaXNMb2FkaW5nLFxuICBzZXRJbnRlcmVzdENvdW50LFxufSBmcm9tIFwiLi9zZWFyY2gtYWN0aW9uc1wiO1xuXG5pbXBvcnQge1xuICBzZWFyY2hJbnRlcmVzdCxcbiAgdXBkYXRlU2VhcmNoQ291bnQsXG4gIGNvbXBpbGVJbnRlcmVzdFN1Z2dlc3Rpb25zLFxufSBmcm9tIFwiLi4vLi4vYXBpL2FwaVwiO1xuaW1wb3J0IHtcbiAgYWRkU2NvcmUsXG4gIGdldEludGVyZXN0TmFtZXMsXG4gIGNvbnRhaW5zS2V5d29yZCxcbiAgYWRkTGlua3MsXG59IGZyb20gXCIuLi8uLi91dGlscy9zZWFyY2hcIjtcbmltcG9ydCBTZWFyY2hBY3Rpb25UeXBlcyBmcm9tIFwiLi9zZWFyY2gtdHlwZXNcIjtcblxuaW1wb3J0IHsgc2VsZWN0SW50ZXJlc3RUb3RhbCB9IGZyb20gXCIuL3NlYXJjaC1zZWxlY3RvcnNcIjtcblxuZnVuY3Rpb24qIGdldEludGVyZXN0KHsgcGF5bG9hZCB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0b2tlbiwgdmFsdWUsIGxpbWl0LCB4VG9rZW4gfSA9IHBheWxvYWQ7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyh0cnVlKSk7XG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHNlYXJjaEludGVyZXN0KHRva2VuLCB2YWx1ZSwgbGltaXQpO1xuICAgIGNvbnN0IGxldmVsT25lID0gYWRkU2NvcmUoZGF0YS5kYXRhLCA1KTtcbiAgICBsZXQgbmFtZXMgPSBnZXRJbnRlcmVzdE5hbWVzKGRhdGEuZGF0YSk7XG5cbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHlpZWxkIGNvbXBpbGVJbnRlcmVzdFN1Z2dlc3Rpb25zKHRva2VuLCBuYW1lcyk7XG5cbiAgICBjb25zdCBsZXZlbFR3byA9IGFkZFNjb3JlKHN1Z2dlc3Rpb25zLCAzKTtcbiAgICBsZXQgYWxsSW50ZXJlc3QgPSBbLi4ubGV2ZWxPbmUsIC4uLmxldmVsVHdvXTtcbiAgICBjb25zdCByYW5rZWRMaXN0ID0gYWxsSW50ZXJlc3QubWFwKChpbnRlcmVzdCkgPT4ge1xuICAgICAgY29uc3QgZXhpc3QgPSBjb250YWluc0tleXdvcmQodmFsdWUsIGludGVyZXN0Lm5hbWUpO1xuICAgICAgaWYgKGV4aXN0ICE9PSAtMSkge1xuICAgICAgICBpbnRlcmVzdFtcInJlbGV2YW5jZVwiXSA9IGludGVyZXN0LnJlbGV2YW5jZSArIDM7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hOYW1lID0gaW50ZXJlc3QubmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcbiAgICAgIGludGVyZXN0W1wibGlua3NcIl0gPSBbXG4gICAgICAgIGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VhcmNoL3BhZ2VzLz9xPSR7c2VhcmNoTmFtZX1gLFxuICAgICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke3NlYXJjaE5hbWV9YCxcbiAgICAgIF07XG4gICAgICAvLyBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiKTtcblxuICAgICAgLy8gaW50ZXJlc3RbXCJhdWRpZW5jZV9zaXplXCJdID0gZm9ybWF0dGVyLmZvcm1hdChpbnRlcmVzdFtcImF1ZGllbmNlX3NpemVcIl0pO1xuICAgICAgcmV0dXJuIGludGVyZXN0O1xuICAgIH0pO1xuICAgIGNvbnN0IHsgY291bnQgfSA9IHlpZWxkIHVwZGF0ZVNlYXJjaENvdW50KHhUb2tlbik7XG4gICAgY29uc29sZS5sb2coXCJjb3VudCBzYWdhXCIsIGNvdW50KTtcbiAgICB5aWVsZCBwdXQoc2VhcmNoU3VjY2Vzcyh7IGRhdGE6IHJhbmtlZExpc3QsIGtleXdvcmQ6IHZhbHVlLCBjb3VudCB9KSk7XG4gICAgY29uc3QgdG90YWwgPSB5aWVsZCBzZWxlY3Qoc2VsZWN0SW50ZXJlc3RUb3RhbCk7XG4gICAgeWllbGQgcHV0KHNldEludGVyZXN0Q291bnQodG90YWwpKTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICAgIHlpZWxkIHB1dChzZWFyY2hGYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvblNlYXJjaFN0YXJ0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNlYXJjaEFjdGlvblR5cGVzLlNUQVJUX1NFQVJDSCwgZ2V0SW50ZXJlc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIHNlYXJjaFNhZ2FzKCkge1xuICB5aWVsZCBhbGwoW2NhbGwob25TZWFyY2hTdGFydCldKTtcbn1cbiIsImV4cG9ydCBjb25zdCBzZWxlY3RJbnRlcmVzdFRvdGFsID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5zZWFyY2guaW50ZXJlc3RzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgMVxuICAgIH0sMClcbn0iLCJjb25zdCBTZWFyY2hBY3Rpb25UeXBlcyA9IHtcbiAgICBTVEFSVF9TRUFSQ0g6J1NUQVJUX1NFQVJDSCcsXG4gICAgU0VBUkNIX1NVQ0NFU1M6ICdTRUFSQ0hfU1VDQ0VTUycsXG4gICAgU0VBUkNIX0ZBSUxVUkU6ICdTRUFSQ0hfRkFJTFVSRScsXG4gICAgSVNfTE9BRElORzogJ0lTX0xPQURJTkcnLFxuICAgIFNFVF9DT1VOVDogJ1NFVF9DT1VOVCcsXG4gICAgU0VUX0lOVEVSRVNUX0NPVU5UOiAnU0VUX0lOVEVSRVNUX0NPVU5UJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hBY3Rpb25UeXBlcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGVXYXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5cbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yb290LXJlZHVjZXJcIjtcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi9yb290LXNhZ2FcIjtcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxlV2FyZSgpO1xuXG5jb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgbWlkZGxld2FyZXMucHVzaChsb2dnZXIpO1xuICB9XG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgcGVyc2lzdFN0b3JlKHN0b3JlKTtcblxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0b3JlXG5cbiIsImltcG9ydCBVc2VyQWN0aW9uVHlwZXMgZnJvbSBcIi4vdXNlci10eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2lnaW5TdWNjZXNzID0gKHNpZ25lZEluKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVUNDRVNTLFxuICBwYXlsb2FkOiBzaWduZWRJbixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbmluU3RhcnQgPSAodXNlckNyZWRlbnRpYWxzKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVEFSVCxcbiAgcGF5bG9hZDogdXNlckNyZWRlbnRpYWxzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWdudXBTdGFydCA9ICh1c2VyQ3JlZGVudGlhbHMpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TSUdOX1VQX1NUQVJULFxuICBwYXlsb2FkOiB1c2VyQ3JlZGVudGlhbHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ251cFN1Y2Nlc3MgPSAoc3RhdHVzKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0lHTl9VUF9TVUNDRVNTLFxuICBwYXlsb2FkOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ251cEZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TSUdOX1VQX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IGVycm9yLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRpbmdDdXJyZW50VXNlciA9ICh1c2VyRGF0YSkgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkFERElOR19DVVJSRU5UX1VTRVIsXG4gIHBheWxvYWQ6IHVzZXJEYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlciA9ICh1c2VyKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfVVNFUixcbiAgcGF5bG9hZDogdXNlcixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnaW5GYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9GQUlMVVJFLFxuICBwYXlsb2FkOiBlcnJvcixcbn0pO1xuXG5leHBvcnQgY29uc3QgaXNMb2FkaW5nID0gKGxvYWRpbmdTdGF0ZSkgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkxPQURJTkcsXG4gIHBheWxvYWQ6IGxvYWRpbmdTdGF0ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXV0aEZhY2Vib29rID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5BVVRIX0ZBQ0VCT09LLFxuICBwYXlsb2FkOiBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmYWNlYm9va0F1dGhTdWNjZXNzID0gKHRva2VuKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuQVVUSF9GQl9TVUNDRVNTLFxuICBwYXlsb2FkOiB0b2tlbixcbn0pO1xuXG5leHBvcnQgY29uc3QgZmJBdXRoRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkFVVEhfRkJfRkFJTFVSRSxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXQgPSAodG9rZW4pID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5MT0dfT1VULFxuICBwYXlsb2FkOiB0b2tlbixcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlckxvZ291dFN1Y2Nlc3MgPSAoKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuTE9HX09VVF9TVUNDRVNTLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0RmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkxPR19PVVRfRkFJTFVSRSxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcblxuZXhwb3J0IGNvbnN0IHZlcmlmeVBheW1lbnQgPSAoZGV0YWlscykgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlZFUklGWV9QQVlNRU5ULFxuICBwYXlsb2FkOiBkZXRhaWxzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBwYXltZW50U3VjY2Vzc2Z1bCA9IChwbGFuKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuUEFZTUVOVF9TVUNDRVNTRlVMLFxuICBwYXlsb2FkOiBwbGFuLFxufSk7XG5cbmV4cG9ydCBjb25zdCBwYXltZW50RmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlBBWU1FTlRfRkFJTEVELFxuICBwYXlsb2FkOiBlcnJvcixcbn0pO1xuIiwiaW1wb3J0IFVzZXJBY3Rpb25UeXBlcyBmcm9tIFwiLi91c2VyLXR5cGVzXCI7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGN1cnJlbnRVc2VyOiBudWxsLFxuICBmYlRva2VuOiB7XG4gICAgdG9rZW46IG51bGwsXG4gICAgZXhwaXJlczogbnVsbCxcbiAgfSxcbiAgc2lnbmVkSW46IGZhbHNlLFxuICBsb2dvdXQ6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5TRVRfQ1VSUkVOVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIHNpZ25lZEluOiB0cnVlLFxuICAgICAgICBsb2dvdXQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5TSUdOX0lOX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2lnbmVkSW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuTE9BRElORzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLkFVVEhfRkJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmYlRva2VuOiB7IC4uLmFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgIGN1cnJlbnRVc2VyOiB7IC4uLnN0YXRlLmN1cnJlbnRVc2VyLCBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lIH0sXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5MT0dfT1VUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudFVzZXI6IG51bGwsXG4gICAgICAgIGZiVG9rZW46IHtcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzaWduZWRJbjogZmFsc2UsXG4gICAgICAgIGxvZ291dDogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLlBBWU1FTlRfU1VDQ0VTU0ZVTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50VXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLmN1cnJlbnRVc2VyLFxuICAgICAgICAgIHBsYW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9GQUlMVVJFOlxuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLkFVVEhfRkJfRkFJTFVSRTpcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5TSUdOX1VQX0ZBSUxVUkU6XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuTE9HX09VVF9GQUlMVVJFOlxuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLlBBWU1FTlRfRkFJTEVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgVXNlckFjdGlvblR5cGVzIGZyb20gXCIuL3VzZXItdHlwZXNcIjtcbmltcG9ydCB7XG4gIHNpZ2luU3VjY2VzcyxcbiAgc2lnbnVwU3VjY2VzcyxcbiAgc2lnbnVwRmFpbHVyZSxcbiAgc2V0Q3VycmVudFVzZXIsXG4gIHNpZ2luRmFpbHVyZSxcbiAgaXNMb2FkaW5nLFxuICBmYWNlYm9va0F1dGhTdWNjZXNzLFxuICBmYkF1dGhGYWlsdXJlLFxuICB1c2VyTG9nb3V0U3VjY2VzcyxcbiAgdXNlckxvZ291dEZhaWx1cmUsXG4gIHBheW1lbnRTdWNjZXNzZnVsLFxuICBwYXltZW50RmFpbHVyZSxcbn0gZnJvbSBcIi4vdXNlci1hY3Rpb25zXCI7XG5pbXBvcnQgeyBzZXRDb3VudCB9IGZyb20gXCIuLi9zZWFyY2gvc2VhcmNoLWFjdGlvbnNcIjtcbmltcG9ydCB7XG4gIGZiQXV0aGVudGljYXRpb24sXG4gIHNpZ25VcCxcbiAgc2lnbkluLFxuICB1c2VyTG9nb3V0LFxuICB2ZXJpZnlQYXltZW50LFxufSBmcm9tIFwiLi4vLi4vYXBpL2FwaVwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIHNldFVzZXIoeyBwYXlsb2FkIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKHRydWUpKTtcbiAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXJcIik7XG4gICAgfVxuXG4gICAgeWllbGQgcHV0KHNldEN1cnJlbnRVc2VyKHBheWxvYWQpKTtcbiAgICB5aWVsZCBwdXQoc2lnaW5TdWNjZXNzKHRydWUpKTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHNpZ2luRmFpbHVyZShlcnJvcikpO1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25VcFVzZXIoeyBwYXlsb2FkIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKHRydWUpKTtcbiAgICBjb25zb2xlLmxvZyhcInRoZSBwYXlsb2FkXCIsIHBheWxvYWQpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIHNpZ25VcChwYXlsb2FkLmVtYWlsLCBwYXlsb2FkLnBhc3N3b3JkKTtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgaWQ6IHJlcy5faWQsXG4gICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgIGVtYWlsOiByZXMuZW1haWwsXG4gICAgICB4VG9rZW46IHJlcy54VG9rZW4sXG4gICAgICBwbGFuOiByZXMucGxhbixcbiAgICB9O1xuICAgIHlpZWxkIHB1dChzZXRDdXJyZW50VXNlcih1c2VyRGF0YSkpO1xuICAgIHlpZWxkIHB1dChzZXRDb3VudChyZXMuc2VhcmNoQ291bnQpKTtcbiAgICB5aWVsZCBwdXQoc2lnbnVwU3VjY2Vzcyh0cnVlKSk7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChzaWdudXBGYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBzaWduSW5Vc2VyKHsgcGF5bG9hZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyh0cnVlKSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgc2lnbkluKHBheWxvYWQuZW1haWwsIHBheWxvYWQucGFzc3dvcmQpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgaWQ6IHJlcy5faWQsXG4gICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgIGVtYWlsOiByZXMuZW1haWwsXG4gICAgICB4VG9rZW46IHJlcy54VG9rZW4sXG4gICAgICBwbGFuOiByZXMucGxhbixcbiAgICB9O1xuICAgIHlpZWxkIHB1dChzZXRDdXJyZW50VXNlcih1c2VyRGF0YSkpO1xuICAgIHlpZWxkIHB1dChzZXRDb3VudChyZXMuc2VhcmNoQ291bnQpKTtcbiAgICBjb25zb2xlLmxvZyhcInNlYXJjaCBjb3VudFwiLCByZXMuc2VhcmNoQ291bnQpO1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgeWllbGQgcHV0KHNpZ2luRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogZmFjZWJvb2tBdXRoKHsgcGF5bG9hZCB9KSB7XG4gIHlpZWxkIHB1dChpc0xvYWRpbmcodHJ1ZSkpO1xuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW4sIGlkLCBmYklkLCBuYW1lIH0gPSBwYXlsb2FkO1xuICAgIGNvbnNvbGUubG9nKFwicGF5bG9hZFwiLCBwYXlsb2FkKTtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKHRydWUpKTtcbiAgICBjb25zdCBmYlRva2VuID0geWllbGQgZmJBdXRoZW50aWNhdGlvbih0b2tlbiwgaWQsIGZiSWQsIG5hbWUpO1xuXG4gICAgeWllbGQgcHV0KGZhY2Vib29rQXV0aFN1Y2Nlc3MoZmJUb2tlbikpO1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmJBdXRoRmFpbHVyZShlcnJvcikpO1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dCh7IHBheWxvYWQgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIHB1dChpc0xvYWRpbmcodHJ1ZSkpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIHVzZXJMb2dvdXQocGF5bG9hZCk7XG4gICAgaWYgKHJlcyA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJsb2dvdXQgZG9uZVwiKTtcbiAgICAgIHlpZWxkIHB1dCh1c2VyTG9nb3V0U3VjY2VzcygpKTtcbiAgICAgIHlpZWxkIHB1dChpc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGlzTG9hZGluZyhmYWxzZSkpO1xuICAgIHlpZWxkIHB1dCh1c2VyTG9nb3V0RmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogdmVyaWZ5VXNlclBheW1lbnQoeyBwYXlsb2FkIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKHRydWUpKTtcbiAgICBjb25zdCB7IHRva2VuLCByZWYsIHBsYW4gfSA9IHBheWxvYWQ7XG4gICAgY29uc3QgcmVzID0geWllbGQgdmVyaWZ5UGF5bWVudCh0b2tlbiwgcGxhbiwgcmVmKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgc2FnYVwiLCByZXMpO1xuICAgIGlmIChyZXMucGxhbiA9PSBcIlBMMDAyXCIpIHtcbiAgICAgIHlpZWxkIHB1dChwYXltZW50U3VjY2Vzc2Z1bChyZXMucGxhbikpO1xuICAgICAgY29uc29sZS5sb2coXCJwYWlkXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoaXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgeWllbGQgcHV0KHBheW1lbnRGYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvbkFkZGluZ0N1cnJlbnRVc2VyKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVzZXJBY3Rpb25UeXBlcy5BRERJTkdfQ1VSUkVOVF9VU0VSLCBzZXRVc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvblNpZ251cFN0YXJ0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVzZXJBY3Rpb25UeXBlcy5TSUdOX1VQX1NUQVJULCBzaWduVXBVc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvblNpZ25pblN0YXJ0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVzZXJBY3Rpb25UeXBlcy5TSUdOX0lOX1NUQVJULCBzaWduSW5Vc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvbkF1dGhGYWNlYm9vaygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVc2VyQWN0aW9uVHlwZXMuQVVUSF9GQUNFQk9PSywgZmFjZWJvb2tBdXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvbkxvZ291dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVc2VyQWN0aW9uVHlwZXMuTE9HX09VVCwgbG9nb3V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBvblZlcmlmeVBheW1lbnQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVXNlckFjdGlvblR5cGVzLlZFUklGWV9QQVlNRU5ULCB2ZXJpZnlVc2VyUGF5bWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogdXNlclNhZ2FzKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGNhbGwob25BdXRoRmFjZWJvb2spLFxuICAgIGNhbGwob25BZGRpbmdDdXJyZW50VXNlciksXG4gICAgY2FsbChvblNpZ25pblN0YXJ0KSxcbiAgICBjYWxsKG9uU2lnbnVwU3RhcnQpLFxuICAgIGNhbGwob25Mb2dvdXQpLFxuICAgIGNhbGwob25WZXJpZnlQYXltZW50KSxcbiAgXSk7XG59XG4iLCJjb25zdCBVc2VyQWN0aW9uVHlwZXMgPSB7XG4gIFNFVF9DVVJSRU5UX1VTRVI6IFwiU0VUX0NVUlJFTlRfVVNFUlwiLFxuICBTSUdOX0lOX1NUQVJUOiBcIlNJR05fSU5fU1RBUlRcIixcbiAgU0lHTl9JTl9TVUNDRVNTOiBcIlNJR05fSU5fU1VDQ0VTU1wiLFxuICBTSUdOX0lOX0ZBSUxVUkU6IFwiU0lHTl9JTl9GQUlMVVJFXCIsXG4gIEFVVEhfRkJfU1RBUlQ6IFwiQVVUSF9GQl9TVEFSVFwiLFxuICBBVVRIX0ZCX1NVQ0NFU1M6IFwiQVVUSF9GQl9TVUNDRVNTXCIsXG4gIEFVVEhfRkJfRkFJTFVSRTogXCJBVVRIX0ZCX0ZBSUxVUkVcIixcbiAgQURESU5HX0NVUlJFTlRfVVNFUjogXCJBRERJTkdfQ1VSUkVOVF9VU0VSXCIsXG4gIExPQURJTkc6IFwiTE9BRElOR1wiLFxuICBBVVRIX0ZBQ0VCT09LOiBcIkFVVEhfRkFDRUJPT0tcIixcbiAgU0lHTl9VUF9TVEFSVDogXCJTSUdOX1VQX1NUQVJUXCIsXG4gIFNJR05fVVBfU1VDQ0VTUzogXCJTSUdOX1VQX1NVQ0NFU1NcIixcbiAgU0lHTl9VUF9GQUlMVVJFOiBcIlNJR05fVVBfRkFJTFVSRVwiLFxuICBMT0dfT1VUOiBcIkxPR19PVVRcIixcbiAgTE9HX09VVF9TVUNDRVNTOiBcIkxPR19PVVRfU1VDQ0VTU1wiLFxuICBMT0dfT1VUX0ZBSUxVUkU6IFwiTE9HX09VVF9GQUlMVVJFXCIsXG4gIFZFUklGWV9QQVlNRU5UOiBcIlZFUklGWV9QQVlNRU5UXCIsXG4gIFBBWU1FTlRfU1VDQ0VTU0ZVTDogXCJQQVlNRU5UX1NVQ0NFU1NGVUxcIixcbiAgUEFZTUVOVF9GQUlMRUQ6IFwiUEFZTUVOVF9GQUlMRURcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBY3Rpb25UeXBlcztcbiIsImV4cG9ydCBjb25zdCBhZGRTY29yZSA9IChkYXRhLCBzY29yZSkgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcInJlbGV2YW5jZVwiKSkge1xuICAgICAgcmV0dXJuIChpdGVtLnJlbGV2YW5jZSA9IGl0ZW0ucmVsZXZhbmNlICsgc2NvcmUpO1xuICAgIH1cbiAgICBpdGVtW1wicmVsZXZhbmNlXCJdID0gc2NvcmU7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuXG4gIHJldHVybiB1cGRhdGVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEludGVyZXN0TmFtZXMgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBuYW1lcyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zS2V5d29yZCA9IChrZXksIHBocmFzZSkgPT4ge1xuICBjb25zdCBsb3dlclBocmFzZSA9IHBocmFzZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBsb3dlcktleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiBsb3dlclBocmFzZS5pbmRleE9mKGxvd2VyS2V5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGxpdEFycmF5ID0gKGFycmF5LCBzaXplKSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgY29uc3Qgc2V0TnVtYmVyID0gTWF0aC5jZWlsKGxlbmd0aCAvIHNpemUpO1xuICBsZXQgbGltaXQgPSBzaXplO1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgYXJyYXlTcGxpdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0TnVtYmVyOyBpKyspIHtcbiAgICBjb25zdCBzZXQgPSBhcnJheS5zbGljZShzdGFydCwgbGltaXQpO1xuICAgIGFycmF5U3BsaXQucHVzaChzZXQpO1xuICAgIGxpbWl0ID0gbGltaXQgKyBzaXplO1xuICAgIHN0YXJ0ID0gc3RhcnQgKyBzaXplO1xuICB9XG4gIHJldHVybiBhcnJheVNwbGl0O1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExpbmtzID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHVwZGF0ZWQgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGl0ZW1bXCJsaW5rc1wiXSA9IFtcbiAgICAgIGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VhcmNoL3BhZ2VzLz9xPSR7aXRlbS5uYW1lfWAsXG4gICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2l0ZW0ubmFtZX1gLFxuICAgIF07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuXG4gIHJldHVybiB1cGRhdGVkO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ3RtLW1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=