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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dashboardLayout.js":
/*!***************************************!*\
  !*** ./components/dashboardLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "/code/ben/getch/frontend/components/dashboardLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

const DashboardLayout = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Col 6"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardLayout);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/code/ben/getch/frontend/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Header = props => {
  return __jsx("div", {
    id: "wrapper",
    className: "jsx-1118847237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1118847237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Header"), __jsx("div", {
    id: "actions",
    className: "jsx-1118847237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.actions ? props.actions.map((action, index) => __jsx("div", {
    key: index,
    className: "jsx-1118847237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, action)) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1118847237",
    __self: undefined
  }, "#wrapper.jsx-1118847237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-1118847237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:2;-ms-flex:2;flex:2;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jb2RlL2Jlbi9nZXRjaC9mcm9udGVuZC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlb0IsQUFHOEIsQUFNQSwwRUFMRixBQU1KLFdBTGUsc0JBQzFCLEFBSzZCLGlHQUM3QiIsImZpbGUiOiIvY29kZS9iZW4vZ2V0Y2gvZnJvbnRlbmQvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSGVhZGVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGlvbnMgPyBcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57YWN0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKTonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICN3cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNhY3Rpb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=/code/ben/getch/frontend/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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


var _jsxFileName = "/code/ben/getch/frontend/components/table.js";

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "react-facebook-login/dist/facebook-login-render-props");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/dashboardLayout */ "./components/dashboardLayout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/table */ "./components/table.js");
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/table */ "./utils/table.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _redux_search_search_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../redux/search/search-actions */ "./redux/search/search-actions.js");











var _jsxFileName = "/code/ben/getch/frontend/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }














const Index = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])({});
  const {
    token,
    user,
    addUser,
    fbToken,
    interestData,
    searchInterest,
    keyword,
    interestCount
  } = props;
  const {
    Search
  } = antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(() => {
    if (token) {
      const decoded = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_21__["default"])(token);
      const {
        _id,
        name,
        email,
        domain
      } = decoded;
      const userData = {
        id: _id,
        name,
        email,
        domain
      };
      addUser(userData);
    } else if (user) {
      console.log(user);
    } else {
      router.push("/signin");
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(() => {
    setState({
      interests: interestData,
      interestNumber: interestCount
    });
  }, [interestData, interestCount]);

  const faceAuthStart = () => {
    console.log('#### FB auth start');
  };

  const responseFacebook = async res => {
    const {
      authFb,
      user
    } = props;
    const {
      accessToken
    } = res;
    authFb(accessToken, user.id);
  };

  const getInterest = async value => {
    await searchInterest(fbToken.token, value, 500);
  };

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    const selectedInterest = selectedRows.map(interest => {
      return interest.name;
    });
    console.log(selectedInterest);
    setState(_objectSpread({}, state, {
      selectedRowKeys,
      selectedInterest
    }));
  };

  const actions = [__jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_15___default.a, {
    appId: "539788533190548",
    autoLoad: true,
    fields: "name,email,id",
    onClick: faceAuthStart,
    scope: "ads_management, email",
    callback: responseFacebook,
    render: renderProps => __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "primary",
      onClick: renderProps.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, "Connect Facebook"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })];
  const {
    interests,
    selectedRowKeys,
    interestNumber
  } = state;
  return __jsx(_components_dashboardLayout__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("div", {
    id: "wrapper",
    className: "jsx-685445646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_17__["default"], {
    actions: actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("div", {
    id: "main-content",
    className: "jsx-685445646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(Search, {
    placeholder: "Find Facebook interest for a keyword",
    enterButton: "Getch",
    size: "large",
    onSearch: value => getInterest(value),
    className: "jsx-685445646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), interestNumber ? __jsx("p", {
    className: "jsx-685445646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("b", {
    className: "jsx-685445646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, interestNumber), " interest found for \"", keyword, "\"") : '', __jsx("div", {
    id: "table",
    className: "jsx-685445646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_components_table__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onSelection: onSelectionChange,
    selectedRowKeys: selectedRowKeys,
    className: "table",
    columns: _utils_table__WEBPACK_IMPORTED_MODULE_19__["tableColumns"],
    dataSource: interests,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "685445646",
    __self: undefined
  }, "#wrapper.jsx-685445646{margin:10px;}#main-content.jsx-685445646{margin-top:30px;}#table.jsx-685445646{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jb2RlL2Jlbi9nZXRjaC9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SGtCLEFBR3VCLEFBR0ksQUFHQSxZQUxsQixJQUdBLEFBR0EiLCJmaWxlIjoiL2NvZGUvYmVuL2dldGNoL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBUYWcgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4vZGlzdC9mYWNlYm9vay1sb2dpbi1yZW5kZXItcHJvcHMnO1xuXG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkTGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBJbnRlcmVzdFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUnXG5cbmltcG9ydCB7dGFibGVDb2x1bW5zfSBmcm9tICcuLi91dGlscy90YWJsZSdcbmltcG9ydCB7YWRkU2NvcmUsIGdldEludGVyZXN0TmFtZXN9IGZyb20gJy4uL3V0aWxzL3NlYXJjaCdcblxuaW1wb3J0IGRlY29kZVRva2VuIGZyb20gXCIuLi91dGlscy9hdXRoXCI7XG5pbXBvcnQgeyBhZGRpbmdDdXJyZW50VXNlciwgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5pbXBvcnQge3NlYXJjaFN0YXJ0fSBmcm9tICcuLi9yZWR1eC9zZWFyY2gvc2VhcmNoLWFjdGlvbnMnXG5cblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IHsgXG4gICAgICB0b2tlbiwgXG4gICAgICB1c2VyLCBcbiAgICAgIGFkZFVzZXIsIFxuICAgICAgZmJUb2tlbiwgXG4gICAgICBpbnRlcmVzdERhdGEsIFxuICAgICAgc2VhcmNoSW50ZXJlc3QsIFxuICAgICAga2V5d29yZCxcbiAgICAgIGludGVyZXN0Q291bnQgfSA9IHByb3BzO1xuICBjb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlVG9rZW4odG9rZW4pO1xuICAgICAgY29uc3QgeyBfaWQsIG5hbWUsIGVtYWlsLCBkb21haW4gfSA9IGRlY29kZWQ7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgICAgaWQ6IF9pZCxcbiAgICAgICAgbmFtZSwgXG4gICAgICAgIGVtYWlsLCBcbiAgICAgICAgZG9tYWluXG4gICAgICB9O1xuICAgICAgYWRkVXNlcih1c2VyRGF0YSk7XG4gICAgfSBlbHNlIGlmICh1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaW50ZXJlc3RzOiBpbnRlcmVzdERhdGEsXG4gICAgICBpbnRlcmVzdE51bWJlcjogaW50ZXJlc3RDb3VudFxuICAgIH0pXG4gIH0sIFtpbnRlcmVzdERhdGEsIGludGVyZXN0Q291bnRdKVxuXG4gIGNvbnN0IGZhY2VBdXRoU3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJyMjIyMgRkIgYXV0aCBzdGFydCcpXG4gIH1cblxuICBjb25zdCByZXNwb25zZUZhY2Vib29rID0gYXN5bmMgKHJlcykgPT4ge1xuICAgIGNvbnN0IHthdXRoRmIsIHVzZXJ9ID0gcHJvcHNcbiAgICBjb25zdCB7YWNjZXNzVG9rZW59ID0gcmVzXG4gICAgYXV0aEZiKGFjY2Vzc1Rva2VuLCB1c2VyLmlkKVxuICB9XG5cbiAgY29uc3QgZ2V0SW50ZXJlc3QgPSBhc3luYyAodmFsdWUpID0+IHtcbiAgICBhd2FpdCBzZWFyY2hJbnRlcmVzdChmYlRva2VuLnRva2VuLCB2YWx1ZSwgNTAwKVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZEludGVyZXN0ID0gc2VsZWN0ZWRSb3dzLm1hcChpbnRlcmVzdCA9PiB7XG4gICAgICByZXR1cm4gaW50ZXJlc3QubmFtZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRJbnRlcmVzdClcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICAgIHNlbGVjdGVkSW50ZXJlc3RcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICA8RmFjZWJvb2tMb2dpblxuICAgICAgICBhcHBJZD17cHJvY2Vzcy5lbnYuRkJfQVBQX0lEfVxuICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cbiAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxpZFwiXG4gICAgICAgIG9uQ2xpY2s9e2ZhY2VBdXRoU3RhcnR9XG4gICAgICAgIHNjb3BlPVwiYWRzX21hbmFnZW1lbnQsIGVtYWlsXCJcbiAgICAgICAgY2FsbGJhY2s9e3Jlc3BvbnNlRmFjZWJvb2t9IFxuICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30+Q29ubmVjdCBGYWNlYm9vazwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICAvPlxuICBdXG5cbiAgY29uc3Qge2ludGVyZXN0cywgc2VsZWN0ZWRSb3dLZXlzLCBpbnRlcmVzdE51bWJlcn0gPSBzdGF0ZVxuICByZXR1cm4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgIDxIZWFkZXIgYWN0aW9ucz17YWN0aW9uc30vPlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbmQgRmFjZWJvb2sgaW50ZXJlc3QgZm9yIGEga2V5d29yZFwiXG4gICAgICAgICAgICBlbnRlckJ1dHRvbj1cIkdldGNoXCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvblNlYXJjaD17KHZhbHVlKSA9PiBnZXRJbnRlcmVzdCh2YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnRlcmVzdE51bWJlciA/XG4gICAgICAgICAgICA8cD48Yj57aW50ZXJlc3ROdW1iZXJ9PC9iPiBpbnRlcmVzdCBmb3VuZCBmb3IgXCJ7a2V5d29yZH1cIjwvcD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBpZD1cInRhYmxlXCI+XG4gICAgICAgICAgICA8SW50ZXJlc3RUYWJsZSBcbiAgICAgICAgICAgIG9uU2VsZWN0aW9uPXtvblNlbGVjdGlvbkNoYW5nZX0gXG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9e3NlbGVjdGVkUm93S2V5c30gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZVwiIGNvbHVtbnM9e3RhYmxlQ29sdW1uc30gXG4gICAgICAgICAgICBkYXRhU291cmNlPXtpbnRlcmVzdHN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI3RhYmxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgPC9EYXNoYm9hcmRMYXlvdXQ+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnN0IHRva2VuID0gY29udGV4dC5xdWVyeS5hdDtcbiAgcmV0dXJuIHtcbiAgICB0b2tlblxuICB9O1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICBpbnRlcmVzdERhdGE6IHN0YXRlLnNlYXJjaC5pbnRlcmVzdHMsXG4gIGludGVyZXN0Q291bnQ6IHN0YXRlLnNlYXJjaC5pbnRlcmVzdENvdW50LFxuICBrZXl3b3JkOiBzdGF0ZS5zZWFyY2gua2V5d29yZFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFkZFVzZXI6IGl0ZW0gPT4gZGlzcGF0Y2goYWRkaW5nQ3VycmVudFVzZXIoaXRlbSkpLFxuICBhdXRoRmI6ICh0b2tlbiwgaWQpID0+IGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7dG9rZW4sIGlkfSkpLFxuICBzZWFyY2hJbnRlcmVzdDogKHRva2VuLCB2YWx1ZSwgbGltaXQpID0+IGRpc3BhdGNoKHNlYXJjaFN0YXJ0KHt0b2tlbiwgdmFsdWUsIGxpbWl0fSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=/code/ben/getch/frontend/pages/index.js */")));
};

Index.getInitialProps = async function (context) {
  const token = context.query.at;
  return {
    token
  };
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbToken: state.user.fbToken,
  interestData: state.search.interests,
  interestCount: state.search.interestCount,
  keyword: state.search.keyword
});

const mapDispatchToProps = dispatch => ({
  addUser: item => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_22__["addingCurrentUser"])(item)),
  authFb: (token, id) => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_22__["authFacebook"])({
    token,
    id
  })),
  searchInterest: (token, value, limit) => dispatch(Object(_redux_search_search_actions__WEBPACK_IMPORTED_MODULE_23__["searchStart"])({
    token,
    value,
    limit
  }))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

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

/***/ "./redux/user/user-actions.js":
/*!************************************!*\
  !*** ./redux/user/user-actions.js ***!
  \************************************/
/*! exports provided: siginSuccess, siginStart, addingCurrentUser, setCurrentUser, siginFailure, isLoading, authFacebook, facebookAuthSuccess, fbAuthFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginSuccess", function() { return siginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginStart", function() { return siginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addingCurrentUser", function() { return addingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginFailure", function() { return siginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFacebook", function() { return authFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuthSuccess", function() { return facebookAuthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbAuthFailure", function() { return fbAuthFailure; });
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");

const siginSuccess = signedIn => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_SUCCESS,
  payload: signedIn
});
const siginStart = () => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_IN_START
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
  AUTH_FACEBOOK: "AUTH_FACEBOOK"
};
/* harmony default export */ __webpack_exports__["default"] = (UserActionTypes);

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);


function decodeToken(token) {
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, "thebsbsu098387d28x8");
  return decoded;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeToken);

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
/*! exports provided: tableColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumns", function() { return tableColumns; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "antd/lib/tag/style");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/code/ben/getch/frontend/utils/table.js";

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
  sorter: (a, b) => a.name.length - b.name.length
}];

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /code/ben/getch/frontend/pages/index.js */"./pages/index.js");


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

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style":
/*!***************************************!*\
  !*** external "antd/lib/input/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

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

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-login/dist/facebook-login-render-props":
/*!************************************************************************!*\
  !*** external "react-facebook-login/dist/facebook-login-render-props" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

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
//# sourceMappingURL=index.js.map