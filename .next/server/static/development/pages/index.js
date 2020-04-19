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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/dashboardLayout.js":
/*!***************************************!*\
  !*** ./components/dashboardLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _components_sideBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sideBar */ "./components/sideBar.js");
/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/onboarding */ "./components/onboarding.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header */ "./components/header.js");






var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









const DashboardLayout = props => {
  const {
    authFb,
    user,
    fbToken,
    userError,
    searchError
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (searchError || userError) {
      react_toastify__WEBPACK_IMPORTED_MODULE_13__["toast"].error(`There was an error.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [userError, searchError]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
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

  const actions = [__jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      background: "#f86326",
      border: "none",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Get life time access")];
  return __jsx("div", {
    className: "jsx-747387214" + " " + "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      position: 'relative',
      height: '100vh',
      width: "16.66666667%"
    },
    span: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_components_sideBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 98
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      padding: '0 20px 0 20px',
      minHeight: '100vh'
    },
    span: 20,
    className: "child-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-747387214" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
    actions: actions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-747387214" + " " + "children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, props.children), !fbToken && user ? __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }) : "", __jsx("footer", {
    className: "jsx-747387214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-747387214" + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-747387214" + " " + "footer-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "747387214",
    __self: undefined
  }, ".layout.jsx-747387214{position:relative;min-height:100vh;}.layout-body.jsx-747387214{position:relative;}.child-container.jsx-747387214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-747387214{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-747387214{position:fixed;top:0;width:81%;background-color:white;z-index:100;}footer.jsx-747387214{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-747387214{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRm9CLEFBR21DLEFBS0EsQUFJTCxBQUlELEFBSUcsQUFRRSxBQVVGLGVBakJULEFBa0JHLEVBVkksQ0F6QkksQUFLckIsR0FhYyxHQWtCSSxPQWpCUyxJQWxCM0IsR0FvQzJCLGdCQWpCWCxPQWtCQSxLQWpCaEIsS0FSQSxFQTBCc0IsQ0E5QnRCLGlCQWlCMkIsQUFjekIsbUdBYmEsV0FDTSxpQkFDTCxZQUNJLGdCQUNwQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiAgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlQmFyXCI7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nXCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuXG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBhdXRoRmIsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGZiVG9rZW4sXG4gICAgICAgIHVzZXJFcnJvcixcbiAgICAgICAgc2VhcmNoRXJyb3JcbiAgICAgIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihzZWFyY2hFcnJvciB8fCB1c2VyRXJyb3Ipe1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvci5gLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFt1c2VyRXJyb3IsIHNlYXJjaEVycm9yXSlcblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYodXNlciA9PSBudWxsKXtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgW3Byb3BzLnVzZXJdKVxuXG4gICAgY29uc3QgZmFjZUF1dGhTdGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIEZCIGF1dGggc3RhcnRcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSBhc3luYyByZXMgPT4ge1xuICAgICAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCB1c2VySUQgfSA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coJ2ZiJyxyZXMpXG4gICAgICAgIGF1dGhGYihhY2Nlc3NUb2tlbiwgdXNlci5pZCwgdXNlcklEKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI2Y4NjMyNlwiLCBib3JkZXI6IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0+R2V0IGxpZmUgdGltZSBhY2Nlc3M8L0J1dHRvbj4sXG4gICAgXVxuIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDB2aCcsIHdpZHRoOiBcIjE2LjY2NjY2NjY3JVwifX0gc3Bhbj17NH0+PFNpZGVCYXIvPjwvQ29sPlxuICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6ICcwIDIwcHggMCAyMHB4JywgbWluSGVpZ2h0OiAnMTAwdmgnfX0gc3Bhbj17MjB9IGNsYXNzTmFtZT1cImNoaWxkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFjdGlvbnM9e2FjdGlvbnN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhZmJUb2tlbiAmJiB1c2VyID9cbiAgICAgICAgICAgICAgICA8T25ib2FyZGluZy8+OiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+JmNvcHk7IDIwMTAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSwgR2V0Y2guPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxheW91dC1ib2R5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGlsZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGlsZHJlbiB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MSU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgPC9kaXY+XG4gKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG4gICAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICAgIHVzZXJFcnJvcjogc3RhdGUudXNlci5lcnJvcixcbiAgICBzZWFyY2hFcnJvcjogc3RhdGUuc2VhcmNoLmVycm9yXG4gIH0pO1xuXG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYXV0aEZiOiAodG9rZW4sIGlkLCBmYklkKSA9PiBkaXNwYXRjaChhdXRoRmFjZWJvb2soeyB0b2tlbiwgaWQsIGZiSWR9KSlcbiAgfSk7XG4gIFxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEYXNoYm9hcmRMYXlvdXQpIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbToken: state.user.fbToken,
  userError: state.user.error,
  searchError: state.search.error
});

const mapDispatchToProps = dispatch => ({
  authFb: (token, id, fbId) => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__["authFacebook"])({
    token,
    id,
    fbId
  }))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardLayout));

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = props => {
  const handleSettingsClick = () => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/settings');
  };

  return __jsx("div", {
    id: "wrapper",
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Header"), __jsx("div", {
    className: "jsx-1448644373" + " " + "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "3 free search: ", __jsx("span", {
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 35
    }
  }, "You have 2 left"))), __jsx("div", {
    id: "actions",
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.actions ? props.actions.map((action, index) => __jsx("div", {
    key: index,
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, action)) : '', __jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-1448644373" + " " + "profile-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-1448644373",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 80
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1448644373",
    __self: undefined
  }, "#wrapper.jsx-1448644373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-1448644373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#actions.jsx-1448644373>*.jsx-1448644373{margin:0 5px 0 5px;}.count.jsx-1448644373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;}.count.jsx-1448644373 p.jsx-1448644373{margin:0;}.count.jsx-1448644373 span.jsx-1448644373{font-weight:bold;}.profile-wrapper.jsx-1448644373{width:50px;height:30px;}.profile-wrapper.jsx-1448644373 img.jsx-1448644373{width:100%;height:100%;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qm9CLEFBRzhCLEFBTUEsQUFNTSxBQUlOLEFBTUosQUFJUSxBQUdKLEFBS0EsU0FYakIsRUFPa0IsQUFLQSxNQVJsQixFQWRBLElBa0JFLEFBS21CLGVBQ25CLG9DQXBDYSxBQU1RLEFBVUYsV0FmSyxNQWdCSixnQkFmdEIsRUFnQkEsMERBVkEiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCBoYW5kbGVTZXR0aW5nc0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL3NldHRpbmdzJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBIZWFkZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxwPjMgZnJlZSBzZWFyY2g6IDxzcGFuPllvdSBoYXZlIDIgbGVmdDwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGlvbnMgPyBcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57YWN0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKTonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtd3JhcHBlclwiIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmdzQ2xpY2t9PjxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICN3cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNhY3Rpb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2FjdGlvbnMgPiAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY291bnR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb3VudCBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb3VudCBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucHJvZmlsZS13cmFwcGVyIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/onboarding.js":
/*!**********************************!*\
  !*** ./components/onboarding.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "react-facebook-login/dist/facebook-login-render-props");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");




var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/onboarding.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




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

  return __jsx("div", {
    className: "jsx-2292966542",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    visible: !!!fbToken,
    centered: true,
    footer: null,
    closable: false,
    width: 800,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2292966542" + " " + "modal-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2292966542",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Almost done"), __jsx("div", {
    className: "jsx-2292966542" + " " + "fb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "jsx-2292966542",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  })), __jsx("h3", {
    className: "jsx-2292966542",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Lets search Facebook"), __jsx("p", {
    className: "jsx-2292966542",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Connect to Facebook to begin searching for interest"), __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default.a, {
    appId: "539788533190548",
    autoLoad: true,
    fields: "name,email,id",
    onClick: faceAuthStart,
    scope: "ads_management, email",
    callback: responseFacebook,
    render: renderProps => __jsx("div", {
      className: "jsx-2292966542" + " " + "connect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      disabled: !!fbToken,
      type: "primary",
      onClick: renderProps.onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, "Connect Facebook")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2292966542",
    __self: undefined
  }, ".modal-inner.jsx-2292966542{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-2292966542{margin-bottom:50px;}.connect.jsx-2292966542{margin-bottom:50px;}.fb.jsx-2292966542{width:50px;}.fb.jsx-2292966542 img.jsx-2292966542{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL29uYm9hcmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUd3QixBQU9RLEFBSUEsQUFJUixBQUlBLFdBSGYsQUFJQSxRQVpBLEFBSUEsdURBWHdCLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9vbmJvYXJkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInJlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzXCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmNvbnN0IE9uYm9hcmRpbmcgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGF1dGhGYixcbiAgICAgICAgdXNlcixcbiAgICAgICAgZmJUb2tlblxuICAgICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZmFjZUF1dGhTdGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIEZCIGF1dGggc3RhcnRcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSBhc3luYyByZXMgPT4ge1xuICAgICAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCB1c2VySUQsIG5hbWUgfSA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coJ2ZiJyxyZXMpXG4gICAgICAgIGF1dGhGYihhY2Nlc3NUb2tlbiwgdXNlci5pZCwgdXNlcklELCBuYW1lKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9kYWwgdmlzaWJsZT17ISghIWZiVG9rZW4pfSBjZW50ZXJlZCBmb290ZXI9e251bGx9IGNsb3NhYmxlPXtmYWxzZX0gd2lkdGg9ezgwMH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaW5uZXJcIj5cbiAgICAgICAgPGgyPkFsbW9zdCBkb25lPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYlwiPjxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIi8+PC9kaXY+XG4gICAgICAgICAgPGgzPkxldHMgc2VhcmNoIEZhY2Vib29rPC9oMz5cbiAgICAgICAgICA8cD5Db25uZWN0IHRvIEZhY2Vib29rIHRvIGJlZ2luIHNlYXJjaGluZyBmb3IgaW50ZXJlc3Q8L3A+XG4gICAgICAgICAgPEZhY2Vib29rTG9naW5cbiAgICAgICAgICBhcHBJZD17cHJvY2Vzcy5lbnYuRkJfQVBQX0lEfVxuICAgICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxuICAgICAgICAgIFxuICAgICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwsaWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2ZhY2VBdXRoU3RhcnR9XG4gICAgICAgICAgc2NvcGU9XCJhZHNfbWFuYWdlbWVudCwgZW1haWxcIlxuICAgICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfVxuICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbm5lY3RcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhZmJUb2tlbn1cbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29ubmVjdCBGYWNlYm9va1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2RhbC1pbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbm5lY3Qge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYntcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZiIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBmYlRva2VuOiBzdGF0ZS51c2VyLmZiVG9rZW4sXG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhdXRoRmI6ICh0b2tlbiwgaWQsIGZiSWQsIG5hbWUpID0+IGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7IHRva2VuLCBpZCwgZmJJZCwgbmFtZX0pKVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoT25ib2FyZGluZyk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/onboarding.js */"));
};

const mapStateToProps = state => ({
  fbToken: state.user.fbToken,
  user: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  authFb: (token, id, fbId, name) => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["authFacebook"])({
    token,
    id,
    fbId,
    name
  }))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Onboarding));

/***/ }),

/***/ "./components/sideBar.js":
/*!*******************************!*\
  !*** ./components/sideBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/sideBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const SideBar = () => {
  return __jsx("div", {
    className: "jsx-3102106043" + " " + "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3102106043" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-3102106043",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 35
    }
  })), __jsx("div", {
    className: "jsx-3102106043" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }
  }, __jsx("div", {
    className: "jsx-3102106043" + " " + "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 31
    }
  }, "Search"))), __jsx("div", {
    className: "jsx-3102106043" + " " + "menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, __jsx("div", {
    className: "jsx-3102106043" + " " + "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 31
    }
  }, "Performance"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3102106043",
    __self: undefined
  }, ".menu.jsx-3102106043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:inherit;padding:10px;background:#281742;position:fixed;z-index:10;}.menu-item.jsx-3102106043{padding:5px;margin-bottom:20px;cursor:pointer;font-size:15px;}.menu-item.jsx-3102106043:hover{background:#9482a3;border-radius:4px;}.logo.jsx-3102106043{margin-bottom:100px;width:30%;}.logo.jsx-3102106043 img.jsx-3102106043{width:100%;}.item.jsx-3102106043{color:#785999;}.menu-item.jsx-3102106043:hover .item.jsx-3102106043{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3NpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXdCLEFBR2tDLEFBV0QsQUFPTyxBQUtDLEFBTVQsQUFJRyxBQUlGLFdBUGhCLENBbEJ1QixBQTBCdkIsRUFKQSxLQWZzQixDQUtSLFVBRWQsQ0FibUIsTUFPbkIsU0FObUIsZUFDbkIsYUFkMEIsOEVBQ1YsWUFDRSxjQUNELGFBQ00sbUJBQ0osZUFDSixXQUNmIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3NpZGVCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48aW1nIHNyYz1cIi9pbWFnZXMvbmV3TG9nb1doaXRlLnN2Z1wiLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlNlYXJjaDwvZGl2PjwvTGluaz4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlBlcmZvcm1hbmNlPC9kaXY+PC9MaW5rPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjgxNzQyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tZW51LWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTQ4MmEzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3ODU5OTk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1lbnUtaXRlbTpob3ZlciAuaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhciJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/sideBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ "./node_modules/antd/lib/table/style/index.js");
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
    rowKey: "id",
    pagination: {
      showSizeChanger: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (InterestTable);

/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/col/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/col/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/row/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/row/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/slider/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/slider/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/table/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/table/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tag/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/tag/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

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
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
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

        this.prefetch({
          priority: true
        });
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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
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


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

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
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
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


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, as, options);
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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

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
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
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
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
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
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
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

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

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
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css":
/*!************************************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/slider/style */ "./node_modules/antd/lib/slider/style/index.js");
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/slider */ "antd/lib/slider");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! export-to-csv */ "export-to-csv");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dashboardLayout */ "./components/dashboardLayout.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/table */ "./components/table.js");
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/table */ "./utils/table.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _redux_search_search_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/search/search-actions */ "./redux/search/search-actions.js");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_19__);






var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const Index = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    selectedInterest: [],
    min: null,
    max: null
  });
  const {
    token,
    user,
    addUser,
    fbToken,
    interestData,
    searchInterest,
    keyword,
    interestCount,
    searching
  } = props;
  const {
    Search
  } = antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (token) {
      const decoded = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_16__["default"])(token);
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
        domain,
        xToken: token
      };
      addUser(userData);
    } else if (user) {
      console.log(user);
    } else {
      router.push("/signup");
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (interestData && interestCount) {
      const max = Math.max.apply(Math, interestData.map(item => item["audience_size"]));
      const min = Math.min.apply(Math, interestData.map(item => item["audience_size"]));
      setState(_objectSpread({}, state, {
        max: max,
        min: min,
        interests: interestData,
        interestNumber: interestCount
      }));
    }
  }, [interestData, interestCount]);

  const getInterest = async value => {
    await searchInterest(fbToken.token, value, 500);
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

  const onCopy = () => {
    const {
      selectedInterest
    } = state;
    console.log("copy", selectedInterest);

    if (selectedInterest.length) {
      navigator.clipboard.writeText(selectedInterest).then(() => {
        console.log("you copied", selectedInterest.length);
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success(`You copied ${selectedInterest.length} items`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      });
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(`You have not made any selection`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "Interest List",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
  };
  const csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_10__["ExportToCsv"](options);

  const handleExport = async () => {
    // const {selectedRows} = state
    if (interestData) {
      let exportArray = [];
      interestData.forEach(item => {
        let readyExport = {};
        readyExport.id = item.id;
        readyExport.name = item.name;
        readyExport.audience = item.audience_size;
        readyExport.description = item.description;
        readyExport.topic = item.topic;
        readyExport.path = JSON.stringify(item.path);
        readyExport.score = item.relevance;
        exportArray.push(readyExport);
      });
      await csvExporter.generateCsv(exportArray);
      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success(`You downloaded ${interestData.length} items`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(`You have not made any selection`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  const onFilterChange = value => {
    const filtered = interestData.filter(item => item["audience_size"] >= value[0] && item["audience_size"] <= value[1]);
    setState(_objectSpread({}, state, {
      interests: filtered
    }));
  };

  const {
    interests,
    selectedRowKeys,
    interestNumber,
    max,
    min
  } = state;
  return __jsx("div", {
    id: "wrapper",
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "main-content",
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3209849346" + " " + "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3209849346" + " " + "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx(Search, {
    placeholder: "Find Facebook interest for a keyword",
    enterButton: "Getch",
    size: "large",
    onSearch: value => getInterest(value),
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3209849346" + " " + "controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }, interestNumber ? __jsx("p", {
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, __jsx("b", {
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, interestNumber), " interest found for \"", keyword, "\"") : ""), __jsx("div", {
    className: "jsx-3209849346" + " " + "filter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, "Filter audience"), __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    max: max,
    min: min,
    range: true,
    defaultValue: [min, max],
    onAfterChange: onFilterChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3209849346" + " " + "actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3209849346" + " " + "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: onCopy,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }, "Copy")), __jsx("div", {
    className: "jsx-3209849346" + " " + "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleExport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, "Download as CSV")), __jsx("div", {
    className: "jsx-3209849346" + " " + "divider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3209849346" + " " + "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleExport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, "Save as project")), __jsx("div", {
    className: "jsx-3209849346" + " " + "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: "#4e54c8",
    onClick: handleExport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  }, "Save to Facebook")))))), __jsx("div", {
    id: "table",
    className: "jsx-3209849346",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, searching ? __jsx("div", {
    className: "jsx-3209849346" + " " + "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
    type: "Bars",
    color: "#4e54c8",
    height: 100,
    width: 100,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  })) : __jsx(_components_table__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onSelection: onSelectionChange,
    selectedRowKeys: selectedRowKeys,
    className: "table",
    columns: _utils_table__WEBPACK_IMPORTED_MODULE_15__["tableColumns"],
    dataSource: interests,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "3209849346",
    __self: undefined
  }, "#wrapper.jsx-3209849346{margin:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}#main-content.jsx-3209849346{margin-top:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}#table.jsx-3209849346{margin-top:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.controls.jsx-3209849346{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:10px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.actions.jsx-3209849346{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.actions.jsx-3209849346>*.jsx-3209849346{margin-left:5px;}.loader.jsx-3209849346{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:500px;}.divider.jsx-3209849346{height:35px;width:0;border-left:1px solid #ccc;margin:0 0 0 5px;}.filter.jsx-3209849346{width:30%;}.top.jsx-3209849346{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:130px;margin-bottom:20px;width:100%;background-color:white;}.inner.jsx-3209849346{position:fixed;top:50px;width:81%;background-color:white;z-index:100;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.header.jsx-3209849346{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErUGtCLEFBR3VCLEFBTUksQUFJQSxBQUtILEFBTUEsQUFJRyxBQUdILEFBTUQsQUFPRixBQUlHLEFBV0UsQUFZSSxVQTFCckIsRUF6Q2UsQUFrQ0wsR0FzQkMsQ0FsREcsQUFJQSxBQWVkLEdBMkNBLENBakM2QixJQXNCakIsVUFDYSxhQXRCTixVQXVCTCxPQXRCZCxLQXVCZSxLQTdDRyxBQU1sQixBQU95QixBQWlCQSxRQWdCVixJQTVEUyxDQU14QixBQUlBLEdBS2dDLGtFQThDUCxRQTVEWCxTQTJCTyxBQWlCQSxHQTNDckIsNkJBY0Esa0RBOEN3QixXQWpDVCxBQWlCSyxhQWhCcEIsS0FpQmUsYUFDTSxtQkFDUixXQUNZLE1BYXpCLGlCQVpBIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2xpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSBcImV4cG9ydC10by1jc3ZcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dFwiO1xuaW1wb3J0IEludGVyZXN0VGFibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFibGVcIjtcblxuaW1wb3J0IHsgdGFibGVDb2x1bW5zIH0gZnJvbSBcIi4uL3V0aWxzL3RhYmxlXCI7XG5cbmltcG9ydCBkZWNvZGVUb2tlbiBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xuaW1wb3J0IHsgYWRkaW5nQ3VycmVudFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnNcIjtcbmltcG9ydCB7IHNlYXJjaFN0YXJ0IH0gZnJvbSBcIi4uL3JlZHV4L3NlYXJjaC9zZWFyY2gtYWN0aW9uc1wiO1xuXG5pbXBvcnQgXCJyZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9jc3MvcmVhY3Qtc3Bpbm5lci1sb2FkZXIuY3NzXCI7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHNlbGVjdGVkSW50ZXJlc3Q6IFtdLFxuICAgIG1pbjogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gIH0pO1xuICBjb25zdCB7XG4gICAgdG9rZW4sXG4gICAgdXNlcixcbiAgICBhZGRVc2VyLFxuICAgIGZiVG9rZW4sXG4gICAgaW50ZXJlc3REYXRhLFxuICAgIHNlYXJjaEludGVyZXN0LFxuICAgIGtleXdvcmQsXG4gICAgaW50ZXJlc3RDb3VudCxcbiAgICBzZWFyY2hpbmcsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVRva2VuKHRva2VuKTtcbiAgICAgIGNvbnN0IHsgX2lkLCBuYW1lLCBlbWFpbCwgZG9tYWluIH0gPSBkZWNvZGVkO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICAgIGlkOiBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBkb21haW4sXG4gICAgICAgIHhUb2tlbjogdG9rZW4sXG4gICAgICB9O1xuICAgICAgYWRkVXNlcih1c2VyRGF0YSk7XG4gICAgfSBlbHNlIGlmICh1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbnVwXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyZXN0RGF0YSAmJiBpbnRlcmVzdENvdW50KSB7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heC5hcHBseShcbiAgICAgICAgTWF0aCxcbiAgICAgICAgaW50ZXJlc3REYXRhLm1hcCgoaXRlbSkgPT4gaXRlbVtcImF1ZGllbmNlX3NpemVcIl0pXG4gICAgICApO1xuICAgICAgY29uc3QgbWluID0gTWF0aC5taW4uYXBwbHkoXG4gICAgICAgIE1hdGgsXG4gICAgICAgIGludGVyZXN0RGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW1bXCJhdWRpZW5jZV9zaXplXCJdKVxuICAgICAgKTtcblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgIG1pbjogbWluLFxuICAgICAgICBpbnRlcmVzdHM6IGludGVyZXN0RGF0YSxcbiAgICAgICAgaW50ZXJlc3ROdW1iZXI6IGludGVyZXN0Q291bnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtpbnRlcmVzdERhdGEsIGludGVyZXN0Q291bnRdKTtcblxuICBjb25zdCBnZXRJbnRlcmVzdCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgIGF3YWl0IHNlYXJjaEludGVyZXN0KGZiVG9rZW4udG9rZW4sIHZhbHVlLCA1MDApO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VsZWN0aW9uQ2hhbmdlID0gKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyb3dzXCIsIHNlbGVjdGVkUm93cyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbnRlcmVzdCA9IHNlbGVjdGVkUm93cy5tYXAoKGludGVyZXN0KSA9PiB7XG4gICAgICByZXR1cm4gaW50ZXJlc3QubmFtZTtcbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICAgIHNlbGVjdGVkSW50ZXJlc3QsXG4gICAgICBzZWxlY3RlZFJvd3MsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Db3B5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJbnRlcmVzdCB9ID0gc3RhdGU7XG4gICAgY29uc29sZS5sb2coXCJjb3B5XCIsIHNlbGVjdGVkSW50ZXJlc3QpO1xuICAgIGlmIChzZWxlY3RlZEludGVyZXN0Lmxlbmd0aCkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0ZWRJbnRlcmVzdCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGNvcGllZFwiLCBzZWxlY3RlZEludGVyZXN0Lmxlbmd0aCk7XG5cbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgWW91IGNvcGllZCAke3NlbGVjdGVkSW50ZXJlc3QubGVuZ3RofSBpdGVtc2AsIHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IoYFlvdSBoYXZlIG5vdCBtYWRlIGFueSBzZWxlY3Rpb25gLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBmaWVsZFNlcGFyYXRvcjogXCIsXCIsXG4gICAgcXVvdGVTdHJpbmdzOiAnXCInLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6IFwiLlwiLFxuICAgIHNob3dMYWJlbHM6IHRydWUsXG4gICAgc2hvd1RpdGxlOiB0cnVlLFxuICAgIHRpdGxlOiBcIkludGVyZXN0IExpc3RcIixcbiAgICB1c2VUZXh0RmlsZTogZmFsc2UsXG4gICAgdXNlQm9tOiB0cnVlLFxuICAgIHVzZUtleXNBc0hlYWRlcnM6IHRydWUsXG4gIH07XG4gIGNvbnN0IGNzdkV4cG9ydGVyID0gbmV3IEV4cG9ydFRvQ3N2KG9wdGlvbnMpO1xuXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCB7c2VsZWN0ZWRSb3dzfSA9IHN0YXRlXG4gICAgaWYgKGludGVyZXN0RGF0YSkge1xuICAgICAgbGV0IGV4cG9ydEFycmF5ID0gW107XG4gICAgICBpbnRlcmVzdERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgcmVhZHlFeHBvcnQgPSB7fTtcbiAgICAgICAgcmVhZHlFeHBvcnQuaWQgPSBpdGVtLmlkO1xuICAgICAgICByZWFkeUV4cG9ydC5uYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICByZWFkeUV4cG9ydC5hdWRpZW5jZSA9IGl0ZW0uYXVkaWVuY2Vfc2l6ZTtcbiAgICAgICAgcmVhZHlFeHBvcnQuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICByZWFkeUV4cG9ydC50b3BpYyA9IGl0ZW0udG9waWM7XG4gICAgICAgIHJlYWR5RXhwb3J0LnBhdGggPSBKU09OLnN0cmluZ2lmeShpdGVtLnBhdGgpO1xuICAgICAgICByZWFkeUV4cG9ydC5zY29yZSA9IGl0ZW0ucmVsZXZhbmNlO1xuICAgICAgICBleHBvcnRBcnJheS5wdXNoKHJlYWR5RXhwb3J0KTtcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBjc3ZFeHBvcnRlci5nZW5lcmF0ZUNzdihleHBvcnRBcnJheSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKGBZb3UgZG93bmxvYWRlZCAke2ludGVyZXN0RGF0YS5sZW5ndGh9IGl0ZW1zYCwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LmVycm9yKGBZb3UgaGF2ZSBub3QgbWFkZSBhbnkgc2VsZWN0aW9uYCwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBpbnRlcmVzdERhdGEuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bXCJhdWRpZW5jZV9zaXplXCJdID49IHZhbHVlWzBdICYmIGl0ZW1bXCJhdWRpZW5jZV9zaXplXCJdIDw9IHZhbHVlWzFdXG4gICAgKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGludGVyZXN0czogZmlsdGVyZWQsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBpbnRlcmVzdHMsIHNlbGVjdGVkUm93S2V5cywgaW50ZXJlc3ROdW1iZXIsIG1heCwgbWluIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaW5kIEZhY2Vib29rIGludGVyZXN0IGZvciBhIGtleXdvcmRcIlxuICAgICAgICAgICAgICBlbnRlckJ1dHRvbj1cIkdldGNoXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25TZWFyY2g9eyh2YWx1ZSkgPT4gZ2V0SW50ZXJlc3QodmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW50ZXJlc3ROdW1iZXIgPyAoXG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2ludGVyZXN0TnVtYmVyfTwvYj4gaW50ZXJlc3QgZm91bmQgZm9yIFwie2tleXdvcmR9XCJcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkZpbHRlciBhdWRpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgcmFuZ2VcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17W21pbiwgbWF4XX1cbiAgICAgICAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNvcHl9PkNvcHk8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFeHBvcnR9PkRvd25sb2FkIGFzIENTVjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUV4cG9ydH0+U2F2ZSBhcyBwcm9qZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCIjNGU1NGM4XCIgb25DbGljaz17aGFuZGxlRXhwb3J0fT5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSB0byBGYWNlYm9va1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJ0YWJsZVwiPlxuICAgICAgICAgIHtzZWFyY2hpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjNGU1NGM4XCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEludGVyZXN0VGFibGVcbiAgICAgICAgICAgICAgb25TZWxlY3Rpb249e29uU2VsZWN0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9e3NlbGVjdGVkUm93S2V5c31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGVcIlxuICAgICAgICAgICAgICBjb2x1bW5zPXt0YWJsZUNvbHVtbnN9XG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2ludGVyZXN0c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgI21haW4tY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgI3RhYmxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMgPiAqIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3Age1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiA4MSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnF1ZXJ5LmF0O1xuICByZXR1cm4ge1xuICAgIHRva2VuLFxuICB9O1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxuICBzZWFyY2hpbmc6IHN0YXRlLnNlYXJjaC5sb2FkaW5nLFxuICBmYlRva2VuOiBzdGF0ZS51c2VyLmZiVG9rZW4sXG4gIGludGVyZXN0RGF0YTogc3RhdGUuc2VhcmNoLmludGVyZXN0cyxcbiAgaW50ZXJlc3RDb3VudDogc3RhdGUuc2VhcmNoLmludGVyZXN0Q291bnQsXG4gIGtleXdvcmQ6IHN0YXRlLnNlYXJjaC5rZXl3b3JkLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYWRkVXNlcjogKGl0ZW0pID0+IGRpc3BhdGNoKGFkZGluZ0N1cnJlbnRVc2VyKGl0ZW0pKSxcbiAgc2VhcmNoSW50ZXJlc3Q6ICh0b2tlbiwgdmFsdWUsIGxpbWl0KSA9PlxuICAgIGRpc3BhdGNoKHNlYXJjaFN0YXJ0KHsgdG9rZW4sIHZhbHVlLCBsaW1pdCB9KSksXG59KTtcblxuSW5kZXguTGF5b3V0ID0gRGFzaGJvYXJkTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/index.js */"));
};

Index.getInitialProps = async function (context) {
  const token = context.query.at;
  return {
    token
  };
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  searching: state.search.loading,
  fbToken: state.user.fbToken,
  interestData: state.search.interests,
  interestCount: state.search.interestCount,
  keyword: state.search.keyword
});

const mapDispatchToProps = dispatch => ({
  addUser: item => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_17__["addingCurrentUser"])(item)),
  searchInterest: (token, value, limit) => dispatch(Object(_redux_search_search_actions__WEBPACK_IMPORTED_MODULE_18__["searchStart"])({
    token,
    value,
    limit
  }))
});

Index.Layout = _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_13__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

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
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, tags ? tags.map((tag, index) => {
    return __jsx("div", {
      style: {
        display: 'inline'
      },
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "magenta",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/benkissi/projects/getch/getch-frontend-2.0/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/slider":
/*!**********************************!*\
  !*** external "antd/lib/slider" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "antd/lib/table":
/*!*********************************!*\
  !*** external "antd/lib/table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "antd/lib/tag":
/*!*******************************!*\
  !*** external "antd/lib/tag" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "export-to-csv":
/*!********************************!*\
  !*** external "export-to-csv" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("export-to-csv");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map