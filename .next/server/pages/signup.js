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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
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




var _jsxFileName = "/home/ben/code/getch/getch-frontend-2.0/pages/signup.js";


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
    console.log('base', "http://localhost:8080/");
  }, []);
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
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!validateEmail(state.email)) {
      console.log("hshsh");
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        error: _objectSpread(_objectSpread({}, prevState.error), {}, {
          email: "Add a correct email"
        })
      }));
    } else {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        error: _objectSpread(_objectSpread({}, prevState.error), {}, {
          email: null
        })
      }));
    }

    if (state.password.length < 8) {
      console.log("wrong pass");
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        error: _objectSpread(_objectSpread({}, prevState.error), {}, {
          password: "Password must be longer than 7 characters"
        })
      }));
    } else {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        error: _objectSpread(_objectSpread({}, prevState.error), {}, {
          password: null
        })
      }));
    }

    if (state.current == "signup") {
      const isMatch = state.password === state.repeatPassword;
      console.log("match", isMatch);
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        error: _objectSpread(_objectSpread({}, prevState.error), {}, {
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
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        current: "signin"
      }));
    }

    if (state.current == "signin") {
      console.log("auth change");
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
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
          lineNumber: 164,
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
          lineNumber: 165,
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
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-939699015" + " " + "pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-939699015" + " " + "slogan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, "Find hidden Facebook interests")), __jsx("div", {
    className: "jsx-939699015" + " " + "auth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-939699015" + " " + "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-939699015" + " " + "input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx("p", {
    style: {
      display: state.error.email ? "block" : "none"
    },
    className: "jsx-939699015" + " " + "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 192,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-939699015" + " " + "input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx("p", {
    style: {
      display: state.error.password ? "block" : "none"
    },
    className: "jsx-939699015" + " " + "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 206,
      columnNumber: 13
    }
  })), current === "signup" ? __jsx("div", {
    className: "jsx-939699015" + " " + "input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      display: state.error.isMatch === false ? "block" : "none"
    },
    className: "jsx-939699015" + " " + "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 223,
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
      lineNumber: 233,
      columnNumber: 11
    }
  }, buttonText()), __jsx("div", {
    id: "sub-actions",
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, current === "signup" ? "Have an account already? " : "Create an account. ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-939699015",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, current === "signup" ? "Sign in" : "Sign up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "939699015",
    __self: this
  }, "#wrapper.jsx-939699015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}.pane.jsx-939699015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}.auth.jsx-939699015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}.details.jsx-939699015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}.input.jsx-939699015{width:100%;margin:10px 0 10px 0;}.card.jsx-939699015{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}.slogan.jsx-939699015{color:white;font-size:18px;}#sub-actions.jsx-939699015{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}#sub-actions.jsx-939699015 p.jsx-939699015{margin:0;margin-bottom:5px;}#sub-actions.jsx-939699015 span.jsx-939699015{color:#4e54c8;cursor:pointer;font-weight:bold;}.error.jsx-939699015{color:red;}@media screen and (max-width:480px){#wrapper.jsx-939699015{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}.pane.jsx-939699015{-webkit-flex:0;-ms-flex:0;flex:0;padding:20px 0;}.pane.jsx-939699015 img.jsx-939699015{width:100px;}.pane.jsx-939699015 .slogan.jsx-939699015{font-size:12px;}.auth.jsx-939699015{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.details.jsx-939699015{width:90%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbi9jb2RlL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNFBrQixBQUd3QixBQU1BLEFBU0EsQUFRQSxBQVFGLEFBS0MsQUFTQSxBQUtDLEFBUUosQUFLSyxBQU1KLEFBS2MsQUFLZixBQUtLLEFBSUcsQUFJUSxBQUtiLFNBdENNLENBV3BCLEFBNEJFLENBbEVxQixDQUtSLEFBU0UsQUF1Q2YsRUFyQmUsQ0F5QmYsWUExQ0YsQUFhQSxFQUttQixHQWhDbkIsQ0ErQ21CLGFBZG5CLEVBZUUsMEJBaEZXLEFBTVcsQUFTQSxBQVFBLEFBMkJBLElBd0JILE9BekVOLENBb0NLLFNBc0NsQixHQXpFRixDQTBGdUIsS0F0RFgsVUFDYSx1QkFDVixhQUNmLEVBbEN5QixBQVNBLEFBUUEsQUEyQkEsd0NBMEN2QiwyREFyRm1CLEFBU0EsQUFRQSxBQTJCRCxrQkFDRixnQkFDbEIsMkRBN0MyQixBQVNsQixBQVFHLFVBQ1osZUFqQlMsUUFTVCx5QkFSQSIsImZpbGUiOiIvaG9tZS9iZW4vY29kZS9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvcGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IHNpZ251cFN0YXJ0LCBzaWduaW5TdGFydCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBTaWduaW4ocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBlcnJvcjoge1xuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIGlzTWF0Y2g6IG51bGwsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Jhc2UnLCBwcm9jZXNzLmVudi5CQVNFX1VSTClcbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbcHJvcHMudXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXJFcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvci4gJHtwcm9wcy51c2VyRXJyb3IubWVzc2FnZX1gLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyRXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50ID09PSBcInNpZ251cFwiKSB7XG4gICAgICBpZiAoIXN0YXRlLmVycm9yLmVtYWlsICYmICFzdGF0ZS5lcnJvci5wYXNzd29yZCAmJiBzdGF0ZS5lcnJvci5pc01hdGNoKSB7XG4gICAgICAgIGhhbmRsZVNpZ251cCh7IGVtYWlsOiBzdGF0ZS5lbWFpbCwgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJzaWduaW5cIikge1xuICAgICAgaWYgKCFzdGF0ZS5lcnJvci5lbWFpbCAmJiAhc3RhdGUuZXJyb3IucGFzc3dvcmQpIHtcbiAgICAgICAgaGFuZGxlU2lnbmluKHsgZW1haWw6IHN0YXRlLmVtYWlsLCBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGUuZXJyb3JdKTtcblxuICBjb25zdCBzZXRJbnB1dCA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoc3RhdGUuZW1haWwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhzaHNoXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBlbWFpbDogXCJBZGQgYSBjb3JyZWN0IGVtYWlsXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgcGFzc1wiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA3IGNoYXJhY3RlcnNcIixcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ251cFwiKSB7XG4gICAgICBjb25zdCBpc01hdGNoID0gc3RhdGUucGFzc3dvcmQgPT09IHN0YXRlLnJlcGVhdFBhc3N3b3JkO1xuICAgICAgY29uc29sZS5sb2coXCJtYXRjaFwiLCBpc01hdGNoKTtcblxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBpc01hdGNoOiBpc01hdGNoLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbmluXCIpIHtcbiAgICAvLyAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgLy8gICAgIC4uLnByZXZTdGF0ZSxcbiAgICAvLyAgICAgZXJyb3I6IHtcbiAgICAvLyAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgLy8gICAgICAgc2lnbmluRXJyb3I6IG51bGxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0pKTtcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWdudXAoZGV0YWlscyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbmluID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWduaW4oZGV0YWlscyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUF1dGhDaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWdudXBcIikge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZVwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgY3VycmVudDogXCJzaWduaW5cIixcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWduaW5cIikge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZVwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV0dG9uVGV4dCA9ICgpID0+IHtcbiAgICBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjZmZmXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIHJldHVybiBcIlNpZ24gdXBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiU2lnbiBpblwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB7IGN1cnJlbnQgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL25ld0xvZ29XaGl0ZS5zdmdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsb2dhblwiPkZpbmQgaGlkZGVuIEZhY2Vib29rIGludGVyZXN0czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgPGgzPntjdXJyZW50ID09IFwic2lnbnVwXCIgPyBcIlNpZ24gdXBcIiA6IFwiU2lnbiBpblwifTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdGF0ZS5lcnJvci5lbWFpbCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdGF0ZS5lcnJvci5lbWFpbCA/IHN0YXRlLmVycm9yLmVtYWlsIDogXCJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN0YXRlLmVycm9yLnBhc3N3b3JkID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlLmVycm9yLnBhc3N3b3JkID8gc3RhdGUuZXJyb3IucGFzc3dvcmQgOiBcIlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGUuZXJyb3IuaXNNYXRjaCA9PT0gZmFsc2UgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBlYXRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtidXR0b25UZXh0KCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGRpdiBpZD1cInN1Yi1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cD5CeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG8gb3VyIHRlcm1zIGFuZCBjb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiXG4gICAgICAgICAgICAgICAgPyBcIkhhdmUgYW4gYWNjb3VudCBhbHJlYWR5PyBcIlxuICAgICAgICAgICAgICAgIDogXCJDcmVhdGUgYW4gYWNjb3VudC4gXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUF1dGhDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiID8gXCJTaWduIGluXCIgOiBcIlNpZ24gdXBcIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTU0Yzg7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsb2dhbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICM0ZTU0Yzg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhbmUge1xuICAgICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFuZSBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYW5lIC5zbG9nYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRoIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TaWduaW4uTGF5b3V0ID0gKHByb3BzKSA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgbG9hZGluZzogc3RhdGUudXNlci5sb2FkaW5nLFxuICB1c2VyRXJyb3I6IHN0YXRlLnVzZXIuZXJyb3IsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBzaWdudXA6IChkZXRhaWxzKSA9PiBkaXNwYXRjaChzaWdudXBTdGFydChkZXRhaWxzKSksXG4gIHNpZ25pbjogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ25pblN0YXJ0KGRldGFpbHMpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWduaW4pO1xuIl19 */\n/*@ sourceURL=/home/ben/code/getch/getch-frontend-2.0/pages/signup.js */"));
}

Signin.Layout = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3VzZXIvdXNlci10eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiU2lnbmluIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50IiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwiaXNNYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwidXNlciIsInB1c2giLCJ1c2VyRXJyb3IiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImhhbmRsZVNpZ251cCIsImhhbmRsZVNpZ25pbiIsInNldElucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJ2YWxpZGF0ZUVtYWlsIiwibGVuZ3RoIiwicmVwZWF0UGFzc3dvcmQiLCJkZXRhaWxzIiwic2lnbnVwIiwic2lnbmluIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVBdXRoQ2hhbmdlIiwiYnV0dG9uVGV4dCIsImxvYWRpbmciLCJkaXNwbGF5Iiwid2lkdGgiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzaWdudXBTdGFydCIsInNpZ25pblN0YXJ0IiwiY29ubmVjdCIsInNpZ2luU3VjY2VzcyIsInNpZ25lZEluIiwidHlwZSIsIlVzZXJBY3Rpb25UeXBlcyIsIlNJR05fSU5fU1VDQ0VTUyIsInBheWxvYWQiLCJ1c2VyQ3JlZGVudGlhbHMiLCJTSUdOX0lOX1NUQVJUIiwiU0lHTl9VUF9TVEFSVCIsInNpZ251cFN1Y2Nlc3MiLCJzdGF0dXMiLCJTSUdOX1VQX1NVQ0NFU1MiLCJzaWdudXBGYWlsdXJlIiwiU0lHTl9VUF9GQUlMVVJFIiwiYWRkaW5nQ3VycmVudFVzZXIiLCJ1c2VyRGF0YSIsIkFERElOR19DVVJSRU5UX1VTRVIiLCJzZXRDdXJyZW50VXNlciIsIlNFVF9DVVJSRU5UX1VTRVIiLCJzaWdpbkZhaWx1cmUiLCJTSUdOX0lOX0ZBSUxVUkUiLCJpc0xvYWRpbmciLCJsb2FkaW5nU3RhdGUiLCJMT0FESU5HIiwiYXV0aEZhY2Vib29rIiwiZGF0YSIsIkFVVEhfRkFDRUJPT0siLCJmYWNlYm9va0F1dGhTdWNjZXNzIiwidG9rZW4iLCJBVVRIX0ZCX1NVQ0NFU1MiLCJmYkF1dGhGYWlsdXJlIiwiQVVUSF9GQl9GQUlMVVJFIiwidXNlckxvZ291dCIsIkxPR19PVVQiLCJ1c2VyTG9nb3V0U3VjY2VzcyIsIkxPR19PVVRfU1VDQ0VTUyIsInVzZXJMb2dvdXRGYWlsdXJlIiwiTE9HX09VVF9GQUlMVVJFIiwidmVyaWZ5UGF5bWVudCIsIlZFUklGWV9QQVlNRU5UIiwicGF5bWVudFN1Y2Nlc3NmdWwiLCJwbGFuIiwiUEFZTUVOVF9TVUNDRVNTRlVMIiwicGF5bWVudEZhaWx1cmUiLCJQQVlNRU5UX0ZBSUxFRCIsIkFVVEhfRkJfU1RBUlQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDckIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsUUFEd0I7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsWUFBUSxFQUFFLEVBSHVCO0FBSWpDQyxTQUFLLEVBQUU7QUFDTEYs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Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2lnbnVwLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IHNpZ251cFN0YXJ0LCBzaWduaW5TdGFydCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBTaWduaW4ocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBlcnJvcjoge1xuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIGlzTWF0Y2g6IG51bGwsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Jhc2UnLCBwcm9jZXNzLmVudi5CQVNFX1VSTClcbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbcHJvcHMudXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXJFcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvci4gJHtwcm9wcy51c2VyRXJyb3IubWVzc2FnZX1gLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyRXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50ID09PSBcInNpZ251cFwiKSB7XG4gICAgICBpZiAoIXN0YXRlLmVycm9yLmVtYWlsICYmICFzdGF0ZS5lcnJvci5wYXNzd29yZCAmJiBzdGF0ZS5lcnJvci5pc01hdGNoKSB7XG4gICAgICAgIGhhbmRsZVNpZ251cCh7IGVtYWlsOiBzdGF0ZS5lbWFpbCwgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJzaWduaW5cIikge1xuICAgICAgaWYgKCFzdGF0ZS5lcnJvci5lbWFpbCAmJiAhc3RhdGUuZXJyb3IucGFzc3dvcmQpIHtcbiAgICAgICAgaGFuZGxlU2lnbmluKHsgZW1haWw6IHN0YXRlLmVtYWlsLCBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGUuZXJyb3JdKTtcblxuICBjb25zdCBzZXRJbnB1dCA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoc3RhdGUuZW1haWwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhzaHNoXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBlbWFpbDogXCJBZGQgYSBjb3JyZWN0IGVtYWlsXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgcGFzc1wiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA3IGNoYXJhY3RlcnNcIixcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ251cFwiKSB7XG4gICAgICBjb25zdCBpc01hdGNoID0gc3RhdGUucGFzc3dvcmQgPT09IHN0YXRlLnJlcGVhdFBhc3N3b3JkO1xuICAgICAgY29uc29sZS5sb2coXCJtYXRjaFwiLCBpc01hdGNoKTtcblxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBpc01hdGNoOiBpc01hdGNoLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbmluXCIpIHtcbiAgICAvLyAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgLy8gICAgIC4uLnByZXZTdGF0ZSxcbiAgICAvLyAgICAgZXJyb3I6IHtcbiAgICAvLyAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgLy8gICAgICAgc2lnbmluRXJyb3I6IG51bGxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0pKTtcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWdudXAoZGV0YWlscyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbmluID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWduaW4oZGV0YWlscyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUF1dGhDaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWdudXBcIikge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZVwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgY3VycmVudDogXCJzaWduaW5cIixcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWduaW5cIikge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZVwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV0dG9uVGV4dCA9ICgpID0+IHtcbiAgICBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjZmZmXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIHJldHVybiBcIlNpZ24gdXBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiU2lnbiBpblwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB7IGN1cnJlbnQgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL25ld0xvZ29XaGl0ZS5zdmdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsb2dhblwiPkZpbmQgaGlkZGVuIEZhY2Vib29rIGludGVyZXN0czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgPGgzPntjdXJyZW50ID09IFwic2lnbnVwXCIgPyBcIlNpZ24gdXBcIiA6IFwiU2lnbiBpblwifTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdGF0ZS5lcnJvci5lbWFpbCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdGF0ZS5lcnJvci5lbWFpbCA/IHN0YXRlLmVycm9yLmVtYWlsIDogXCJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN0YXRlLmVycm9yLnBhc3N3b3JkID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlLmVycm9yLnBhc3N3b3JkID8gc3RhdGUuZXJyb3IucGFzc3dvcmQgOiBcIlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGUuZXJyb3IuaXNNYXRjaCA9PT0gZmFsc2UgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBlYXRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtidXR0b25UZXh0KCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGRpdiBpZD1cInN1Yi1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cD5CeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG8gb3VyIHRlcm1zIGFuZCBjb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiXG4gICAgICAgICAgICAgICAgPyBcIkhhdmUgYW4gYWNjb3VudCBhbHJlYWR5PyBcIlxuICAgICAgICAgICAgICAgIDogXCJDcmVhdGUgYW4gYWNjb3VudC4gXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUF1dGhDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiID8gXCJTaWduIGluXCIgOiBcIlNpZ24gdXBcIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTU0Yzg7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsb2dhbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICM0ZTU0Yzg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhbmUge1xuICAgICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFuZSBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYW5lIC5zbG9nYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRoIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TaWduaW4uTGF5b3V0ID0gKHByb3BzKSA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgbG9hZGluZzogc3RhdGUudXNlci5sb2FkaW5nLFxuICB1c2VyRXJyb3I6IHN0YXRlLnVzZXIuZXJyb3IsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBzaWdudXA6IChkZXRhaWxzKSA9PiBkaXNwYXRjaChzaWdudXBTdGFydChkZXRhaWxzKSksXG4gIHNpZ25pbjogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ25pblN0YXJ0KGRldGFpbHMpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWduaW4pO1xuIiwiaW1wb3J0IFVzZXJBY3Rpb25UeXBlcyBmcm9tIFwiLi91c2VyLXR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzaWdpblN1Y2Nlc3MgPSAoc2lnbmVkSW4pID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TSUdOX0lOX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHNpZ25lZEluLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduaW5TdGFydCA9ICh1c2VyQ3JlZGVudGlhbHMpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TSUdOX0lOX1NUQVJULFxuICBwYXlsb2FkOiB1c2VyQ3JlZGVudGlhbHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ251cFN0YXJ0ID0gKHVzZXJDcmVkZW50aWFscykgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNJR05fVVBfU1RBUlQsXG4gIHBheWxvYWQ6IHVzZXJDcmVkZW50aWFscyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbnVwU3VjY2VzcyA9IChzdGF0dXMpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TSUdOX1VQX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbnVwRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLlNJR05fVVBfRkFJTFVSRSxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZGluZ0N1cnJlbnRVc2VyID0gKHVzZXJEYXRhKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuQURESU5HX0NVUlJFTlRfVVNFUixcbiAgcGF5bG9hZDogdXNlckRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gKHVzZXIpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TRVRfQ1VSUkVOVF9VU0VSLFxuICBwYXlsb2FkOiB1c2VyLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWdpbkZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5TSUdOX0lOX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IGVycm9yLFxufSk7XG5cbmV4cG9ydCBjb25zdCBpc0xvYWRpbmcgPSAobG9hZGluZ1N0YXRlKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuTE9BRElORyxcbiAgcGF5bG9hZDogbG9hZGluZ1N0YXRlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhdXRoRmFjZWJvb2sgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkFVVEhfRkFDRUJPT0ssXG4gIHBheWxvYWQ6IGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZhY2Vib29rQXV0aFN1Y2Nlc3MgPSAodG9rZW4pID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5BVVRIX0ZCX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHRva2VuLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmYkF1dGhGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuQVVUSF9GQl9GQUlMVVJFLFxuICBwYXlsb2FkOiBlcnJvcixcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICh0b2tlbikgPT4gKHtcbiAgdHlwZTogVXNlckFjdGlvblR5cGVzLkxPR19PVVQsXG4gIHBheWxvYWQ6IHRva2VuLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0U3VjY2VzcyA9ICgpID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5MT0dfT1VUX1NVQ0NFU1MsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXRGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuTE9HX09VVF9GQUlMVVJFLFxuICBwYXlsb2FkOiBlcnJvcixcbn0pO1xuXG5leHBvcnQgY29uc3QgdmVyaWZ5UGF5bWVudCA9IChkZXRhaWxzKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuVkVSSUZZX1BBWU1FTlQsXG4gIHBheWxvYWQ6IGRldGFpbHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBheW1lbnRTdWNjZXNzZnVsID0gKHBsYW4pID0+ICh7XG4gIHR5cGU6IFVzZXJBY3Rpb25UeXBlcy5QQVlNRU5UX1NVQ0NFU1NGVUwsXG4gIHBheWxvYWQ6IHBsYW4sXG59KTtcblxuZXhwb3J0IGNvbnN0IHBheW1lbnRGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBVc2VyQWN0aW9uVHlwZXMuUEFZTUVOVF9GQUlMRUQsXG4gIHBheWxvYWQ6IGVycm9yLFxufSk7XG4iLCJjb25zdCBVc2VyQWN0aW9uVHlwZXMgPSB7XG4gIFNFVF9DVVJSRU5UX1VTRVI6IFwiU0VUX0NVUlJFTlRfVVNFUlwiLFxuICBTSUdOX0lOX1NUQVJUOiBcIlNJR05fSU5fU1RBUlRcIixcbiAgU0lHTl9JTl9TVUNDRVNTOiBcIlNJR05fSU5fU1VDQ0VTU1wiLFxuICBTSUdOX0lOX0ZBSUxVUkU6IFwiU0lHTl9JTl9GQUlMVVJFXCIsXG4gIEFVVEhfRkJfU1RBUlQ6IFwiQVVUSF9GQl9TVEFSVFwiLFxuICBBVVRIX0ZCX1NVQ0NFU1M6IFwiQVVUSF9GQl9TVUNDRVNTXCIsXG4gIEFVVEhfRkJfRkFJTFVSRTogXCJBVVRIX0ZCX0ZBSUxVUkVcIixcbiAgQURESU5HX0NVUlJFTlRfVVNFUjogXCJBRERJTkdfQ1VSUkVOVF9VU0VSXCIsXG4gIExPQURJTkc6IFwiTE9BRElOR1wiLFxuICBBVVRIX0ZBQ0VCT09LOiBcIkFVVEhfRkFDRUJPT0tcIixcbiAgU0lHTl9VUF9TVEFSVDogXCJTSUdOX1VQX1NUQVJUXCIsXG4gIFNJR05fVVBfU1VDQ0VTUzogXCJTSUdOX1VQX1NVQ0NFU1NcIixcbiAgU0lHTl9VUF9GQUlMVVJFOiBcIlNJR05fVVBfRkFJTFVSRVwiLFxuICBMT0dfT1VUOiBcIkxPR19PVVRcIixcbiAgTE9HX09VVF9TVUNDRVNTOiBcIkxPR19PVVRfU1VDQ0VTU1wiLFxuICBMT0dfT1VUX0ZBSUxVUkU6IFwiTE9HX09VVF9GQUlMVVJFXCIsXG4gIFZFUklGWV9QQVlNRU5UOiBcIlZFUklGWV9QQVlNRU5UXCIsXG4gIFBBWU1FTlRfU1VDQ0VTU0ZVTDogXCJQQVlNRU5UX1NVQ0NFU1NGVUxcIixcbiAgUEFZTUVOVF9GQUlMRUQ6IFwiUEFZTUVOVF9GQUlMRURcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBY3Rpb25UeXBlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=