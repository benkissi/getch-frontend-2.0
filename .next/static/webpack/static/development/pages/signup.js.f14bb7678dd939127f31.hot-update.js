webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");






var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js",
    _this2 = undefined;



var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Signin(props) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    current: "signup",
    email: "",
    password: "",
    error: {
      email: null,
      password: null,
      isMatch: null
    }
  }),
      state = _useState[0],
      setState = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (props.user) {
      router.push("/");
    }
  }, [props.user]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (props.userError) {
      react_toastify__WEBPACK_IMPORTED_MODULE_10__["toast"].error("There was an error. ".concat(props.userError.message), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [props.userError]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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

  var setInput = function setInput(event) {
    console.log(event.target.name);
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setState(function (prevState) {
      return _objectSpread({}, prevState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));
    });
  };

  var handleSubmit = function handleSubmit() {
    if (!validateEmail(state.email)) {
      console.log("hshsh");
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          error: _objectSpread({}, prevState.error, {
            email: "Add a correct email"
          })
        });
      });
    } else {
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          error: _objectSpread({}, prevState.error, {
            email: null
          })
        });
      });
    }

    if (state.password.length < 8) {
      console.log("wrong pass");
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          error: _objectSpread({}, prevState.error, {
            password: "Password must be longer than 7 characters"
          })
        });
      });
    } else {
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          error: _objectSpread({}, prevState.error, {
            password: null
          })
        });
      });
    }

    if (state.current == "signup") {
      var isMatch = state.password === state.repeatPassword;
      console.log("match", isMatch);
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          error: _objectSpread({}, prevState.error, {
            isMatch: isMatch
          })
        });
      });
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

  var handleSignup = function handleSignup(details) {
    props.signup(details);
  };

  var handleSignin = function handleSignin(details) {
    props.signin(details);
  };

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  var handleAuthChange = function handleAuthChange() {
    if (state.current == "signup") {
      console.log("auth change");
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          current: "signin"
        });
      });
    }

    if (state.current == "signin") {
      console.log("auth change");
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          current: "signup"
        });
      });
    }
  };

  var buttonText = function buttonText() {
    if (props.loading) {
      return __jsx("div", {
        className: "loader",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }
      }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "Bars",
        color: "#fff",
        height: 20,
        width: 50,
        __self: _this,
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

  var current = state.current;
  return __jsx("div", {
    id: "wrapper",
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2461605444" + " " + "pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2461605444" + " " + "slogan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, "Find hidden Facebook interests")), __jsx("div", {
    className: "jsx-2461605444" + " " + "auth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2461605444" + " " + "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-2461605444" + " " + "input",
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
    className: "jsx-2461605444" + " " + "error",
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
    className: "jsx-2461605444" + " " + "input",
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
    className: "jsx-2461605444" + " " + "error",
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
    className: "jsx-2461605444" + " " + "input",
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
    className: "jsx-2461605444" + " " + "error",
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
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, current === "signup" ? "Have an account already? " : "Create an account. ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-2461605444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, current === "signup" ? "Sign in" : "Sign up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2461605444",
    __self: this
  }, "#wrapper.jsx-2461605444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}.pane.jsx-2461605444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}.auth.jsx-2461605444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}.details.jsx-2461605444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}.input.jsx-2461605444{width:100%;margin:10px 0 10px 0;}.card.jsx-2461605444{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}.slogan.jsx-2461605444{color:white;font-size:18px;}#sub-actions.jsx-2461605444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}#sub-actions.jsx-2461605444 p.jsx-2461605444{margin:0;margin-bottom:5px;}#sub-actions.jsx-2461605444 span.jsx-2461605444{color:#4e54c8;cursor:pointer;font-weight:bold;}.error.jsx-2461605444{color:red;}@media screen and (max-width:480px){#wrapper.jsx-2461605444{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:auto;}.pane.jsx-2461605444{-webkit-flex:0;-ms-flex:0;flex:0;padding:20px 0;}.pane.jsx-2461605444 img.jsx-2461605444{width:100px;}.pane.jsx-2461605444 .slogan.jsx-2461605444{font-size:12px;}.auth.jsx-2461605444{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.details.jsx-2461605444{width:90%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVBrQixBQUd3QixBQU1BLEFBU0EsQUFRQSxBQVFGLEFBS0MsQUFTQSxBQUtDLEFBUUosQUFLSyxBQU1KLEFBS2MsQUFLZixBQUtLLEFBSUcsQUFJUSxBQUtiLFNBdENNLENBV3BCLEFBNEJFLENBbEVxQixDQUtSLEFBU0UsQUF1Q2YsRUFyQmUsQ0F5QmYsWUExQ0YsQUFhQSxFQUttQixHQWhDbkIsQ0ErQ21CLGFBZG5CLEVBZUUsMEJBaEZXLEFBTVcsQUFTQSxBQVFBLEFBMkJBLElBd0JSLE9BekVELENBb0NLLElBc0NsQixRQXpFRixDQTBGdUIsS0F0RFgsVUFDYSx1QkFDVixhQUNmLEVBbEN5QixBQVNBLEFBUUEsQUEyQkEsd0NBMEN2QiwyREFyRm1CLEFBU0EsQUFRQSxBQTJCRCxrQkFDRixnQkFDbEIsMkRBN0MyQixBQVNsQixBQVFHLFVBQ1osZUFqQlMsUUFTVCx5QkFSQSIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvcGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IHNpZ251cFN0YXJ0LCBzaWduaW5TdGFydCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBTaWduaW4ocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBlcnJvcjoge1xuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIGlzTWF0Y2g6IG51bGwsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMudXNlcikge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnVzZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VyRXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IuICR7cHJvcHMudXNlckVycm9yLm1lc3NhZ2V9YCwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMudXNlckVycm9yXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudCA9PT0gXCJzaWdudXBcIikge1xuICAgICAgaWYgKCFzdGF0ZS5lcnJvci5lbWFpbCAmJiAhc3RhdGUuZXJyb3IucGFzc3dvcmQgJiYgc3RhdGUuZXJyb3IuaXNNYXRjaCkge1xuICAgICAgICBoYW5kbGVTaWdudXAoeyBlbWFpbDogc3RhdGUuZW1haWwsIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZCB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFwic2lnbmluXCIpIHtcbiAgICAgIGlmICghc3RhdGUuZXJyb3IuZW1haWwgJiYgIXN0YXRlLmVycm9yLnBhc3N3b3JkKSB7XG4gICAgICAgIGhhbmRsZVNpZ25pbih7IGVtYWlsOiBzdGF0ZS5lbWFpbCwgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3N0YXRlLmVycm9yXSk7XG5cbiAgY29uc3Qgc2V0SW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKCF2YWxpZGF0ZUVtYWlsKHN0YXRlLmVtYWlsKSkge1xuICAgICAgY29uc29sZS5sb2coXCJoc2hzaFwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgZW1haWw6IFwiQWRkIGEgY29ycmVjdCBlbWFpbFwiLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIndyb25nIHBhc3NcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIHBhc3N3b3JkOiBcIlBhc3N3b3JkIG11c3QgYmUgbG9uZ2VyIHRoYW4gNyBjaGFyYWN0ZXJzXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWdudXBcIikge1xuICAgICAgY29uc3QgaXNNYXRjaCA9IHN0YXRlLnBhc3N3b3JkID09PSBzdGF0ZS5yZXBlYXRQYXNzd29yZDtcbiAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hcIiwgaXNNYXRjaCk7XG5cbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgaXNNYXRjaDogaXNNYXRjaCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ25pblwiKSB7XG4gICAgLy8gICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgIC8vICAgICAuLi5wcmV2U3RhdGUsXG4gICAgLy8gICAgIGVycm9yOiB7XG4gICAgLy8gICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgIC8vICAgICAgIHNpZ25pbkVycm9yOiBudWxsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KSk7XG4gICAgLy8gfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ251cCA9IChkZXRhaWxzKSA9PiB7XG4gICAgcHJvcHMuc2lnbnVwKGRldGFpbHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25pbiA9IChkZXRhaWxzKSA9PiB7XG4gICAgcHJvcHMuc2lnbmluKGRldGFpbHMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBdXRoQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXV0aCBjaGFuZ2VcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IFwic2lnbmluXCIsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbmluXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXV0aCBjaGFuZ2VcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IFwic2lnbnVwXCIsXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1dHRvblRleHQgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiQmFyc1wiIGNvbG9yPVwiI2ZmZlwiIGhlaWdodD17MjB9IHdpZHRoPXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ251cFwiKSB7XG4gICAgICByZXR1cm4gXCJTaWduIHVwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlNpZ24gaW5cIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgeyBjdXJyZW50IH0gPSBzdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9uZXdMb2dvV2hpdGUuc3ZnXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbG9nYW5cIj5GaW5kIGhpZGRlbiBGYWNlYm9vayBpbnRlcmVzdHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMz57Y3VycmVudCA9PSBcInNpZ251cFwiID8gXCJTaWduIHVwXCIgOiBcIlNpZ24gaW5cIn08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3RhdGUuZXJyb3IuZW1haWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IuZW1haWwgPyBzdGF0ZS5lcnJvci5lbWFpbCA6IFwiXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdGF0ZS5lcnJvci5wYXNzd29yZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdGF0ZS5lcnJvci5wYXNzd29yZCA/IHN0YXRlLmVycm9yLnBhc3N3b3JkIDogXCJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlLmVycm9yLmlzTWF0Y2ggPT09IGZhbHNlID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXBlYXQgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dCgpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxkaXYgaWQ9XCJzdWItYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHA+Qnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRvIG91ciB0ZXJtcyBhbmQgY29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIlxuICAgICAgICAgICAgICAgID8gXCJIYXZlIGFuIGFjY291bnQgYWxyZWFkeT8gXCJcbiAgICAgICAgICAgICAgICA6IFwiQ3JlYXRlIGFuIGFjY291bnQuIFwifVxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVBdXRoQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJzaWdudXBcIiA/IFwiU2lnbiBpblwiIDogXCJTaWduIHVwXCJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1NGM4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbG9nYW4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNGU1NGM4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFuZSB7XG4gICAgICAgICAgICBmbGV4OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYW5lIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhbmUgLnNsb2dhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF1dGgge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNpZ25pbi5MYXlvdXQgPSAocHJvcHMpID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxuICBsb2FkaW5nOiBzdGF0ZS51c2VyLmxvYWRpbmcsXG4gIHVzZXJFcnJvcjogc3RhdGUudXNlci5lcnJvcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNpZ251cDogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ251cFN0YXJ0KGRldGFpbHMpKSxcbiAgc2lnbmluOiAoZGV0YWlscykgPT4gZGlzcGF0Y2goc2lnbmluU3RhcnQoZGV0YWlscykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25pbik7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js */"));
}

Signin.Layout = function (props) {
  return __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 28
    }
  }, props.children);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    loading: state.user.loading,
    userError: state.user.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(details) {
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["signupStart"])(details));
    },
    signin: function signin(details) {
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["signinStart"])(details));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Signin));

/***/ })

})
//# sourceMappingURL=signup.js.f14bb7678dd939127f31.hot-update.js.map