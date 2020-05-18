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


var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js";


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
    src: "/images/newLogo.svg",
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
  }, "#wrapper.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}#actions.jsx-2343109816>*.jsx-2343109816{margin:0 5px 0 5px;}.count.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;}.count.jsx-2343109816 p.jsx-2343109816{margin:0;}.count.jsx-2343109816 span.jsx-2343109816{font-weight:bold;}.profile-wrapper.jsx-2343109816{width:50px;height:30px;}.profile-wrapper.jsx-2343109816 img.jsx-2343109816{width:100%;height:100%;cursor:pointer;}.logo.jsx-2343109816{width:100px;cursor:pointer;}.logo.jsx-2343109816 img.jsx-2343109816{width:100%;}.red.jsx-2343109816{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBR3dCLEFBTUEsQUFNTSxBQUlOLEFBS0osQUFJUSxBQUdOLEFBS0EsQUFNQyxBQUtELEFBSUQsU0ExQlosQ0EyQkEsQ0FwQmMsQUFLQSxBQVdkLENBTGlCLEtBZGpCLEVBYkEsSUFpQkEsQUFLaUIsSUFNakIsV0FMQSxvQ0FuQ2EsQUFNUSxBQVVGLFdBZkssTUFnQnhCLGdCQWZBLDREQUttQixpQkFDbkIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVTZXR0aW5nc0NsaWNrID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL3NldHRpbmdzXCIpO1xuICB9O1xuXG4gIGNvbnN0IGdvSG9tZSA9ICgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1BsYW5zID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL3BsYW5zXCIpO1xuICB9O1xuXG4gIGNvbnN0IGlzRnJlZVVzZXIgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXIgJiYgcHJvcHMudXNlci5wbGFuID09PSBcIlBMMDAxXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIG9uQ2xpY2s9e2dvSG9tZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9uZXdMb2dvLnN2Z1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzRnJlZVVzZXIoKSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgMyBmcmVlIHNlYXJjaDp7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3Byb3BzLnNlYXJjaENvdW50ID49IDMgPyBcInJlZFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAge3Byb3BzLnNlYXJjaENvdW50IDwgM1xuICAgICAgICAgICAgICAgID8gYFlvdSBoYXZlICR7MyAtIHByb3BzLnNlYXJjaENvdW50fSBmcmVlIHNlYXJjaCBsZWZ0YFxuICAgICAgICAgICAgICAgIDogXCJZb3UgYXJlIG91dCBvZiBmcmVlIHNlYXJjaGVzLCBraW5kbHkgdXBncmFkZVwifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuXG4gICAgICA8ZGl2IGlkPVwiYWN0aW9uc1wiPlxuICAgICAgICB7aXNGcmVlVXNlcigpID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGhpZGRlbj17cHJvcHMudXNlciAmJiAhcHJvcHMudXNlci5wbGFuID09IFwiUEwwMDFcIn1cbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2Y4NjMyNlwiLCBib3JkZXI6IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtnb1RvUGxhbnN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IGxpZmUgdGltZSBhY2Nlc3NcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIlwiXG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXdyYXBwZXJcIiBvbkNsaWNrPXtoYW5kbGVTZXR0aW5nc0NsaWNrfT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdXNlci5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICN3cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAjYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgI2FjdGlvbnMgPiAqIHtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudCBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZmlsZS13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZmlsZS13cmFwcGVyIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28gaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWQge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgc2VhcmNoQ291bnQ6IHN0YXRlLnNlYXJjaC5zZWFyY2hDb3VudCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js */"));
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  searchCount: state.search.searchCount
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/privacy.js":
/*!**************************!*\
  !*** ./pages/privacy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/privacy.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Privacy() {
  return __jsx("div", {
    className: "jsx-1513730145" + " " + "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1513730145" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Privacy Policy"), __jsx("p", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Last edited: January 2020")), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the app. By using the Site, you agree to the collection and use of information in accordance with this policy.")), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Information Collection and Use"), "While using our Getch application, we may ask you to provide us with certain personally identifiable information by authenticating with Facebook. This information can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email, ad accounts, ads."), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Log Data"), "Like many site operators, we collect information that your browser sends whenever you visit our Site (\"Log Data\"). This Log Data may include information such as your computer's Internet Protocol (\"IP\") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this Log Data."), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Communications"), "We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that will enable you fully utilize the Getch application. All our communications channels allow users to unsubscribe from receiving such information."), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Cookies"), "Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use \"cookies\" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our application. We use cookies to provide a seamless experience such as not having you to log in everytime you visit the application."), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Security"), "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. We use SSL encription as system communication protocol."), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Changes To This Privacy Policy"), "This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website."), __jsx("div", {
    className: "jsx-1513730145" + " " + "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1513730145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Contact us"), "If you have any questions about this Privacy Policy, please contact us. legal@getchapp.com"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1513730145",
    __self: this
  }, ".wrapper.jsx-1513730145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:16px;padding-left:100px;padding-right:100px;margin-bottom:50px;}.header.jsx-1513730145{margin-top:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9wcml2YWN5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ga0IsQUFHd0IsQUFTSSxpQkFDbkIseURBVHdCLDhFQUNQLGVBQ0ksbUJBQ0Msb0JBQ0QsbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9wcml2YWN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMz5Qcml2YWN5IFBvbGljeTwvaDM+XG4gICAgICAgIDxwPkxhc3QgZWRpdGVkOiBKYW51YXJ5IDIwMjA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIHBhZ2UgaW5mb3JtcyB5b3Ugb2Ygb3VyIHBvbGljaWVzIHJlZ2FyZGluZyB0aGUgY29sbGVjdGlvbiwgdXNlXG4gICAgICAgICAgYW5kIGRpc2Nsb3N1cmUgb2YgUGVyc29uYWwgSW5mb3JtYXRpb24gd2UgcmVjZWl2ZSBmcm9tIHVzZXJzIG9mIHRoZVxuICAgICAgICAgIFNpdGUuIFdlIHVzZSB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIG9ubHkgZm9yIHByb3ZpZGluZyBhbmRcbiAgICAgICAgICBpbXByb3ZpbmcgdGhlIGFwcC4gQnkgdXNpbmcgdGhlIFNpdGUsIHlvdSBhZ3JlZSB0byB0aGUgY29sbGVjdGlvbiBhbmRcbiAgICAgICAgICB1c2Ugb2YgaW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIHRoaXMgcG9saWN5LlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDQ+SW5mb3JtYXRpb24gQ29sbGVjdGlvbiBhbmQgVXNlPC9oND5cbiAgICAgICAgV2hpbGUgdXNpbmcgb3VyIEdldGNoIGFwcGxpY2F0aW9uLCB3ZSBtYXkgYXNrIHlvdSB0byBwcm92aWRlIHVzIHdpdGhcbiAgICAgICAgY2VydGFpbiBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBieSBhdXRoZW50aWNhdGluZyB3aXRoXG4gICAgICAgIEZhY2Vib29rLiBUaGlzIGluZm9ybWF0aW9uIGNhbiBiZSB1c2VkIHRvIGNvbnRhY3Qgb3IgaWRlbnRpZnkgeW91LlxuICAgICAgICBQZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBtYXkgaW5jbHVkZSwgYnV0IGlzIG5vdCBsaW1pdGVkIHRvXG4gICAgICAgIHlvdXIgbmFtZSwgZW1haWwsIGFkIGFjY291bnRzLCBhZHMuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDQ+TG9nIERhdGE8L2g0PlxuICAgICAgICBMaWtlIG1hbnkgc2l0ZSBvcGVyYXRvcnMsIHdlIGNvbGxlY3QgaW5mb3JtYXRpb24gdGhhdCB5b3VyIGJyb3dzZXIgc2VuZHNcbiAgICAgICAgd2hlbmV2ZXIgeW91IHZpc2l0IG91ciBTaXRlIChcIkxvZyBEYXRhXCIpLiBUaGlzIExvZyBEYXRhIG1heSBpbmNsdWRlXG4gICAgICAgIGluZm9ybWF0aW9uIHN1Y2ggYXMgeW91ciBjb21wdXRlcidzIEludGVybmV0IFByb3RvY29sIChcIklQXCIpIGFkZHJlc3MsXG4gICAgICAgIGJyb3dzZXIgdHlwZSwgYnJvd3NlciB2ZXJzaW9uLCB0aGUgcGFnZXMgb2Ygb3VyIFNpdGUgdGhhdCB5b3UgdmlzaXQsIHRoZVxuICAgICAgICB0aW1lIGFuZCBkYXRlIG9mIHlvdXIgdmlzaXQsIHRoZSB0aW1lIHNwZW50IG9uIHRob3NlIHBhZ2VzIGFuZCBvdGhlclxuICAgICAgICBzdGF0aXN0aWNzLiBJbiBhZGRpdGlvbiwgd2UgbWF5IHVzZSB0aGlyZCBwYXJ0eSBzZXJ2aWNlcyBzdWNoIGFzIEdvb2dsZVxuICAgICAgICBBbmFseXRpY3MgdGhhdCBjb2xsZWN0LCBtb25pdG9yIGFuZCBhbmFseXplIHRoaXMgTG9nIERhdGEuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDQ+Q29tbXVuaWNhdGlvbnM8L2g0PlxuICAgICAgICBXZSBtYXkgdXNlIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gdG8gY29udGFjdCB5b3Ugd2l0aCBuZXdzbGV0dGVycyxcbiAgICAgICAgbWFya2V0aW5nIG9yIHByb21vdGlvbmFsIG1hdGVyaWFscyBhbmQgb3RoZXIgaW5mb3JtYXRpb24gdGhhdCB3aWxsXG4gICAgICAgIGVuYWJsZSB5b3UgZnVsbHkgdXRpbGl6ZSB0aGUgR2V0Y2ggYXBwbGljYXRpb24uIEFsbCBvdXIgY29tbXVuaWNhdGlvbnNcbiAgICAgICAgY2hhbm5lbHMgYWxsb3cgdXNlcnMgdG8gdW5zdWJzY3JpYmUgZnJvbSByZWNlaXZpbmcgc3VjaCBpbmZvcm1hdGlvbi5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoND5Db29raWVzPC9oND5cbiAgICAgICAgQ29va2llcyBhcmUgZmlsZXMgd2l0aCBzbWFsbCBhbW91bnQgb2YgZGF0YSwgd2hpY2ggbWF5IGluY2x1ZGUgYW5cbiAgICAgICAgYW5vbnltb3VzIHVuaXF1ZSBpZGVudGlmaWVyLiBDb29raWVzIGFyZSBzZW50IHRvIHlvdXIgYnJvd3NlciBmcm9tIGEgd2ViXG4gICAgICAgIHNpdGUgYW5kIHN0b3JlZCBvbiB5b3VyIGNvbXB1dGVyJ3MgaGFyZCBkcml2ZS4gTGlrZSBtYW55IHNpdGVzLCB3ZSB1c2VcbiAgICAgICAgXCJjb29raWVzXCIgdG8gY29sbGVjdCBpbmZvcm1hdGlvbi4gWW91IGNhbiBpbnN0cnVjdCB5b3VyIGJyb3dzZXIgdG9cbiAgICAgICAgcmVmdXNlIGFsbCBjb29raWVzIG9yIHRvIGluZGljYXRlIHdoZW4gYSBjb29raWUgaXMgYmVpbmcgc2VudC4gSG93ZXZlcixcbiAgICAgICAgaWYgeW91IGRvIG5vdCBhY2NlcHQgY29va2llcywgeW91IG1heSBub3QgYmUgYWJsZSB0byB1c2Ugc29tZSBwb3J0aW9uc1xuICAgICAgICBvZiBvdXIgYXBwbGljYXRpb24uIFdlIHVzZSBjb29raWVzIHRvIHByb3ZpZGUgYSBzZWFtbGVzcyBleHBlcmllbmNlIHN1Y2hcbiAgICAgICAgYXMgbm90IGhhdmluZyB5b3UgdG8gbG9nIGluIGV2ZXJ5dGltZSB5b3UgdmlzaXQgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGg0PlNlY3VyaXR5PC9oND5cbiAgICAgICAgVGhlIHNlY3VyaXR5IG9mIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gaXMgaW1wb3J0YW50IHRvIHVzLCBidXRcbiAgICAgICAgcmVtZW1iZXIgdGhhdCBubyBtZXRob2Qgb2YgdHJhbnNtaXNzaW9uIG92ZXIgdGhlIEludGVybmV0LCBvciBtZXRob2Qgb2ZcbiAgICAgICAgZWxlY3Ryb25pYyBzdG9yYWdlLCBpcyAxMDAlIHNlY3VyZS4gV2hpbGUgd2Ugc3RyaXZlIHRvIHVzZSBjb21tZXJjaWFsbHlcbiAgICAgICAgYWNjZXB0YWJsZSBtZWFucyB0byBwcm90ZWN0IHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24sIHdlIGNhbm5vdFxuICAgICAgICBndWFyYW50ZWUgaXRzIGFic29sdXRlIHNlY3VyaXR5LiBXZSB1c2UgU1NMIGVuY3JpcHRpb24gYXMgc3lzdGVtXG4gICAgICAgIGNvbW11bmljYXRpb24gcHJvdG9jb2wuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDQ+Q2hhbmdlcyBUbyBUaGlzIFByaXZhY3kgUG9saWN5PC9oND5cbiAgICAgICAgVGhpcyBQcml2YWN5IFBvbGljeSBpcyBlZmZlY3RpdmUgYXMgb2YgKGFkZCBkYXRlKSBhbmQgd2lsbCByZW1haW4gaW5cbiAgICAgICAgZWZmZWN0IGV4Y2VwdCB3aXRoIHJlc3BlY3QgdG8gYW55IGNoYW5nZXMgaW4gaXRzIHByb3Zpc2lvbnMgaW4gdGhlXG4gICAgICAgIGZ1dHVyZSwgd2hpY2ggd2lsbCBiZSBpbiBlZmZlY3QgaW1tZWRpYXRlbHkgYWZ0ZXIgYmVpbmcgcG9zdGVkIG9uIHRoaXNcbiAgICAgICAgcGFnZS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gdXBkYXRlIG9yIGNoYW5nZSBvdXIgUHJpdmFjeSBQb2xpY3kgYXQgYW55XG4gICAgICAgIHRpbWUgYW5kIHlvdSBzaG91bGQgY2hlY2sgdGhpcyBQcml2YWN5IFBvbGljeSBwZXJpb2RpY2FsbHkuIFlvdXJcbiAgICAgICAgY29udGludWVkIHVzZSBvZiB0aGUgU2VydmljZSBhZnRlciB3ZSBwb3N0IGFueSBtb2RpZmljYXRpb25zIHRvIHRoZVxuICAgICAgICBQcml2YWN5IFBvbGljeSBvbiB0aGlzIHBhZ2Ugd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNrbm93bGVkZ21lbnQgb2YgdGhlXG4gICAgICAgIG1vZGlmaWNhdGlvbnMgYW5kIHlvdXIgY29uc2VudCB0byBhYmlkZSBhbmQgYmUgYm91bmQgYnkgdGhlIG1vZGlmaWVkXG4gICAgICAgIFByaXZhY3kgUG9saWN5LiBJZiB3ZSBtYWtlIGFueSBtYXRlcmlhbCBjaGFuZ2VzIHRvIHRoaXMgUHJpdmFjeSBQb2xpY3ksXG4gICAgICAgIHdlIHdpbGwgbm90aWZ5IHlvdSBlaXRoZXIgdGhyb3VnaCB0aGUgZW1haWwgYWRkcmVzcyB5b3UgaGF2ZSBwcm92aWRlZFxuICAgICAgICB1cywgb3IgYnkgcGxhY2luZyBhIHByb21pbmVudCBub3RpY2Ugb24gb3VyIHdlYnNpdGUuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDQ+Q29udGFjdCB1czwvaDQ+XG4gICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgdGhpcyBQcml2YWN5IFBvbGljeSwgcGxlYXNlIGNvbnRhY3QgdXMuXG4gICAgICAgIGxlZ2FsQGdldGNoYXBwLmNvbVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3k7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/privacy.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/privacy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/benkissi/projects/getch/getch-frontend-2.0/pages/privacy.js */"./pages/privacy.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

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
//# sourceMappingURL=privacy.js.map