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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, paginateAdAccounts, getCampaigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbAuthentication", function() { return fbAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInterest", function() { return searchInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestSuggestions", function() { return getInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileInterestSuggestions", function() { return compileInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdAccounts", function() { return getAdAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateAdAccounts", function() { return paginateAdAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaigns", function() { return getCampaigns; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ "./api/endpoints.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");



const fbAuthentication = async (token, id, fbId) => {
  const url = _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].FB_AUTH;
  const params = {
    token,
    id,
    fbId
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    params
  });
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
const paginateAdAccounts = async page => {
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
  GET_CAMPAIGNS: accountId => `${"http://localhost:8080/"}facebook/campaigns/${accountId}`
};
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ }),

/***/ "./components/adAccount.js":
/*!*********************************!*\
  !*** ./components/adAccount.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/adAccount.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function AdAccount(props) {
  const status = () => {
    switch (props.status) {
      case 1:
        return "ACTIVE";

      case 2:
        return "DISABLED";

      case 3:
        return "UNSETTLED";

      case 7:
        return "PENDING RISK REVIEW";

      case 8:
        return "PENDING SETTLEMENT";

      case 9:
        return "IN GRACE PERIOD";

      case 100:
        return "PENDING CLOSURE";

      case 101:
        return "CLOSED";

      case 201:
        return "ANY ACTIVE";

      case 202:
        return "ANY CLOSED";

      default:
        return "NONE";
    }
  };

  return __jsx("div", {
    id: "wrapper",
    onClick: () => props.onSelect(props.accountId, props.name),
    className: "jsx-80624705",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-80624705" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.name), __jsx("div", {
    className: "jsx-80624705" + " " + "id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.accountId ? props.accountId.replace("act_", "") : ""), __jsx("div", {
    className: "jsx-80624705" + " " + `_${props.status}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, status()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "80624705",
    __self: this
  }, "#wrapper.jsx-80624705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;padding:5px;cursor:pointer;}.name.jsx-80624705{color:gray;font-weight:bold;}._1.jsx-80624705{color:green;}._2.jsx-80624705,._3.jsx-80624705,._7.jsx-80624705,._8.jsx-80624705,._9.jsx-80624705,._100.jsx-80624705,._101.jsx-80624705,._201.jsx-80624705,._202.jsx-80624705{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2FkQWNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR3dCLEFBU0EsQUFLQyxBQVFGLFVBQ2QsQ0FicUIsQ0FLckIsZ0JBSkEsOENBVndCLDhFQUNBLHNCQUNKLGtCQUNOLFlBQ0csZUFDakIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvYWRBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQWRBY2NvdW50KHByb3BzKSB7XG4gIGNvbnN0IHN0YXR1cyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHByb3BzLnN0YXR1cykge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gXCJBQ1RJVkVcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIFwiRElTQUJMRURcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiVU5TRVRUTEVEXCI7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiBcIlBFTkRJTkcgUklTSyBSRVZJRVdcIjtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIFwiUEVORElORyBTRVRUTEVNRU5UXCI7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBcIklOIEdSQUNFIFBFUklPRFwiO1xuICAgICAgY2FzZSAxMDA6XG4gICAgICAgIHJldHVybiBcIlBFTkRJTkcgQ0xPU1VSRVwiO1xuICAgICAgY2FzZSAxMDE6XG4gICAgICAgIHJldHVybiBcIkNMT1NFRFwiO1xuICAgICAgY2FzZSAyMDE6XG4gICAgICAgIHJldHVybiBcIkFOWSBBQ1RJVkVcIjtcbiAgICAgIGNhc2UgMjAyOlxuICAgICAgICByZXR1cm4gXCJBTlkgQ0xPU0VEXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJOT05FXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblNlbGVjdChwcm9wcy5hY2NvdW50SWQsIHByb3BzLm5hbWUpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9wcy5uYW1lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPlxuICAgICAgICB7cHJvcHMuYWNjb3VudElkID8gcHJvcHMuYWNjb3VudElkLnJlcGxhY2UoXCJhY3RfXCIsIFwiXCIpIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BfJHtwcm9wcy5zdGF0dXN9YH0+e3N0YXR1cygpfTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLl8xIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5fMiwgLl8zLFxuICAgICAgICAuXzcsIC5fOCxcbiAgICAgICAgLl85LCAuXzEwMCxcbiAgICAgICAgLl8xMDEsIC5fMjAxLFxuICAgICAgICAuXzIwMiB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgey8qIC5zdGF0dXN7XG4gICAgICAgICAgICBjb2xvcjpncmVlbjtcbiAgICAgICAgfSAqL31cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRBY2NvdW50O1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/adAccount.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AdAccount);

/***/ }),

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ "antd/lib/table/style");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "antd/lib/table");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

const InterestTable = props => {
  const rowSelection = {
    selectedRowKeys: props.selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      props.onSelection(selectedRowKeys, selectedRows);
    }
  };
  return __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    rowSelection: rowSelection,
    columns: props.columns,
    dataSource: props.dataSource,
    rowKey: record => record.id,
    pagination: {
      showSizeChanger: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (InterestTable);

/***/ }),

/***/ "./pages/performance.js":
/*!******************************!*\
  !*** ./pages/performance.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/table */ "./utils/table.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/table */ "./components/table.js");
/* harmony import */ var _components_adAccount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/adAccount */ "./components/adAccount.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../api/api */ "./api/api.js");










var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/performance.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Performance(props) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    modalVisible: false,
    selectedRowKeys: null,
    paging: {
      next: "",
      previous: ""
    },
    selectedAdAccount: {},
    fetchingCampaigns: false
  });
  const {
    fbId,
    user
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {
    if (false) {}
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {
    fetchAdAccounts();
  }, [state.modalVisible]);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {
    if (state.selectedAdAccount.id) {
      fetchCampaigns();
    }
  }, [state.selectedAdAccount]);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {}, [state.campaigns]);

  const setModalVisible = modalVisible => {
    setState(_objectSpread({}, state, {
      modalVisible
    }));
  };

  const fetchAdAccounts = async () => {
    if (state.modalVisible) {
      const adAccounts = await Object(_api_api__WEBPACK_IMPORTED_MODULE_16__["getAdAccounts"])(fbId, user.xToken);
      setState(_objectSpread({}, state, {
        adAccounts: adAccounts,
        paging: {
          next: adAccounts.paging.next && adAccounts.paging.next,
          previous: adAccounts.paging.previous && adAccounts.paging.previous
        }
      }));
    }
  };

  const fetchCampaigns = async () => {
    setState(_objectSpread({}, state, {
      fetchingCampaigns: true
    }));
    const accountId = state.selectedAdAccount.id;
    const res = await Object(_api_api__WEBPACK_IMPORTED_MODULE_16__["getCampaigns"])(accountId, user.xToken);
    console.log("campaigns", res);
    setState(_objectSpread({}, state, {
      campaigns: res
    }));
  };

  const handlePagination = async page => {
    const adAccounts = await Object(_api_api__WEBPACK_IMPORTED_MODULE_16__["paginateAdAccounts"])(page);
    console.log("paginate", adAccounts);
    setState(_objectSpread({}, state, {
      adAccounts: adAccounts,
      paging: {
        next: adAccounts.paging.next && adAccounts.paging.next,
        previous: adAccounts.paging.previous && adAccounts.paging.previous
      }
    }));
  };

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log("rows", selectedRows);
    const selectedInterest = selectedRows.map(interest => {
      return interest.name;
    });
    setState(_objectSpread({}, state, {
      selectedRowKeys,
      selectedInterest,
      selectedRows
    }));
  };

  const handleAccountSelect = (id, name) => {
    setState(_objectSpread({}, state, {
      selectedAdAccount: {
        id,
        name
      },
      modalVisible: false
    }));
  };

  const {
    Option
  } = antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a;
  const {
    selectedRowKeys
  } = state;
  return __jsx("div", {
    id: "performance",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 16,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "selection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "button item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: () => setModalVisible(true),
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, state.selectedAdAccount.name ? state.selectedAdAccount.name : "Select Ad Account")), __jsx("div", {
    className: "jsx-232318478" + " " + "select item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    showSearch: true,
    style: {
      width: "100%"
    },
    loading: state.fetchingCampaigns,
    placeholder: "Select a campaign",
    optionFilterProp: "children" // onChange={onChange}
    // onFocus={onFocus}
    // onBlur={onBlur}
    // onSearch={onSearch}
    ,
    filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, state.campaigns ? state.campaigns.data.map((item, index) => {
    return __jsx(Option, {
      value: item.id,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, item.name);
  }) : '')), __jsx("div", {
    className: "jsx-232318478" + " " + "select item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      width: "100%"
    },
    placeholder: "Select adset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(Option, {
    value: "jack",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Jack"), __jsx(Option, {
    value: "lucy",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Lucy"), __jsx(Option, {
    value: "disabled",
    disabled: true,
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Disabled"), __jsx(Option, {
    value: "Yiminghe",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "yiminghe"))), __jsx("div", {
    className: "jsx-232318478" + " " + "select item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      width: "100%"
    },
    placeholder: "Select ad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(Option, {
    value: "jack",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Jack"), __jsx(Option, {
    value: "lucy",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Lucy"), __jsx(Option, {
    value: "disabled",
    disabled: true,
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Disabled"), __jsx(Option, {
    value: "Yiminghe",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "yiminghe"))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    id: "chart",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_components_table__WEBPACK_IMPORTED_MODULE_14__["default"], {
    columns: _utils_table__WEBPACK_IMPORTED_MODULE_13__["performanceColumns"],
    onSelection: onSelectionChange,
    selectedRowKeys: selectedRowKeys,
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }))))), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Select an Ad account",
    centered: true,
    visible: state.modalVisible,
    onOk: () => setModalVisible(false),
    onCancel: () => setModalVisible(false),
    okText: "Next",
    cancelText: "Previous",
    okButtonProps: {
      disabled: !!!state.paging.next,
      onClick: () => handlePagination(state.paging.next)
    },
    cancelButtonProps: {
      disabled: !!!state.paging.previous,
      onClick: () => handlePagination(state.paging.previous)
    },
    width: 1300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "adAccounts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, state.adAccounts ? state.adAccounts.data.map((item, index) => __jsx("div", {
    key: index,
    className: "jsx-232318478" + " " + "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(_components_adAccount__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: item.name,
    accountId: item.id,
    status: item.account_status,
    onSelect: handleAccountSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }))) : "Loading..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "232318478",
    __self: this
  }, "#performance.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin-top:70px;width:100%;}.selection.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;height:auto;padding:10px;}.item.jsx-232318478{margin-bottom:30px;width:100%;}.stats.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.adAccounts.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.adAccounts.jsx-232318478 .inner.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;}.account.jsx-232318478{min-width:20%;margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9wZXJmb3JtYW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUFMsQUFHMEIsQUFPQSxBQVNNLEFBSU4sQUFLQSxBQUtBLEFBTUMsY0FDRixLQXBCRCxPQXFCYixJQXBCQSw0Q0FqQm9CLEFBT0ksQUFhQSxBQUtDLEFBS1Isa0JBN0JDLGdCQUNMLFdBQ2IsWUE0QlksVUFDWixXQXhCd0IsQUFheEIscUJBS0EsQ0FqQm9CLGtCQUNOLFlBQ0MsYUFDZiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvcGFnZXMvcGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgY2hhcnREYXRhIH0gZnJvbSBcIi4uL3V0aWxzL3RhYmxlXCI7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy90YWJsZVwiO1xuaW1wb3J0IEFkQWNjb3VudCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZEFjY291bnRcIjtcbmltcG9ydCB7IHBlcmZvcm1hbmNlQ29sdW1ucyB9IGZyb20gXCIuLi91dGlscy90YWJsZVwiO1xuaW1wb3J0IHsgZ2V0QWRBY2NvdW50cywgcGFnaW5hdGVBZEFjY291bnRzLCBnZXRDYW1wYWlnbnMgfSBmcm9tIFwiLi4vYXBpL2FwaVwiO1xuXG5mdW5jdGlvbiBQZXJmb3JtYW5jZShwcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBtb2RhbFZpc2libGU6IGZhbHNlLFxuICAgIHNlbGVjdGVkUm93S2V5czogbnVsbCxcbiAgICBwYWdpbmc6IHtcbiAgICAgIG5leHQ6IFwiXCIsXG4gICAgICBwcmV2aW91czogXCJcIlxuICAgIH0sXG4gICAgc2VsZWN0ZWRBZEFjY291bnQ6IHt9LFxuICAgIGZldGNoaW5nQ2FtcGFpZ25zOiBmYWxzZVxuICB9KTtcblxuICBjb25zdCB7IGZiSWQsIHVzZXIgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib24gYnJvd3NlclwiKTtcbiAgICAgIGNvbnN0IHsgQ29sdW1uIH0gPSByZXF1aXJlKFwiQGFudHYvZzJwbG90XCIpO1xuXG4gICAgICBjb25zdCBjaGFydCA9IG5ldyBDb2x1bW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydFwiKSwge1xuICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgIHhGaWVsZDogXCJuYW1lXCIsXG4gICAgICAgIHlGaWVsZDogXCJ2YWx1ZVwiLFxuICAgICAgICBwYWRkaW5nOiBcImF1dG9cIixcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgIHRleHQ6IFwiSW50ZXJlc3Qgc3RhdHNcIlxuICAgICAgICB9LFxuICAgICAgICBmb3JjZUZpdDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImVsXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIikpO1xuICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEFkQWNjb3VudHMoKTtcbiAgfSwgW3N0YXRlLm1vZGFsVmlzaWJsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnNlbGVjdGVkQWRBY2NvdW50LmlkKSB7XG4gICAgICBmZXRjaENhbXBhaWducygpO1xuICAgIH1cbiAgfSwgW3N0YXRlLnNlbGVjdGVkQWRBY2NvdW50XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgfSwgW3N0YXRlLmNhbXBhaWduc10pO1xuXG4gIGNvbnN0IHNldE1vZGFsVmlzaWJsZSA9IG1vZGFsVmlzaWJsZSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBtb2RhbFZpc2libGVcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmZXRjaEFkQWNjb3VudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLm1vZGFsVmlzaWJsZSkge1xuICAgICAgY29uc3QgYWRBY2NvdW50cyA9IGF3YWl0IGdldEFkQWNjb3VudHMoZmJJZCwgdXNlci54VG9rZW4pO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRBY2NvdW50czogYWRBY2NvdW50cyxcbiAgICAgICAgcGFnaW5nOiB7XG4gICAgICAgICAgbmV4dDogYWRBY2NvdW50cy5wYWdpbmcubmV4dCAmJiBhZEFjY291bnRzLnBhZ2luZy5uZXh0LFxuICAgICAgICAgIHByZXZpb3VzOiBhZEFjY291bnRzLnBhZ2luZy5wcmV2aW91cyAmJiBhZEFjY291bnRzLnBhZ2luZy5wcmV2aW91c1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hDYW1wYWlnbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBmZXRjaGluZ0NhbXBhaWduczogdHJ1ZVxuICAgIH0pXG4gICAgY29uc3QgYWNjb3VudElkID0gc3RhdGUuc2VsZWN0ZWRBZEFjY291bnQuaWQ7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q2FtcGFpZ25zKGFjY291bnRJZCwgdXNlci54VG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKFwiY2FtcGFpZ25zXCIsIHJlcyk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjYW1wYWlnbnM6IHJlc1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBhc3luYyBwYWdlID0+IHtcbiAgICBjb25zdCBhZEFjY291bnRzID0gYXdhaXQgcGFnaW5hdGVBZEFjY291bnRzKHBhZ2UpO1xuICAgIGNvbnNvbGUubG9nKFwicGFnaW5hdGVcIiwgYWRBY2NvdW50cyk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhZEFjY291bnRzOiBhZEFjY291bnRzLFxuICAgICAgcGFnaW5nOiB7XG4gICAgICAgIG5leHQ6IGFkQWNjb3VudHMucGFnaW5nLm5leHQgJiYgYWRBY2NvdW50cy5wYWdpbmcubmV4dCxcbiAgICAgICAgcHJldmlvdXM6IGFkQWNjb3VudHMucGFnaW5nLnByZXZpb3VzICYmIGFkQWNjb3VudHMucGFnaW5nLnByZXZpb3VzXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJvd3NcIiwgc2VsZWN0ZWRSb3dzKTtcbiAgICBjb25zdCBzZWxlY3RlZEludGVyZXN0ID0gc2VsZWN0ZWRSb3dzLm1hcChpbnRlcmVzdCA9PiB7XG4gICAgICByZXR1cm4gaW50ZXJlc3QubmFtZTtcbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICAgIHNlbGVjdGVkSW50ZXJlc3QsXG4gICAgICBzZWxlY3RlZFJvd3NcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50U2VsZWN0ID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzZWxlY3RlZEFkQWNjb3VudDoge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZVxuICAgICAgfSxcbiAgICAgIG1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbiAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJwZXJmb3JtYW5jZVwiPlxuICAgICAgPFJvdyBndXR0ZXI9ezE2fSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgIDxDb2wgc3Bhbj17NH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGl0ZW1cIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFZpc2libGUodHJ1ZSl9IGJsb2NrPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5zZWxlY3RlZEFkQWNjb3VudC5uYW1lXG4gICAgICAgICAgICAgICAgICA/IHN0YXRlLnNlbGVjdGVkQWRBY2NvdW50Lm5hbWVcbiAgICAgICAgICAgICAgICAgIDogXCJTZWxlY3QgQWQgQWNjb3VudFwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QgaXRlbVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3N0YXRlLmZldGNoaW5nQ2FtcGFpZ25zfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgY2FtcGFpZ25cIlxuICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJjaGlsZHJlblwiXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8vIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgICAgICAgICAgLy8gb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgICAgICAgICAgLy8gb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICBvcHRpb24ucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLmNhbXBhaWducyA/XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5jYW1wYWlnbnMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17aXRlbS5pZH0ga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBpdGVtXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFkc2V0XCI+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5KYWNrPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5MdWN5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImRpc2FibGVkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICBEaXNhYmxlZFxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJZaW1pbmdoZVwiPnlpbWluZ2hlPC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBpdGVtXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFkXCI+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5KYWNrPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5MdWN5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImRpc2FibGVkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICBEaXNhYmxlZFxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJZaW1pbmdoZVwiPnlpbWluZ2hlPC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezIwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e3BlcmZvcm1hbmNlQ29sdW1uc31cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17b25TZWxlY3Rpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzPXtzZWxlY3RlZFJvd0tleXN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9XCJTZWxlY3QgYW4gQWQgYWNjb3VudFwiXG4gICAgICAgIGNlbnRlcmVkXG4gICAgICAgIHZpc2libGU9e3N0YXRlLm1vZGFsVmlzaWJsZX1cbiAgICAgICAgb25Paz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICAgIG9rVGV4dD1cIk5leHRcIlxuICAgICAgICBjYW5jZWxUZXh0PVwiUHJldmlvdXNcIlxuICAgICAgICBva0J1dHRvblByb3BzPXt7XG4gICAgICAgICAgZGlzYWJsZWQ6ICEhIXN0YXRlLnBhZ2luZy5uZXh0LFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGhhbmRsZVBhZ2luYXRpb24oc3RhdGUucGFnaW5nLm5leHQpXG4gICAgICAgIH19XG4gICAgICAgIGNhbmNlbEJ1dHRvblByb3BzPXt7XG4gICAgICAgICAgZGlzYWJsZWQ6ICEhIXN0YXRlLnBhZ2luZy5wcmV2aW91cyxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBoYW5kbGVQYWdpbmF0aW9uKHN0YXRlLnBhZ2luZy5wcmV2aW91cylcbiAgICAgICAgfX1cbiAgICAgICAgd2lkdGg9ezEzMDB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRBY2NvdW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIHtzdGF0ZS5hZEFjY291bnRzXG4gICAgICAgICAgICAgID8gc3RhdGUuYWRBY2NvdW50cy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8QWRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e2l0ZW0uYWNjb3VudF9zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZUFjY291bnRTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgICNwZXJmb3JtYW5jZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGF0cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWRBY2NvdW50cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFkQWNjb3VudHMgLmlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY2NvdW50IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG4gIGZiSWQ6IHN0YXRlLnVzZXIuZmJUb2tlbi5mYklkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBlcmZvcm1hbmNlKTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/performance.js */"));
}

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbId: state.user.fbToken.fbId
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Performance));

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

/***/ "./utils/table.js":
/*!************************!*\
  !*** ./utils/table.js ***!
  \************************/
/*! exports provided: tableColumns, performanceColumns, chartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumns", function() { return tableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performanceColumns", function() { return performanceColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartData", function() { return chartData; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "antd/lib/tag/style");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/utils/table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
const tableColumns = [{
  title: 'Interest',
  width: 70,
  dataIndex: 'name',
  key: 'name',
  sorter: (a, b) => a.name.length - b.name.length
}, {
  title: 'Audience',
  width: 80,
  dataIndex: 'audience_size',
  key: 'audience',
  sorter: (a, b) => a.name.length - b.name.length
}, {
  title: 'Topic',
  dataIndex: 'topic',
  width: 100,
  key: 'topic'
}, {
  title: 'Path',
  dataIndex: 'path',
  key: 'path',
  width: 60,
  render: tags => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, tags ? tags.map(tag => {
    return __jsx("div", {
      style: {
        display: 'inline'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "magenta",
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, tag.toUpperCase()));
  }) : '')
}, {
  title: 'Relevance Score',
  dataIndex: 'relevance',
  width: 100,
  key: 'relevance',
  sorter: (a, b) => a - b
}];
const performanceColumns = [{
  title: 'Interest',
  width: 70,
  dataIndex: 'name',
  key: 'name',
  sorter: (a, b) => a.name.length - b.name.length
}, {
  title: 'CPC',
  width: 70,
  dataIndex: 'cpc',
  key: 'cpc',
  sorter: (a, b) => a - b
}, {
  title: 'Clicks',
  width: 70,
  dataIndex: 'clicks',
  key: 'clicks',
  sorter: (a, b) => a - b
}, {
  title: 'Spend',
  width: 70,
  dataIndex: 'spend',
  key: 'spend',
  sorter: (a, b) => a - b
}, {
  title: 'Conversions',
  width: 70,
  dataIndex: 'convertions',
  key: 'convertions',
  sorter: (a, b) => a - b
}];
const chartData = [{
  name: 'Nike',
  type: 'Spend',
  value: 38
}, {
  name: 'Adidas',
  type: 'Spend',
  value: 52
}, {
  name: 'Shoe',
  type: 'Spend',
  value: 61
}, {
  name: 'Sandals',
  type: 'Spend',
  value: 145
}, {
  name: 'Slippers',
  type: 'Spend',
  value: 48
}, {
  name: 'Shorts',
  type: 'Spend',
  value: 38
}];

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/performance.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/benkissi/projects/getch/getch-frontend-2.0/pages/performance.js */"./pages/performance.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style":
/*!*************************************!*\
  !*** external "antd/lib/col/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/modal/style":
/*!***************************************!*\
  !*** external "antd/lib/modal/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style":
/*!*************************************!*\
  !*** external "antd/lib/row/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style":
/*!****************************************!*\
  !*** external "antd/lib/select/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "antd/lib/table":
/*!*********************************!*\
  !*** external "antd/lib/table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "antd/lib/table/style":
/*!***************************************!*\
  !*** external "antd/lib/table/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table/style");

/***/ }),

/***/ "antd/lib/tag":
/*!*******************************!*\
  !*** external "antd/lib/tag" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "antd/lib/tag/style":
/*!*************************************!*\
  !*** external "antd/lib/tag/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=performance.js.map