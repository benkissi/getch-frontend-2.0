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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _components_sideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sideBar */ "./components/sideBar.js");
/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/onboarding */ "./components/onboarding.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./components/header.js");
var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/dashboardLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const DashboardLayout = props => {
  const {
    authFb,
    user,
    fbToken,
    userError,
    searchError
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (searchError || userError) {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].warn(`No interest found for keyword. Simplify keyword and try again.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [userError, searchError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (user == null) {
      router.push("/signup");
    }
  }, [props.user]);
  return __jsx("div", {
    className: "jsx-2941168197" + " " + "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2941168197" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2941168197" + " " + "children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, props.children), __jsx("footer", {
    className: "jsx-2941168197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2941168197" + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-2941168197" + " " + "footer-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2941168197",
    __self: undefined
  }, ".layout.jsx-2941168197{position:relative;min-height:100vh;padding:0 200px;}.layout-body.jsx-2941168197{position:relative;}.child-container.jsx-2941168197{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-2941168197{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-2941168197{position:fixed;top:0;width:90%;left:5%;background-color:white;z-index:100;}footer.jsx-2941168197{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-2941168197{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}@media screen and (max-width:480px){.layout.jsx-2941168197{padding:10px;}.children.jsx-2941168197{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvZGFzaGJvYXJkTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHNkIsQUFNQSxBQUlMLEFBSUQsQUFJRyxBQVNFLEFBVUYsQUFVQSxBQUlGLFdBQ2IsRUFKQSxFQTdCTSxBQW1CRyxFQVZJLENBM0JJLEFBTW5CLEdBYVksR0FtQkksT0FsQk4sSUFuQlEsR0FzQ08sQ0FsQkEsWUFuQnpCLFVBc0NjLENBbEJBLFNBUmQsRUEyQm9CLENBL0JwQixBQWFBLGlCQUt5QixBQWN6QixtR0FiYSxXQUNNLGlCQUNMLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvZGFzaGJvYXJkTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhdXRoRmFjZWJvb2sgfSBmcm9tIFwiLi4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlQmFyXCI7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nXCI7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5cbmNvbnN0IERhc2hib2FyZExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGF1dGhGYiwgdXNlciwgZmJUb2tlbiwgdXNlckVycm9yLCBzZWFyY2hFcnJvciB9ID0gcHJvcHM7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaEVycm9yIHx8IHVzZXJFcnJvcikge1xuICAgICAgdG9hc3Qud2FybihgTm8gaW50ZXJlc3QgZm91bmQgZm9yIGtleXdvcmQuIFNpbXBsaWZ5IGtleXdvcmQgYW5kIHRyeSBhZ2Fpbi5gLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyRXJyb3IsIHNlYXJjaEVycm9yXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlciA9PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9zaWdudXBcIik7XG4gICAgfVxuICB9LCBbcHJvcHMudXNlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE9uYm9hcmRpbmcgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICZjb3B5OyAyMDEwIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0sIEdldGNoLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXlvdXQtYm9keSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZHJlbiB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaGlsZHJlbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICB1c2VyRXJyb3I6IHN0YXRlLnVzZXIuZXJyb3IsXG4gIHNlYXJjaEVycm9yOiBzdGF0ZS5zZWFyY2guZXJyb3IsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBhdXRoRmI6ICh0b2tlbiwgaWQsIGZiSWQpID0+IGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7IHRva2VuLCBpZCwgZmJJZCB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGFzaGJvYXJkTGF5b3V0KTtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbToken: state.user.fbToken,
  userError: state.user.error,
  searchError: state.search.error
});

const mapDispatchToProps = dispatch => ({
  authFb: (token, id, fbId) => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["authFacebook"])({
    token,
    id,
    fbId
  }))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardLayout));

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



const Header = props => {
  const handleSettingsClick = () => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/settings");
  };

  const goHome = () => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
  };

  const goToPlans = () => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/plans");
  };

  const isFreeUser = () => {
    if (props.user && props.user.plan === "PL001") {
      return true;
    } else {
      return false;
    }
  };

  return __jsx("div", {
    id: "wrapper",
    className: "jsx-2343109816",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: goHome,
    className: "jsx-2343109816" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogoX.svg",
    className: "jsx-2343109816",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), isFreeUser() ? __jsx("div", {
    className: "jsx-2343109816" + " " + "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-2343109816",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "3 free search:", " ", __jsx("span", {
    className: "jsx-2343109816" + " " + `${props.searchCount >= 3 ? "red" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, props.searchCount < 3 ? `You have ${3 - props.searchCount} free search left` : "You are out of free searches, kindly upgrade"))) : "", __jsx("div", {
    id: "actions",
    className: "jsx-2343109816",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, isFreeUser() ? __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    hidden: props.user && !props.user.plan == "PL001",
    style: {
      background: "#f86326",
      border: "none",
      color: "white"
    },
    onClick: goToPlans,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Get life time access") : "", __jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-2343109816" + " " + "profile-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-2343109816",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2343109816",
    __self: undefined
  }, "#wrapper.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}#actions.jsx-2343109816>*.jsx-2343109816{margin:0 5px 0 5px;}.count.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;}.count.jsx-2343109816 p.jsx-2343109816{margin:0;}.count.jsx-2343109816 span.jsx-2343109816{font-weight:bold;}.profile-wrapper.jsx-2343109816{width:50px;height:30px;}.profile-wrapper.jsx-2343109816 img.jsx-2343109816{width:100%;height:100%;cursor:pointer;}.logo.jsx-2343109816{width:100px;cursor:pointer;}.logo.jsx-2343109816 img.jsx-2343109816{width:100%;}.red.jsx-2343109816{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFa0IsQUFHd0IsQUFNQSxBQU1NLEFBSU4sQUFLSixBQUlRLEFBR04sQUFLQSxBQU1DLEFBS0QsQUFJRCxTQTFCWixDQTJCQSxDQXBCYyxBQUtBLEFBV2QsQ0FMaUIsS0FkakIsRUFiQSxJQWlCQSxBQUtpQixJQU1qQixXQUxBLG9DQW5DYSxBQU1RLEFBVUYsV0FmSyxNQWdCeEIsZ0JBZkEsNERBS21CLGlCQUNuQiIsImZpbGUiOiIvbW50L2MvVXNlcnMvQmVuIEtpc3NpL0RvY3VtZW50cy9jb2RlL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlU2V0dGluZ3NDbGljayA9ICgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChcIi9zZXR0aW5nc1wiKTtcbiAgfTtcblxuICBjb25zdCBnb0hvbWUgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIGNvbnN0IGdvVG9QbGFucyA9ICgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChcIi9wbGFuc1wiKTtcbiAgfTtcblxuICBjb25zdCBpc0ZyZWVVc2VyID0gKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VyICYmIHByb3BzLnVzZXIucGxhbiA9PT0gXCJQTDAwMVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBvbkNsaWNrPXtnb0hvbWV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbmV3TG9nb1guc3ZnXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aXNGcmVlVXNlcigpID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAzIGZyZWUgc2VhcmNoOntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJvcHMuc2VhcmNoQ291bnQgPj0gMyA/IFwicmVkXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICB7cHJvcHMuc2VhcmNoQ291bnQgPCAzXG4gICAgICAgICAgICAgICAgPyBgWW91IGhhdmUgJHszIC0gcHJvcHMuc2VhcmNoQ291bnR9IGZyZWUgc2VhcmNoIGxlZnRgXG4gICAgICAgICAgICAgICAgOiBcIllvdSBhcmUgb3V0IG9mIGZyZWUgc2VhcmNoZXMsIGtpbmRseSB1cGdyYWRlXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG5cbiAgICAgIDxkaXYgaWQ9XCJhY3Rpb25zXCI+XG4gICAgICAgIHtpc0ZyZWVVc2VyKCkgPyAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaGlkZGVuPXtwcm9wcy51c2VyICYmICFwcm9wcy51c2VyLnBsYW4gPT0gXCJQTDAwMVwifVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjg2MzI2XCIsIGJvcmRlcjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9QbGFuc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZXQgbGlmZSB0aW1lIGFjY2Vzc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtd3JhcHBlclwiIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmdzQ2xpY2t9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgICNhY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAjYWN0aW9ucyA+ICoge1xuICAgICAgICAgIG1hcmdpbjogMCA1cHggMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9maWxlLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9maWxlLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZCB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxuICBzZWFyY2hDb3VudDogc3RhdGUuc2VhcmNoLnNlYXJjaENvdW50LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xuIl19 */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/header.js */"));
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  searchCount: state.search.searchCount
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Header));

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




var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/onboarding.js";


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
    authFb(accessToken, user.id, userID, name);
  };

  return __jsx("div", {
    className: "jsx-2549769782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    visible: !!!fbToken.token,
    centered: true,
    footer: null,
    closable: false,
    width: 800,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2549769782" + " " + "modal-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2549769782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Almost done"), __jsx("div", {
    className: "jsx-2549769782" + " " + "fb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "jsx-2549769782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("h3", {
    className: "jsx-2549769782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Lets search Facebook"), __jsx("p", {
    className: "jsx-2549769782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Connect to Facebook to begin searching for interest"), __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default.a, {
    appId: "710486679131273",
    autoLoad: false,
    fields: "name,email,id",
    onClick: faceAuthStart,
    scope: "email",
    callback: responseFacebook,
    render: renderProps => __jsx("div", {
      className: "jsx-2549769782" + " " + "connect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      disabled: !!fbToken.token,
      type: "primary",
      onClick: renderProps.onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, "Connect Facebook")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2549769782",
    __self: undefined
  }, ".modal-inner.jsx-2549769782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-2549769782{margin-bottom:50px;}.connect.jsx-2549769782{margin-bottom:50px;}.fb.jsx-2549769782{width:50px;}.fb.jsx-2549769782 img.jsx-2549769782{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvb25ib2FyZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGtCLEFBR3dCLEFBT00sQUFJQSxBQUlSLEFBSUEsV0FIYixBQUlBLFFBWkEsQUFJQSx1REFYd0IsOEVBQ0MsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvb25ib2FyZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gXCJyZWFjdC1mYWNlYm9vay1sb2dpbi9kaXN0L2ZhY2Vib29rLWxvZ2luLXJlbmRlci1wcm9wc1wiO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgU2VsZWN0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IGF1dGhGYWNlYm9vayB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5jb25zdCBPbmJvYXJkaW5nID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXV0aEZiLCB1c2VyLCBmYlRva2VuIH0gPSBwcm9wcztcblxuICBjb25zdCBmYWNlQXV0aFN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiIyMjIyBGQiBhdXRoIHN0YXJ0XCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSBhc3luYyAocmVzKSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgdXNlcklELCBuYW1lIH0gPSByZXM7XG4gICAgYXV0aEZiKGFjY2Vzc1Rva2VuLCB1c2VyLmlkLCB1c2VySUQsIG5hbWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17ISEhZmJUb2tlbi50b2tlbn1cbiAgICAgICAgY2VudGVyZWRcbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgIHdpZHRoPXs4MDB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaW5uZXJcIj5cbiAgICAgICAgICA8aDI+QWxtb3N0IGRvbmU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMz5MZXRzIHNlYXJjaCBGYWNlYm9vazwvaDM+XG4gICAgICAgICAgPHA+Q29ubmVjdCB0byBGYWNlYm9vayB0byBiZWdpbiBzZWFyY2hpbmcgZm9yIGludGVyZXN0PC9wPlxuICAgICAgICAgIDxGYWNlYm9va0xvZ2luXG4gICAgICAgICAgICBhcHBJZD17cHJvY2Vzcy5lbnYuRkJfQVBQX0lEfVxuICAgICAgICAgICAgYXV0b0xvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxpZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtmYWNlQXV0aFN0YXJ0fVxuICAgICAgICAgICAgc2NvcGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va31cbiAgICAgICAgICAgIHJlbmRlcj17KHJlbmRlclByb3BzKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ubmVjdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWZiVG9rZW4udG9rZW59XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbm5lY3QgRmFjZWJvb2tcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFsLWlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbm5lY3Qge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZiIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYXV0aEZiOiAodG9rZW4sIGlkLCBmYklkLCBuYW1lKSA9PlxuICAgIGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7IHRva2VuLCBpZCwgZmJJZCwgbmFtZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoT25ib2FyZGluZyk7XG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/onboarding.js */"));
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

/***/ "./components/plan.js":
/*!****************************!*\
  !*** ./components/plan.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raveButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raveButton */ "./components/raveButton.js");
var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/plan.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { useRavePayment } from "react-ravepayment";


const Plan = props => {
  const config = {
    txref: "rave-123456",
    customer_email: props.userEmail,
    amount: 59,
    PBFPubKey: "FLWPUBK-66be3afd050d7b40faef5088882559b4-X",
    currency: "USD",
    country: "GH",
    production: false
  };

  const onPaymentModalClose = () => {
    console.log(true);
  };

  const getReference = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  return __jsx("div", {
    className: "jsx-1765367214" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1765367214" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, props.currentPlan === "PL002" ? __jsx("p", {
    id: "current",
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 42
    }
  }, "Current Plan") : "", __jsx("div", {
    className: "jsx-1765367214" + " " + "plan-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("h3", {
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, props.title), __jsx("p", {
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.description)), __jsx("div", {
    className: "jsx-1765367214" + " " + "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "$"), "59"), __jsx("div", {
    className: "jsx-1765367214" + " " + "features",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, props.features.map((feature, index) => __jsx("div", {
    key: index,
    className: "jsx-1765367214" + " " + "feature",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, " ", __jsx("div", {
    className: "jsx-1765367214" + " " + "feature-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: feature.image,
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("p", {
    className: "jsx-1765367214",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, feature.description)))), __jsx(_raveButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    email: props.userEmail,
    currency: "USD",
    country: "GH",
    reference: getReference(),
    amount: 59,
    ravePubKey: "FLWPUBK-66be3afd050d7b40faef5088882559b4-X",
    close: onPaymentModalClose,
    fName: props.fName,
    lName: props.lName,
    callback: response => props.verifyPayment("Life-time", response),
    disabled: props.currentPlan === "PL002",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1765367214",
    __self: undefined
  }, ".wrapper.jsx-1765367214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #eee;padding:15px;width:50%;max-width:407px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.header.jsx-1765367214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.plan-image.jsx-1765367214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:10px;}.features.jsx-1765367214{margin-top:20px;margin-bottom:50px;}.feature.jsx-1765367214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.feature-image.jsx-1765367214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:50px;max-width:50px;margin-right:10px;}.feature-image.jsx-1765367214 img.jsx-1765367214{width:100%;}.plan-image.jsx-1765367214 img.jsx-1765367214{width:10%;}#current.jsx-1765367214{background:#3dcf8e;padding:5px;color:white;font-weight:bold;}.price.jsx-1765367214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#4e53c8;font-weight:bold;font-size:50px;}.price.jsx-1765367214 span.jsx-1765367214{font-size:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvcGxhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR3dCLEFBV0EsQUFNQSxBQU9HLEFBS0gsQUFPQSxBQVNGLEFBSUQsQUFJUyxBQU9OLEFBUUUsVUFsQmpCLENBSkEsSUF1QkEsQ0E1Q3FCLEdBNkJQLFlBQ0EsSUE3QmQsUUE4Qm1CLGlCQUNuQixjQXhEd0IsQUFXQSxBQU1DLEFBWUosQUFPQSxBQXdCSSw4RUEzREQsQUFXSCxlQWtCSSxBQU9BLE1BbkJaLEFBMkNRLENBM0ROLFVBaUJNLEdBaEJULFVBQ00sTUFnQmxCLFVBZG9DLGdDQU9wQyxxQkFrQnFCLEFBT0osQUF3QkQsY0FDRyxDQXhCRixFQWhDakIsRUF5QkEsV0FRb0IsQ0F3QkgsZUFDakIsRUF4QkEiLCJmaWxlIjoiL21udC9jL1VzZXJzL0JlbiBLaXNzaS9Eb2N1bWVudHMvY29kZS9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9wbGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUmF2ZVBheW1lbnQgfSBmcm9tIFwicmVhY3QtcmF2ZXBheW1lbnRcIjtcbmltcG9ydCBSYXZlQnV0dG9uIGZyb20gXCIuL3JhdmVCdXR0b25cIjtcbmNvbnN0IFBsYW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHR4cmVmOiBcInJhdmUtMTIzNDU2XCIsXG4gICAgY3VzdG9tZXJfZW1haWw6IHByb3BzLnVzZXJFbWFpbCxcbiAgICBhbW91bnQ6IDU5LFxuICAgIFBCRlB1YktleTogcHJvY2Vzcy5lbnYuUkFWRV9QVUJfS0VZLFxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgIGNvdW50cnk6IFwiR0hcIixcbiAgICBwcm9kdWN0aW9uOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBvblBheW1lbnRNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHBvc3NpYmxlID1cbiAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktLj1cIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcbiAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIHtwcm9wcy5jdXJyZW50UGxhbiA9PT0gXCJQTDAwMlwiID8gPHAgaWQ9XCJjdXJyZW50XCI+Q3VycmVudCBQbGFuPC9wPiA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbi1pbWFnZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxuICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICA1OVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzXCI+XG4gICAgICAgIHtwcm9wcy5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ZlYXR1cmUuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFJhdmVCdXR0b25cbiAgICAgICAgZW1haWw9e3Byb3BzLnVzZXJFbWFpbH1cbiAgICAgICAgY3VycmVuY3k9XCJVU0RcIlxuICAgICAgICBjb3VudHJ5PVwiR0hcIlxuICAgICAgICByZWZlcmVuY2U9e2dldFJlZmVyZW5jZSgpfVxuICAgICAgICBhbW91bnQ9ezU5fVxuICAgICAgICByYXZlUHViS2V5PXtwcm9jZXNzLmVudi5SQVZFX1BVQl9LRVl9XG4gICAgICAgIGNsb3NlPXtvblBheW1lbnRNb2RhbENsb3NlfVxuICAgICAgICBmTmFtZT17cHJvcHMuZk5hbWV9XG4gICAgICAgIGxOYW1lPXtwcm9wcy5sTmFtZX1cbiAgICAgICAgY2FsbGJhY2s9eyhyZXNwb25zZSkgPT4gcHJvcHMudmVyaWZ5UGF5bWVudChcIkxpZmUtdGltZVwiLCByZXNwb25zZSl9XG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5jdXJyZW50UGxhbiA9PT0gXCJQTDAwMlwifVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwN3B4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGxhbi1pbWFnZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmVzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZS1pbWFnZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUtaW1hZ2UgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGFuLWltYWdlIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjdXJyZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2RjZjhlO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzRlNTNjODtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/plan.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ }),

/***/ "./components/raveButton.js":
/*!**********************************!*\
  !*** ./components/raveButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/raveButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const RaveButton = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    text: props.text || "Make Payment",
    currency: props.currency || "USD",
    country: props.country || "GH"
  });

  const payWithRave = () => {
    window.getpaidSetup({
      customer_email: props.email,
      amount: props.amount,
      txref: props.reference,
      PBFPubKey: props.ravePubKey,
      onclose: () => props.close(),
      callback: response => props.callback(response),
      meta: props.metadata || [{}],
      currency: state.currency,
      country: state.country,
      customer_firstname: props.fName || "",
      customer_phone: props.customer_phone || "",
      customer_lastname: props.lName || "",
      custom_title: props.custom_title || "",
      custom_description: props.custom_description || "",
      custom_logo: props.custom_logo || "",
      subaccounts: props.subaccounts || [{}],
      //splits payments into subaccounts provided
      payment_method: props.payment_method || "both",
      //falls back to card and account if none is specified
      payment_plan: props.payment_plan || "",
      //the id of your payment plan
      redirect_url: props.redirect_url || "",
      //calls this url after successful payment
      hosted_payment: props.hosted_payment,
      //opens the modal in a new page
      campaign_id: props.campaign_id || "" //allows discounts

    });
  };

  return __jsx("div", {
    className: "jsx-1033007843" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: props.disabled,
    onClick: payWithRave,
    className: "jsx-1033007843" + " " + `${props.disabled ? "disabled" : "activated"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, state.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1033007843",
    __self: undefined
  }, ".wrapper.jsx-1033007843{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}button.jsx-1033007843{height:40px;margin-top:auto;border:none;border-radius:4px;color:white;width:100%;text-transform:uppercase;}.disabled.jsx-1033007843{background-color:#eee;color:gray;cursor:not-allowed;}.activated.jsx-1033007843{background-color:#3dcf8e;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvcmF2ZUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR3dCLEFBS0QsQUFVVSxBQU1HLFlBZlQsVUFVTCxHQU1JLEdBZkgsS0FVTyxPQVRELEFBZXBCLFlBTEEsTUFUYyxZQUNELElBVEEsT0FVYyxJQVQzQixxQkFVQSIsImZpbGUiOiIvbW50L2MvVXNlcnMvQmVuIEtpc3NpL0RvY3VtZW50cy9jb2RlL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3JhdmVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUmF2ZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB0ZXh0OiBwcm9wcy50ZXh0IHx8IFwiTWFrZSBQYXltZW50XCIsXG4gICAgY3VycmVuY3k6IHByb3BzLmN1cnJlbmN5IHx8IFwiVVNEXCIsXG4gICAgY291bnRyeTogcHJvcHMuY291bnRyeSB8fCBcIkdIXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHBheVdpdGhSYXZlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAoe1xuICAgICAgY3VzdG9tZXJfZW1haWw6IHByb3BzLmVtYWlsLFxuICAgICAgYW1vdW50OiBwcm9wcy5hbW91bnQsXG4gICAgICB0eHJlZjogcHJvcHMucmVmZXJlbmNlLFxuICAgICAgUEJGUHViS2V5OiBwcm9wcy5yYXZlUHViS2V5LFxuICAgICAgb25jbG9zZTogKCkgPT4gcHJvcHMuY2xvc2UoKSxcbiAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2UpID0+IHByb3BzLmNhbGxiYWNrKHJlc3BvbnNlKSxcbiAgICAgIG1ldGE6IHByb3BzLm1ldGFkYXRhIHx8IFt7fV0sXG4gICAgICBjdXJyZW5jeTogc3RhdGUuY3VycmVuY3ksXG4gICAgICBjb3VudHJ5OiBzdGF0ZS5jb3VudHJ5LFxuICAgICAgY3VzdG9tZXJfZmlyc3RuYW1lOiBwcm9wcy5mTmFtZSB8fCBcIlwiLFxuICAgICAgY3VzdG9tZXJfcGhvbmU6IHByb3BzLmN1c3RvbWVyX3Bob25lIHx8IFwiXCIsXG4gICAgICBjdXN0b21lcl9sYXN0bmFtZTogcHJvcHMubE5hbWUgfHwgXCJcIixcbiAgICAgIGN1c3RvbV90aXRsZTogcHJvcHMuY3VzdG9tX3RpdGxlIHx8IFwiXCIsXG4gICAgICBjdXN0b21fZGVzY3JpcHRpb246IHByb3BzLmN1c3RvbV9kZXNjcmlwdGlvbiB8fCBcIlwiLFxuICAgICAgY3VzdG9tX2xvZ286IHByb3BzLmN1c3RvbV9sb2dvIHx8IFwiXCIsXG4gICAgICBzdWJhY2NvdW50czogcHJvcHMuc3ViYWNjb3VudHMgfHwgW3t9XSwgLy9zcGxpdHMgcGF5bWVudHMgaW50byBzdWJhY2NvdW50cyBwcm92aWRlZFxuICAgICAgcGF5bWVudF9tZXRob2Q6IHByb3BzLnBheW1lbnRfbWV0aG9kIHx8IFwiYm90aFwiLCAvL2ZhbGxzIGJhY2sgdG8gY2FyZCBhbmQgYWNjb3VudCBpZiBub25lIGlzIHNwZWNpZmllZFxuICAgICAgcGF5bWVudF9wbGFuOiBwcm9wcy5wYXltZW50X3BsYW4gfHwgXCJcIiwgLy90aGUgaWQgb2YgeW91ciBwYXltZW50IHBsYW5cbiAgICAgIHJlZGlyZWN0X3VybDogcHJvcHMucmVkaXJlY3RfdXJsIHx8IFwiXCIsIC8vY2FsbHMgdGhpcyB1cmwgYWZ0ZXIgc3VjY2Vzc2Z1bCBwYXltZW50XG4gICAgICBob3N0ZWRfcGF5bWVudDogcHJvcHMuaG9zdGVkX3BheW1lbnQsIC8vb3BlbnMgdGhlIG1vZGFsIGluIGEgbmV3IHBhZ2VcbiAgICAgIGNhbXBhaWduX2lkOiBwcm9wcy5jYW1wYWlnbl9pZCB8fCBcIlwiLCAvL2FsbG93cyBkaXNjb3VudHNcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcm9wcy5kaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IFwiYWN0aXZhdGVkXCJ9YH1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXtwYXlXaXRoUmF2ZX1cbiAgICAgID5cbiAgICAgICAge3N0YXRlLnRleHR9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2YXRlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkY2Y4ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdmVCdXR0b247XG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/raveButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (RaveButton);

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
var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/sideBar.js";


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
  }, ".menu.jsx-3102106043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:inherit;padding:10px;background:#281742;position:fixed;z-index:10;}.menu-item.jsx-3102106043{padding:5px;margin-bottom:20px;cursor:pointer;font-size:15px;}.menu-item.jsx-3102106043:hover{background:#9482a3;border-radius:4px;}.logo.jsx-3102106043{margin-bottom:100px;width:30%;}.logo.jsx-3102106043 img.jsx-3102106043{width:100%;}.item.jsx-3102106043{color:#785999;}.menu-item.jsx-3102106043:hover .item.jsx-3102106043{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvc2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhd0IsQUFHa0MsQUFXRCxBQU9PLEFBS0MsQUFNVCxBQUlHLEFBSUYsV0FQaEIsQ0FsQnVCLEFBMEJ2QixFQUpBLEtBZnNCLENBS1IsVUFFZCxDQWJtQixNQU9uQixTQU5tQixlQUNuQixhQWQwQiw4RUFDVixZQUNFLGNBQ0QsYUFDTSxtQkFDSixlQUNKLFdBQ2YiLCJmaWxlIjoiL21udC9jL1VzZXJzL0JlbiBLaXNzaS9Eb2N1bWVudHMvY29kZS9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9zaWRlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PGltZyBzcmM9XCIvaW1hZ2VzL25ld0xvZ29XaGl0ZS5zdmdcIi8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5TZWFyY2g8L2Rpdj48L0xpbms+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5QZXJmb3JtYW5jZTwvZGl2PjwvTGluaz4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI4MTc0MjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWVudS1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk0ODJhMztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzg1OTk5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tZW51LWl0ZW06aG92ZXIgLml0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXIiXX0= */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/components/sideBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
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

/***/ "./pages/plans.js":
/*!************************!*\
  !*** ./pages/plans.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboardLayout */ "./components/dashboardLayout.js");
/* harmony import */ var _components_plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/plan */ "./components/plan.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
var _jsxFileName = "/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/pages/plans.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Plans = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!window.getpaidSetup) {
      new Promise(resolve => {
        loadScript(() => {
          resolve();
        });
      });
    }
  }, []);
  const features = [{
    image: "/images/search.svg",
    description: "Uncover 1000's of targetable Facebook™ interests your competition can't find, so you can avoid the bidding war and skyrocket your ROAS "
  }, {
    image: "/images/download.svg",
    description: "Easily cherrypick profitable Facebook™ interests by simply copy - pasting them in your detailed targeting or downloading them as a CSV file"
  }, {
    image: "/images/time.svg",
    description: "Save hours of manual interest research with our auto-generated interest research links"
  }];

  const loadScript = callback => {
    const script = document.createElement("script");
    script.src = !props.isProduction ? "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js" : "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    if (script.readyState) {
      // IE
      script.onreadystatechange = () => {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Others
      script.onload = () => {
        callback();
      };
    }
  };

  const paymentCallback = async (plan, response) => {
    if (response.tx.chargeResponseCode == "00" || response.tx.chargeResponseCode == "0") {
      await props.verify(props.user.xToken, plan, response.tx.txRef); // if (res.data.plan.name !== "trial") {
      //   updateState(res.data.plan.name, res.data.plan.nextPayment);
      //   console.log("paid");
      // } else if (res.status == 400) {
      //   toast.error(`Something went wrong. Contact support if this persits`, {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //   });
      // }
    }
  };

  return __jsx("div", {
    className: "jsx-2022374315" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2022374315" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2022374315",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Pricing"), __jsx("p", {
    className: "jsx-2022374315",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Simple pricing, no hidden fees")), __jsx("div", {
    className: "jsx-2022374315" + " " + "packages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(_components_plan__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: "/images/fbKey.svg",
    title: "Life-time Access",
    description: "Get access to hidden Facebook interest",
    features: features,
    userEmail: props.user ? props.user.email : "",
    fName: props.user ? props.user.name.split[0] : "",
    lName: props.user ? props.user.name.split[1] : "",
    verifyPayment: paymentCallback,
    currentPlan: props.user ? props.user.plan : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2022374315",
    __self: undefined
  }, ".wrapper.jsx-2022374315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:100px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.title.jsx-2022374315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.packages.jsx-2022374315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9CZW4gS2lzc2kvRG9jdW1lbnRzL2NvZGUvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL3BhZ2VzL3BsYW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHa0IsQUFHd0IsQUFRQSxBQU9BLDBFQWRJLEFBUUUsQUFPSSxpQkFkQSw0RUFRRCxNQU9YLFdBQ0ssTUFmRyxVQWdCckIsNkNBUnlCLHNDQVBELDZEQVF4QixpQkFQQSIsImZpbGUiOiIvbW50L2MvVXNlcnMvQmVuIEtpc3NpL0RvY3VtZW50cy9jb2RlL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9wbGFucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXRcIjtcbmltcG9ydCBQbGFuIGZyb20gXCIuLi9jb21wb25lbnRzL3BsYW5cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgdmVyaWZ5UGF5bWVudCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5jb25zdCBQbGFucyA9IChwcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2luZG93LmdldHBhaWRTZXR1cCkge1xuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgbG9hZFNjcmlwdCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZlYXR1cmVzID0gW1xuICAgIHtcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2VhcmNoLnN2Z1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVW5jb3ZlciAxMDAwJ3Mgb2YgdGFyZ2V0YWJsZSBGYWNlYm9va+KEoiBpbnRlcmVzdHMgeW91ciBjb21wZXRpdGlvbiBjYW4ndCBmaW5kLCBzbyB5b3UgY2FuIGF2b2lkIHRoZSBiaWRkaW5nIHdhciBhbmQgc2t5cm9ja2V0IHlvdXIgUk9BUyBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvZG93bmxvYWQuc3ZnXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJFYXNpbHkgY2hlcnJ5cGljayBwcm9maXRhYmxlIEZhY2Vib29r4oSiIGludGVyZXN0cyBieSBzaW1wbHkgY29weSAtIHBhc3RpbmcgdGhlbSBpbiB5b3VyIGRldGFpbGVkIHRhcmdldGluZyBvciBkb3dubG9hZGluZyB0aGVtIGFzIGEgQ1NWIGZpbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvdGltZS5zdmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlNhdmUgaG91cnMgb2YgbWFudWFsIGludGVyZXN0IHJlc2VhcmNoIHdpdGggb3VyIGF1dG8tZ2VuZXJhdGVkIGludGVyZXN0IHJlc2VhcmNoIGxpbmtzXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBsb2FkU2NyaXB0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQuc3JjID0gIXByb3BzLmlzUHJvZHVjdGlvblxuICAgICAgPyBcImh0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qc1wiXG4gICAgICA6IFwiaHR0cHM6Ly9hcGkucmF2ZXBheS5jby9mbHd2My1wdWcvZ2V0cGFpZHgvYXBpL2Zsd3BiZi1pbmxpbmUuanNcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUpIHtcbiAgICAgIC8vIElFXG4gICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2NyaXB0LnJlYWR5U3RhdGUgPT09IFwibG9hZGVkXCIgfHxcbiAgICAgICAgICBzY3JpcHQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyc1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBheW1lbnRDYWxsYmFjayA9IGFzeW5jIChwbGFuLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnR4LmNoYXJnZVJlc3BvbnNlQ29kZSA9PSBcIjAwXCIgfHxcbiAgICAgIHJlc3BvbnNlLnR4LmNoYXJnZVJlc3BvbnNlQ29kZSA9PSBcIjBcIlxuICAgICkge1xuICAgICAgYXdhaXQgcHJvcHMudmVyaWZ5KHByb3BzLnVzZXIueFRva2VuLCBwbGFuLCByZXNwb25zZS50eC50eFJlZik7XG5cbiAgICAgIC8vIGlmIChyZXMuZGF0YS5wbGFuLm5hbWUgIT09IFwidHJpYWxcIikge1xuICAgICAgLy8gICB1cGRhdGVTdGF0ZShyZXMuZGF0YS5wbGFuLm5hbWUsIHJlcy5kYXRhLnBsYW4ubmV4dFBheW1lbnQpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInBhaWRcIik7XG4gICAgICAvLyB9IGVsc2UgaWYgKHJlcy5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAvLyAgIHRvYXN0LmVycm9yKGBTb21ldGhpbmcgd2VudCB3cm9uZy4gQ29udGFjdCBzdXBwb3J0IGlmIHRoaXMgcGVyc2l0c2AsIHtcbiAgICAgIC8vICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgIC8vICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAvLyAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIC8vICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAvLyAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgLy8gICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgIDxoMj5QcmljaW5nPC9oMj5cbiAgICAgICAgPHA+U2ltcGxlIHByaWNpbmcsIG5vIGhpZGRlbiBmZWVzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VzXCI+XG4gICAgICAgIDxQbGFuXG4gICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2ZiS2V5LnN2Z1wiXG4gICAgICAgICAgdGl0bGU9XCJMaWZlLXRpbWUgQWNjZXNzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkdldCBhY2Nlc3MgdG8gaGlkZGVuIEZhY2Vib29rIGludGVyZXN0XCJcbiAgICAgICAgICBmZWF0dXJlcz17ZmVhdHVyZXN9XG4gICAgICAgICAgdXNlckVtYWlsPXtwcm9wcy51c2VyID8gcHJvcHMudXNlci5lbWFpbCA6IFwiXCJ9XG4gICAgICAgICAgZk5hbWU9e3Byb3BzLnVzZXIgPyBwcm9wcy51c2VyLm5hbWUuc3BsaXRbMF0gOiBcIlwifVxuICAgICAgICAgIGxOYW1lPXtwcm9wcy51c2VyID8gcHJvcHMudXNlci5uYW1lLnNwbGl0WzFdIDogXCJcIn1cbiAgICAgICAgICB2ZXJpZnlQYXltZW50PXtwYXltZW50Q2FsbGJhY2t9XG4gICAgICAgICAgY3VycmVudFBsYW49e3Byb3BzLnVzZXIgPyBwcm9wcy51c2VyLnBsYW4gOiBcIlwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGFja2FnZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGxhbnMuTGF5b3V0ID0gRGFzaGJvYXJkTGF5b3V0O1xuXG5QbGFucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzUHJvZHVjdGlvbjogZmFsc2UsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICB2ZXJpZnk6ICh0b2tlbiwgcGxhbiwgcmVmKSA9PiBkaXNwYXRjaCh2ZXJpZnlQYXltZW50KHsgdG9rZW4sIHBsYW4sIHJlZiB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGxhbnMpO1xuIl19 */\n/*@ sourceURL=/mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/pages/plans.js */"));
};

Plans.Layout = _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_2__["default"];
Plans.defaultProps = {
  isProduction: false
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  verify: (token, plan, ref) => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_5__["verifyPayment"])({
    token,
    plan,
    ref
  }))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Plans));

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

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/plans.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Ben Kissi/Documents/code/getch/getch-frontend-2.0/pages/plans.js */"./pages/plans.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

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
//# sourceMappingURL=plans.js.map