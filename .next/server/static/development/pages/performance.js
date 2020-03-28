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
/*! exports provided: fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, paginateAdAccounts */
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
  GET_ADACCOUNTS: fbId => `${"http://localhost:8080/"}facebook/adaccounts/${fbId}`
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
    className: "jsx-80624705",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-80624705" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.name), __jsx("div", {
    className: "jsx-80624705" + " " + "id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.accountId ? props.accountId.replace("act_", "") : ""), __jsx("div", {
    className: "jsx-80624705" + " " + `_${props.status}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, status()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "80624705",
    __self: this
  }, "#wrapper.jsx-80624705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;padding:5px;cursor:pointer;}.name.jsx-80624705{color:gray;font-weight:bold;}._1.jsx-80624705{color:green;}._2.jsx-80624705,._3.jsx-80624705,._7.jsx-80624705,._8.jsx-80624705,._9.jsx-80624705,._100.jsx-80624705,._101.jsx-80624705,._201.jsx-80624705,._202.jsx-80624705{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2FkQWNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBR3dCLEFBU0EsQUFLQyxBQVFGLFVBQ2QsQ0FicUIsQ0FLckIsZ0JBSkEsOENBVndCLDhFQUNBLHNCQUNKLGtCQUNOLFlBQ0csZUFDakIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvYWRBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQWRBY2NvdW50KHByb3BzKSB7XG4gIGNvbnN0IHN0YXR1cyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHByb3BzLnN0YXR1cykge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gXCJBQ1RJVkVcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIFwiRElTQUJMRURcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiVU5TRVRUTEVEXCI7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiBcIlBFTkRJTkcgUklTSyBSRVZJRVdcIjtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIFwiUEVORElORyBTRVRUTEVNRU5UXCI7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBcIklOIEdSQUNFIFBFUklPRFwiO1xuICAgICAgY2FzZSAxMDA6XG4gICAgICAgIHJldHVybiBcIlBFTkRJTkcgQ0xPU1VSRVwiO1xuICAgICAgY2FzZSAxMDE6XG4gICAgICAgIHJldHVybiBcIkNMT1NFRFwiO1xuICAgICAgY2FzZSAyMDE6XG4gICAgICAgIHJldHVybiBcIkFOWSBBQ1RJVkVcIjtcbiAgICAgIGNhc2UgMjAyOlxuICAgICAgICByZXR1cm4gXCJBTlkgQ0xPU0VEXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJOT05FXCI7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvcHMubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj5cbiAgICAgICAge3Byb3BzLmFjY291bnRJZCA/IHByb3BzLmFjY291bnRJZC5yZXBsYWNlKFwiYWN0X1wiLCBcIlwiKSA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXyR7cHJvcHMuc3RhdHVzfWB9PntzdGF0dXMoKX08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5fMSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuXzIsIC5fMyxcbiAgICAgICAgLl83LCAuXzgsXG4gICAgICAgIC5fOSwgLl8xMDAsXG4gICAgICAgIC5fMTAxLCAuXzIwMSxcbiAgICAgICAgLl8yMDIge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHsvKiAuc3RhdHVze1xuICAgICAgICAgICAgY29sb3I6Z3JlZW47XG4gICAgICAgIH0gKi99XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkQWNjb3VudDtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/adAccount.js */"));
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
      next: '',
      previous: ''
    }
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

  const setModalVisible = modalVisible => {
    setState(_objectSpread({}, state, {
      modalVisible
    }));
  };

  const fetchAdAccounts = async () => {
    if (state.modalVisible) {
      const adAccounts = await Object(_api_api__WEBPACK_IMPORTED_MODULE_16__["getAdAccounts"])(fbId, user.xToken);
      console.log(adAccounts);
      setState(_objectSpread({}, state, {
        adAccounts: adAccounts,
        paging: {
          next: adAccounts.paging.next && adAccounts.paging.next,
          previous: adAccounts.paging.previous && adAccounts.paging.previous
        }
      }));
    }
  };

  const handlePagination = async page => {
    const adAccounts = await Object(_api_api__WEBPACK_IMPORTED_MODULE_16__["paginateAdAccounts"])(page);
    console.log('paginate', adAccounts);
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
      lineNumber: 100
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 16,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "selection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "button item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: () => setModalVisible(true),
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Select Ad account")), __jsx("div", {
    className: "jsx-232318478" + " " + "select item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      width: "100%"
    },
    placeholder: "Select campaign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(Option, {
    value: "jack",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Jack"), __jsx(Option, {
    value: "lucy",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Lucy"), __jsx(Option, {
    value: "disabled",
    disabled: true,
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Disabled"), __jsx(Option, {
    value: "Yiminghe",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "yiminghe"))), __jsx("div", {
    className: "jsx-232318478" + " " + "select item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      width: "100%"
    },
    placeholder: "Select adset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(Option, {
    value: "jack",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Jack"), __jsx(Option, {
    value: "lucy",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Lucy"), __jsx(Option, {
    value: "disabled",
    disabled: true,
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Disabled"), __jsx(Option, {
    value: "Yiminghe",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "yiminghe"))), __jsx("div", {
    className: "jsx-232318478" + " " + "select item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      width: "100%"
    },
    placeholder: "Select ad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(Option, {
    value: "jack",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Jack"), __jsx(Option, {
    value: "lucy",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Lucy"), __jsx(Option, {
    value: "disabled",
    disabled: true,
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Disabled"), __jsx(Option, {
    value: "Yiminghe",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "yiminghe"))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    id: "chart",
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-232318478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_components_table__WEBPACK_IMPORTED_MODULE_14__["default"], {
    columns: _utils_table__WEBPACK_IMPORTED_MODULE_13__["performanceColumns"],
    onSelection: onSelectionChange,
    selectedRowKeys: selectedRowKeys,
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }))))), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Select an Ad account",
    centered: true,
    visible: state.modalVisible,
    onOk: () => handlePagination(state.paging.next),
    onCancel: () => handlePagination(state.paging.previous),
    okText: "Next",
    cancelText: "Previous",
    okButtonProps: {
      disabled: !!!state.paging.next
    },
    cancelButtonProps: {
      disabled: !!!state.paging.previous
    },
    width: 1300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "adAccounts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-232318478" + " " + "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, state.adAccounts ? state.adAccounts.data.map((item, index) => __jsx("div", {
    key: index,
    className: "jsx-232318478" + " " + "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(_components_adAccount__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: item.name,
    accountId: item.id,
    status: item.account_status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))) : "Loading..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "232318478",
    __self: this
  }, "#performance.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin-top:70px;width:100%;}.selection.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;height:auto;padding:10px;}.item.jsx-232318478{margin-bottom:30px;width:100%;}.stats.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.adAccounts.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.adAccounts.jsx-232318478 .inner.jsx-232318478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;}.account.jsx-232318478{min-width:20%;margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9wZXJmb3JtYW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTFMsQUFHMEIsQUFPQSxBQVNNLEFBSU4sQUFLQSxBQUtBLEFBTUMsY0FDRixLQXBCRCxPQXFCYixJQXBCQSw0Q0FqQm9CLEFBT0ksQUFhQSxBQUtDLEFBS1Isa0JBN0JDLGdCQUNMLFdBQ2IsWUE0QlksVUFDWixXQXhCd0IsQUFheEIscUJBS0EsQ0FqQm9CLGtCQUNOLFlBQ0MsYUFDZiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvcGFnZXMvcGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgY2hhcnREYXRhIH0gZnJvbSBcIi4uL3V0aWxzL3RhYmxlXCI7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy90YWJsZVwiO1xuaW1wb3J0IEFkQWNjb3VudCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZEFjY291bnRcIjtcbmltcG9ydCB7IHBlcmZvcm1hbmNlQ29sdW1ucyB9IGZyb20gXCIuLi91dGlscy90YWJsZVwiO1xuaW1wb3J0IHsgZ2V0QWRBY2NvdW50cywgcGFnaW5hdGVBZEFjY291bnRzIH0gZnJvbSBcIi4uL2FwaS9hcGlcIjtcblxuZnVuY3Rpb24gUGVyZm9ybWFuY2UocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgbW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICBzZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgcGFnaW5nOiB7XG4gICAgICBuZXh0OiAnJyxcbiAgICAgIHByZXZpb3VzOiAnJ1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgeyBmYklkLCB1c2VyIH0gPSBwcm9wcztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uIGJyb3dzZXJcIik7XG4gICAgICBjb25zdCB7IENvbHVtbiB9ID0gcmVxdWlyZShcIkBhbnR2L2cycGxvdFwiKTtcblxuICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQ29sdW1uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIiksIHtcbiAgICAgICAgZGF0YTogY2hhcnREYXRhLFxuICAgICAgICB4RmllbGQ6IFwibmFtZVwiLFxuICAgICAgICB5RmllbGQ6IFwidmFsdWVcIixcbiAgICAgICAgcGFkZGluZzogXCJhdXRvXCIsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiBcIkludGVyZXN0IHN0YXRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgZm9yY2VGaXQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJlbFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0XCIpKTtcbiAgICAgIGNoYXJ0LnJlbmRlcigpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hBZEFjY291bnRzKCk7XG4gIH0sIFtzdGF0ZS5tb2RhbFZpc2libGVdKTtcblxuICBjb25zdCBzZXRNb2RhbFZpc2libGUgPSBtb2RhbFZpc2libGUgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbW9kYWxWaXNpYmxlXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hBZEFjY291bnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5tb2RhbFZpc2libGUpIHtcbiAgICAgIGNvbnN0IGFkQWNjb3VudHMgPSBhd2FpdCBnZXRBZEFjY291bnRzKGZiSWQsIHVzZXIueFRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKGFkQWNjb3VudHMpO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRBY2NvdW50czogYWRBY2NvdW50cyxcbiAgICAgICAgcGFnaW5nOiB7XG4gICAgICAgICAgbmV4dDogYWRBY2NvdW50cy5wYWdpbmcubmV4dCAmJiBhZEFjY291bnRzLnBhZ2luZy5uZXh0LFxuICAgICAgICAgIHByZXZpb3VzOiBhZEFjY291bnRzLnBhZ2luZy5wcmV2aW91cyAmJiBhZEFjY291bnRzLnBhZ2luZy5wcmV2aW91cyxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBhc3luYyAocGFnZSkgPT4ge1xuICAgIGNvbnN0IGFkQWNjb3VudHMgPSBhd2FpdCBwYWdpbmF0ZUFkQWNjb3VudHMocGFnZSlcbiAgICBjb25zb2xlLmxvZygncGFnaW5hdGUnLGFkQWNjb3VudHMpXG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhZEFjY291bnRzOiBhZEFjY291bnRzLFxuICAgICAgcGFnaW5nOiB7XG4gICAgICAgIG5leHQ6IGFkQWNjb3VudHMucGFnaW5nLm5leHQgJiYgYWRBY2NvdW50cy5wYWdpbmcubmV4dCxcbiAgICAgICAgcHJldmlvdXM6IGFkQWNjb3VudHMucGFnaW5nLnByZXZpb3VzICYmIGFkQWNjb3VudHMucGFnaW5nLnByZXZpb3VzLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJvd3NcIiwgc2VsZWN0ZWRSb3dzKTtcbiAgICBjb25zdCBzZWxlY3RlZEludGVyZXN0ID0gc2VsZWN0ZWRSb3dzLm1hcChpbnRlcmVzdCA9PiB7XG4gICAgICByZXR1cm4gaW50ZXJlc3QubmFtZTtcbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICAgIHNlbGVjdGVkSW50ZXJlc3QsXG4gICAgICBzZWxlY3RlZFJvd3NcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gc3RhdGU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInBlcmZvcm1hbmNlXCI+XG4gICAgICA8Um93IGd1dHRlcj17MTZ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgPENvbCBzcGFuPXs0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gaXRlbVwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsVmlzaWJsZSh0cnVlKX0gYmxvY2s+XG4gICAgICAgICAgICAgICAgU2VsZWN0IEFkIGFjY291bnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IGl0ZW1cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gcGxhY2Vob2xkZXI9XCJTZWxlY3QgY2FtcGFpZ25cIj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPkphY2s8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkx1Y3k8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZGlzYWJsZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIERpc2FibGVkXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+eWltaW5naGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IGl0ZW1cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gcGxhY2Vob2xkZXI9XCJTZWxlY3QgYWRzZXRcIj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPkphY2s8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkx1Y3k8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZGlzYWJsZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIERpc2FibGVkXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+eWltaW5naGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IGl0ZW1cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gcGxhY2Vob2xkZXI9XCJTZWxlY3QgYWRcIj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPkphY2s8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkx1Y3k8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZGlzYWJsZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIERpc2FibGVkXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+eWltaW5naGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFydFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgY29sdW1ucz17cGVyZm9ybWFuY2VDb2x1bW5zfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXtvblNlbGVjdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9e3NlbGVjdGVkUm93S2V5c31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIlNlbGVjdCBhbiBBZCBhY2NvdW50XCJcbiAgICAgICAgY2VudGVyZWRcbiAgICAgICAgdmlzaWJsZT17c3RhdGUubW9kYWxWaXNpYmxlfVxuICAgICAgICBvbk9rPXsoKSA9PiBoYW5kbGVQYWdpbmF0aW9uKHN0YXRlLnBhZ2luZy5uZXh0KX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IGhhbmRsZVBhZ2luYXRpb24oc3RhdGUucGFnaW5nLnByZXZpb3VzKX1cbiAgICAgICAgb2tUZXh0PVwiTmV4dFwiXG4gICAgICAgIGNhbmNlbFRleHQ9IFwiUHJldmlvdXNcIlxuICAgICAgICBva0J1dHRvblByb3BzPSB7e2Rpc2FibGVkOiAhKCEhc3RhdGUucGFnaW5nLm5leHQpfX1cbiAgICAgICAgY2FuY2VsQnV0dG9uUHJvcHM9IHt7ZGlzYWJsZWQ6ICEoISFzdGF0ZS5wYWdpbmcucHJldmlvdXMpfX1cbiAgICAgICAgd2lkdGg9ezEzMDB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRBY2NvdW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICB7c3RhdGUuYWRBY2NvdW50c1xuICAgICAgICAgICAgPyBzdGF0ZS5hZEFjY291bnRzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPEFkQWNjb3VudCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkPXtpdGVtLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXtpdGVtLmFjY291bnRfc3RhdHVzfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgI3BlcmZvcm1hbmNlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbGVjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hZEFjY291bnRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWRBY2NvdW50cyAuaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFjY291bnQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgZmJJZDogc3RhdGUudXNlci5mYlRva2VuLmZiSWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGVyZm9ybWFuY2UpO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/performance.js */"));
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