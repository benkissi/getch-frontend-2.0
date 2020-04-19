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

/***/ "/921":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (UserActionTypes);

/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cUip":
/***/ (function(module, exports) {



/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hSKJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return siginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return signinStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return signupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return signupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return signupFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return siginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return facebookAuthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fbAuthFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return userLogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return userLogoutFailure; });
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/921");

const siginSuccess = signedIn => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_IN_SUCCESS,
  payload: signedIn
});
const signinStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_IN_START,
  payload: userCredentials
});
const signupStart = userCredentials => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_UP_START,
  payload: userCredentials
});
const signupSuccess = status => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_UP_SUCCESS,
  payload: status
});
const signupFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_UP_FAILURE,
  payload: error
});
const addingCurrentUser = userData => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADDING_CURRENT_USER,
  payload: userData
});
const setCurrentUser = user => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_CURRENT_USER,
  payload: user
});
const siginFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SIGN_IN_FAILURE,
  payload: error
});
const isLoading = loadingState => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOADING,
  payload: loadingState
});
const authFacebook = data => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AUTH_FACEBOOK,
  payload: data
});
const facebookAuthSuccess = token => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AUTH_FB_SUCCESS,
  payload: token
});
const fbAuthFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].AUTH_FB_FAILURE,
  payload: error
});
const userLogout = token => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_OUT,
  payload: token
});
const userLogoutSuccess = () => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_OUT_SUCCESS
});
const userLogoutFailure = error => ({
  type: _user_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_OUT_FAILURE,
  payload: error
});

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("hSKJ");






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
        className: "loader"
      }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "Bars",
        color: "#fff",
        height: 20,
        width: 50
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
    className: "jsx-4146696111"
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true
  }), __jsx("div", {
    className: "jsx-4146696111" + " " + "pane"
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-4146696111"
  }), __jsx("div", {
    className: "jsx-4146696111" + " " + "slogan"
  }, "Find hidden Facebook interests")), __jsx("div", {
    className: "jsx-4146696111" + " " + "auth"
  }, __jsx("div", {
    className: "jsx-4146696111" + " " + "details"
  }, __jsx("h3", {
    className: "jsx-4146696111"
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-4146696111" + " " + "input"
  }, __jsx("p", {
    style: {
      display: state.error.email ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error"
  }, state.error.email ? state.error.email : ""), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "email",
    type: "email",
    placeholder: "email",
    onChange: setInput
  })), __jsx("div", {
    className: "jsx-4146696111" + " " + "input"
  }, __jsx("p", {
    style: {
      display: state.error.password ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error"
  }, state.error.password ? state.error.password : ""), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "password",
    type: "password",
    placeholder: "password",
    onChange: setInput
  })), current === "signup" ? __jsx("div", {
    className: "jsx-4146696111" + " " + "input"
  }, __jsx("p", {
    style: {
      display: state.error.isMatch === false ? "block" : "none"
    },
    className: "jsx-4146696111" + " " + "error"
  }, "Passwords do not match"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "repeatPassword",
    type: "password",
    placeholder: "repeat password",
    onChange: setInput
  })) : "", __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    style: {
      width: "100%"
    },
    onClick: handleSubmit
  }, buttonText()), __jsx("div", {
    id: "sub-actions",
    className: "jsx-4146696111"
  }, __jsx("p", {
    className: "jsx-4146696111"
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-4146696111"
  }, current === "signup" ? "Have an account already? " : "Create an account. ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-4146696111"
  }, current === "signup" ? "Sign in" : "Sign up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "4146696111"
  }, ["#wrapper.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}", ".pane.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}", ".auth.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}", ".details.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}", ".input.jsx-4146696111{width:100%;margin:10px 0 10px 0;}", ".card.jsx-4146696111{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}", ".slogan.jsx-4146696111{color:white;font-size:18px;}", "#sub-actions.jsx-4146696111{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}", "#sub-actions.jsx-4146696111 p.jsx-4146696111{margin:0;margin-bottom:5px;}", "#sub-actions.jsx-4146696111 span.jsx-4146696111{color:#4e54c8;cursor:pointer;font-weight:bold;}", ".error.jsx-4146696111{color:red;}"]));
}

Signin.Layout = props => __jsx("div", null, props.children);

const mapStateToProps = state => ({
  user: state.user.currentUser,
  loading: state.user.loading,
  userError: state.user.error
});

const mapDispatchToProps = dispatch => ({
  signup: details => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__[/* signupStart */ "k"])(details)),
  signin: details => dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_10__[/* signinStart */ "i"])(details))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Signin));

/***/ })

/******/ });