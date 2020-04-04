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

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");




var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Signin(props) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    current: "signup",
    email: "",
    password: "",
    error: {
      email: null,
      password: null,
      isMatch: null
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!state.error.email && !state.error.password && state.error.isMatch) {
      handleSignup({
        email: state.email,
        password: state.password
      });
    }
  }, [state.error]);

  const setInput = event => {
    console.log(event.target.name);
    const {
      name,
      value
    } = event.target;
    setState(prevState => _objectSpread({}, prevState, {
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!validateEmail(state.email)) {
      console.log("hshsh");
      setState(prevState => _objectSpread({}, prevState, {
        error: _objectSpread({}, prevState.error, {
          email: "Add a correct email"
        })
      }));
    } else {
      setState(prevState => _objectSpread({}, prevState, {
        error: _objectSpread({}, prevState.error, {
          email: null
        })
      }));
    }

    if (state.password.length < 8) {
      console.log("wrong pass");
      setState(prevState => _objectSpread({}, prevState, {
        error: _objectSpread({}, prevState.error, {
          password: "Password must be longer than 7 characters"
        })
      }));
    } else {
      setState(prevState => _objectSpread({}, prevState, {
        error: _objectSpread({}, prevState.error, {
          password: null
        })
      }));
    }

    if (state.current == 'signup') {
      const isMatch = state.password === state.repeatPassword;
      console.log('match', isMatch);
      setState(prevState => _objectSpread({}, prevState, {
        error: _objectSpread({}, prevState.error, {
          isMatch: isMatch
        })
      }));
    }
  };

  const handleSignup = details => {
    props.signup(details);
  };

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleAuthChange = () => {
    if (state.current == "signup") {
      console.log("auth change");
      setState(prevState => _objectSpread({}, prevState, {
        current: "signin"
      }));
    }

    if (state.current == "signin") {
      console.log("auth change");
      setState(prevState => _objectSpread({}, prevState, {
        current: "signup"
      }));
    }
  };

  const {
    current
  } = state;
  return __jsx("div", {
    id: "wrapper",
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4146696111" + " " + "pane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4146696111" + " " + "slogan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Hyper target your Facebook ads")), __jsx("div", {
    className: "jsx-4146696111" + " " + "auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4146696111" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-4146696111" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("p", {
    style: {
      display: state.error.email ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, state.error.email ? state.error.email : ""), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "email",
    type: "email",
    placeholder: "email",
    onChange: setInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4146696111" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("p", {
    style: {
      display: state.error.password ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, state.error.password ? state.error.password : ""), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "password",
    type: "password",
    placeholder: "password",
    onChange: setInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), current === "signup" ? __jsx("div", {
    className: "jsx-4146696111" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("p", {
    style: {
      display: state.error.isMatch === false ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Passwords do not match"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "repeatPassword",
    type: "password",
    placeholder: "repeat password",
    onChange: setInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })) : "", __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    style: {
      width: "100%"
    },
    onClick: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, current === "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    id: "sub-actions",
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Have an acount already?", " ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-4146696111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, current === "signup" ? "Sign up" : "Sign in"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "4146696111",
    __self: this
  }, "#wrapper.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}.pane.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}.auth.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}.details.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}.input.jsx-4146696111{width:100%;margin:10px 0 10px 0;}.card.jsx-4146696111{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}.slogan.jsx-4146696111{color:white;font-size:18px;}#sub-actions.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}#sub-actions.jsx-4146696111 p.jsx-4146696111{margin:0;margin-bottom:5px;}#sub-actions.jsx-4146696111 span.jsx-4146696111{color:#4e54c8;cursor:pointer;font-weight:bold;}.error.jsx-4146696111{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkxrQixBQUd3QixBQU1BLEFBU0EsQUFRQSxBQVFGLEFBS0MsQUFTQSxBQUtDLEFBUUosQUFLSyxBQU1KLFNBVlEsQ0FXcEIsQ0F0Q3VCLENBS1IsQUFTRSxFQWtCQSxhQWpCakIsQUFhQSxFQUttQixHQWhDbkIsY0FpQ0EsNEJBakVhLEFBTVcsQUFTQSxBQVFBLEFBMkJBLFdBakRULENBb0NLLFlBbkNwQixNQW9DWSxVQUNhLHVCQUNWLGFBQ2YsRUFsQ3lCLEFBU0EsQUFRQSxBQTJCQSxtR0EzQ0osQUFTQSxBQVFBLEFBMkJELGtCQUNGLGdCQUNsQiwyREE3QzJCLEFBU2xCLEFBUUcsVUFDWixlQWpCUyxRQVNULHlCQVJBIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgeyBzaWdudXBTdGFydCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBTaWduaW4ocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBlcnJvcjoge1xuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIGlzTWF0Y2g6IG51bGxcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCFzdGF0ZS5lcnJvci5lbWFpbCAmJiAhc3RhdGUuZXJyb3IucGFzc3dvcmQgJiYgc3RhdGUuZXJyb3IuaXNNYXRjaCl7XG4gICAgICBoYW5kbGVTaWdudXAoe2VtYWlsOnN0YXRlLmVtYWlsLCBwYXNzd29yZDogc3RhdGUucGFzc3dvcmR9KVxuICAgIH1cbiAgfSwgW3N0YXRlLmVycm9yXSlcblxuICBjb25zdCBzZXRJbnB1dCA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoc3RhdGUuZW1haWwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhzaHNoXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBlbWFpbDogXCJBZGQgYSBjb3JyZWN0IGVtYWlsXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgcGFzc1wiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA3IGNoYXJhY3RlcnNcIixcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZihzdGF0ZS5jdXJyZW50ID09ICdzaWdudXAnKXtcbiAgICAgIGNvbnN0IGlzTWF0Y2ggPSBzdGF0ZS5wYXNzd29yZCA9PT0gc3RhdGUucmVwZWF0UGFzc3dvcmRcbiAgICAgIGNvbnNvbGUubG9nKCdtYXRjaCcsIGlzTWF0Y2gpXG5cbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgaXNNYXRjaDogaXNNYXRjaFxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWdudXAoZGV0YWlscylcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBdXRoQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXV0aCBjaGFuZ2VcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IFwic2lnbmluXCIsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbmluXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXV0aCBjaGFuZ2VcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IFwic2lnbnVwXCIsXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgY3VycmVudCB9ID0gc3RhdGU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbmV3TG9nb1doaXRlLnN2Z1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xvZ2FuXCI+SHlwZXIgdGFyZ2V0IHlvdXIgRmFjZWJvb2sgYWRzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICA8aDM+e2N1cnJlbnQgPT0gXCJzaWdudXBcIiA/IFwiU2lnbiB1cFwiIDogXCJTaWduIGluXCJ9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN0YXRlLmVycm9yLmVtYWlsID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlLmVycm9yLmVtYWlsID8gc3RhdGUuZXJyb3IuZW1haWwgOiBcIlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3RhdGUuZXJyb3IucGFzc3dvcmQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IucGFzc3dvcmQgPyBzdGF0ZS5lcnJvci5wYXNzd29yZCA6IFwiXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2N1cnJlbnQgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN0YXRlLmVycm9yLmlzTWF0Y2ggPT09IGZhbHNlID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXBlYXQgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbiB1cFwiIDogXCJTaWduIGluXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGRpdiBpZD1cInN1Yi1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cD5CeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG8gb3VyIHRlcm1zIGFuZCBjb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEhhdmUgYW4gYWNvdW50IGFscmVhZHk/e1wiIFwifVxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVBdXRoQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbiB1cFwiIDogXCJTaWduIGluXCJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1NGM4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbG9nYW4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNGU1NGM4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TaWduaW4uTGF5b3V0ID0gKHByb3BzKSA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXJcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHNpZ251cDogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ251cFN0YXJ0KGRldGFpbHMpKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lnbmluKTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js */"));
}

Signin.Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266
  },
  __self: undefined
}, props.children);

const mapStateToProps = state => ({
  user: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: details => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_7__["signupStart"])(details))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Signin));

/***/ }),

/***/ "./redux/user/user-actions.js":
/*!************************************!*\
  !*** ./redux/user/user-actions.js ***!
  \************************************/
/*! exports provided: siginSuccess, siginStart, signupStart, addingCurrentUser, setCurrentUser, siginFailure, isLoading, authFacebook, facebookAuthSuccess, fbAuthFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginSuccess", function() { return siginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginStart", function() { return siginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupStart", function() { return signupStart; });
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
const signupStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__["default"].SIGN_UP_START,
  payload: userCredentials
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
  AUTH_FACEBOOK: "AUTH_FACEBOOK",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS"
};
/* harmony default export */ __webpack_exports__["default"] = (UserActionTypes);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js */"./pages/signup.js");


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
//# sourceMappingURL=signup.js.map