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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
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

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");




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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (props.user) {
      router.push("/");
    }
  }, [props.user]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (props.userError) {
      react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].error(`There was an error. ${props.userError.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [props.userError]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (current === "signup") {
      if (!state.error.email && !state.error.password && state.error.isMatch) {
        handleSignup({
          email: state.email,
          password: state.password
        });
      }
    } else if (current === "signin") {
      if (!state.error.email && !state.error.password) {
        handleSignin({
          email: state.email,
          password: state.password
        });
      }
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

    if (state.current == "signup") {
      const isMatch = state.password === state.repeatPassword;
      console.log("match", isMatch);
      setState(prevState => _objectSpread({}, prevState, {
        error: _objectSpread({}, prevState.error, {
          isMatch: isMatch
        })
      }));
    } // if (state.current == "signin") {
    //   setState((prevState) => ({
    //     ...prevState,
    //     error: {
    //       ...prevState.error,
    //       signinError: null
    //     },
    //   }));
    // }

  };

  const handleSignup = details => {
    props.signup(details);
  };

  const handleSignin = details => {
    props.signin(details);
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

  const buttonText = () => {
    if (props.loading) {
      return __jsx("div", {
        className: "loader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }
      }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "Bars",
        color: "#fff",
        height: 20,
        width: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }
      }));
    } else if (state.current == "signup") {
      return "Sign up";
    } else {
      return "Sign in";
    }
  };

  const {
    current
  } = state;
  return __jsx("div", {
    id: "wrapper",
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4146696111" + " " + "pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-4146696111" + " " + "slogan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, "Find hidden Facebook interests")), __jsx("div", {
    className: "jsx-4146696111" + " " + "auth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4146696111" + " " + "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-4146696111" + " " + "input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx("p", {
    style: {
      display: state.error.email ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, state.error.email ? state.error.email : ""), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "email",
    type: "email",
    placeholder: "email",
    onChange: setInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-4146696111" + " " + "input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, __jsx("p", {
    style: {
      display: state.error.password ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, state.error.password ? state.error.password : ""), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "password",
    type: "password",
    placeholder: "password",
    onChange: setInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  })), current === "signup" ? __jsx("div", {
    className: "jsx-4146696111" + " " + "input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      display: state.error.isMatch === false ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, "Passwords do not match"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "repeatPassword",
    type: "password",
    placeholder: "repeat password",
    onChange: setInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  })) : "", __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    style: {
      width: "100%"
    },
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, buttonText()), __jsx("div", {
    id: "sub-actions",
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, current === "signup" ? "Have an account already? " : "Create an account. ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-4146696111",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, current === "signup" ? "Sign in" : "Sign up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "4146696111",
    __self: this
  }, "#wrapper.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}.pane.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}.auth.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}.details.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}.input.jsx-4146696111{width:100%;margin:10px 0 10px 0;}.card.jsx-4146696111{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}.slogan.jsx-4146696111{color:white;font-size:18px;}#sub-actions.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}#sub-actions.jsx-4146696111 p.jsx-4146696111{margin:0;margin-bottom:5px;}#sub-actions.jsx-4146696111 span.jsx-4146696111{color:#4e54c8;cursor:pointer;font-weight:bold;}.error.jsx-4146696111{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVBrQixBQUd3QixBQU1BLEFBU0EsQUFRQSxBQVFGLEFBS0MsQUFTQSxBQUtDLEFBUUosQUFLSyxBQU1KLFNBVlEsQ0FXcEIsQ0F0Q3VCLENBS1IsQUFTRSxFQWtCQSxhQWpCakIsQUFhQSxFQUttQixHQWhDbkIsY0FpQ0EsNEJBakVhLEFBTVcsQUFTQSxBQVFBLEFBMkJBLFdBakRULENBb0NLLFlBbkNwQixNQW9DWSxVQUNhLHVCQUNWLGFBQ2YsRUFsQ3lCLEFBU0EsQUFRQSxBQTJCQSxtR0EzQ0osQUFTQSxBQVFBLEFBMkJELGtCQUNGLGdCQUNsQiwyREE3QzJCLEFBU2xCLEFBUUcsVUFDWixlQWpCUyxRQVNULHlCQVJBIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgc2lnbnVwU3RhcnQsIHNpZ25pblN0YXJ0IH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIFNpZ25pbihwcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBjdXJyZW50OiBcInNpZ251cFwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGVycm9yOiB7XG4gICAgICBlbWFpbDogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgaXNNYXRjaDogbnVsbCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbcHJvcHMudXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocHJvcHMudXNlckVycm9yKXtcbiAgICAgIHRvYXN0LmVycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IuICR7cHJvcHMudXNlckVycm9yLm1lc3NhZ2V9YCwge1xuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICB9XG4gIH0sIFtwcm9wcy51c2VyRXJyb3JdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnQgPT09IFwic2lnbnVwXCIpIHtcbiAgICAgIGlmICghc3RhdGUuZXJyb3IuZW1haWwgJiYgIXN0YXRlLmVycm9yLnBhc3N3b3JkICYmIHN0YXRlLmVycm9yLmlzTWF0Y2gpIHtcbiAgICAgICAgaGFuZGxlU2lnbnVwKHsgZW1haWw6IHN0YXRlLmVtYWlsLCBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBcInNpZ25pblwiKSB7XG4gICAgICBpZiAoIXN0YXRlLmVycm9yLmVtYWlsICYmICFzdGF0ZS5lcnJvci5wYXNzd29yZCkge1xuICAgICAgICBoYW5kbGVTaWduaW4oeyBlbWFpbDogc3RhdGUuZW1haWwsIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0ZS5lcnJvcl0pO1xuXG4gIGNvbnN0IHNldElucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICghdmFsaWRhdGVFbWFpbChzdGF0ZS5lbWFpbCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaHNoc2hcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIGVtYWlsOiBcIkFkZCBhIGNvcnJlY3QgZW1haWxcIixcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgICAgY29uc29sZS5sb2coXCJ3cm9uZyBwYXNzXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBwYXNzd29yZDogXCJQYXNzd29yZCBtdXN0IGJlIGxvbmdlciB0aGFuIDcgY2hhcmFjdGVyc1wiLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIGNvbnN0IGlzTWF0Y2ggPSBzdGF0ZS5wYXNzd29yZCA9PT0gc3RhdGUucmVwZWF0UGFzc3dvcmQ7XG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoXCIsIGlzTWF0Y2gpO1xuXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIGlzTWF0Y2g6IGlzTWF0Y2gsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWduaW5cIikge1xuICAgIC8vICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAvLyAgICAgLi4ucHJldlN0YXRlLFxuICAgIC8vICAgICBlcnJvcjoge1xuICAgIC8vICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAvLyAgICAgICBzaWduaW5FcnJvcjogbnVsbFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSkpO1xuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWdudXAgPSAoZGV0YWlscykgPT4ge1xuICAgIHByb3BzLnNpZ251cChkZXRhaWxzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWduaW4gPSAoZGV0YWlscykgPT4ge1xuICAgIHByb3BzLnNpZ25pbihkZXRhaWxzKTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQXV0aENoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ251cFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImF1dGggY2hhbmdlXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBjdXJyZW50OiBcInNpZ25pblwiLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ25pblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImF1dGggY2hhbmdlXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBjdXJyZW50OiBcInNpZ251cFwiLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidXR0b25UZXh0ID0gKCkgPT4ge1xuICAgIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIkJhcnNcIiBjb2xvcj1cIiNmZmZcIiBoZWlnaHQ9ezIwfSB3aWR0aD17NTB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1lbHNlIGlmKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWdudXBcIil7XG4gICAgICByZXR1cm4gXCJTaWduIHVwXCJcbiAgICB9ZWxzZSB7XG4gICAgICByZXR1cm4gXCJTaWduIGluXCJcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgeyBjdXJyZW50IH0gPSBzdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9uZXdMb2dvV2hpdGUuc3ZnXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbG9nYW5cIj5GaW5kIGhpZGRlbiBGYWNlYm9vayBpbnRlcmVzdHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMz57Y3VycmVudCA9PSBcInNpZ251cFwiID8gXCJTaWduIHVwXCIgOiBcIlNpZ24gaW5cIn08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3RhdGUuZXJyb3IuZW1haWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IuZW1haWwgPyBzdGF0ZS5lcnJvci5lbWFpbCA6IFwiXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdGF0ZS5lcnJvci5wYXNzd29yZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdGF0ZS5lcnJvci5wYXNzd29yZCA/IHN0YXRlLmVycm9yLnBhc3N3b3JkIDogXCJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlLmVycm9yLmlzTWF0Y2ggPT09IGZhbHNlID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXBlYXQgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dCgpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxkaXYgaWQ9XCJzdWItYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHA+Qnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRvIG91ciB0ZXJtcyBhbmQgY29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIlxuICAgICAgICAgICAgICAgID8gXCJIYXZlIGFuIGFjY291bnQgYWxyZWFkeT8gXCJcbiAgICAgICAgICAgICAgICA6IFwiQ3JlYXRlIGFuIGFjY291bnQuIFwifVxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVBdXRoQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbiBpblwiIDogXCJTaWduIHVwXCJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1NGM4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbG9nYW4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNGU1NGM4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TaWduaW4uTGF5b3V0ID0gKHByb3BzKSA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgbG9hZGluZzogc3RhdGUudXNlci5sb2FkaW5nLFxuICB1c2VyRXJyb3I6IHN0YXRlLnVzZXIuZXJyb3Jcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNpZ251cDogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ251cFN0YXJ0KGRldGFpbHMpKSxcbiAgc2lnbmluOiAoZGV0YWlscykgPT4gZGlzcGF0Y2goc2lnbmluU3RhcnQoZGV0YWlscykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25pbik7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js */"));
}

Signin.Layout = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 28
  }
}, props.children);

const mapStateToProps = state => ({
  user: state.user.currentUser,
  loading: state.user.loading,
  userError: state.user.error
});

const mapDispatchToProps = dispatch => ({
  signup: details => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__["signupStart"])(details)),
  signin: details => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__["signinStart"])(details))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Signin));

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

/***/ 7:
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

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

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

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map