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
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1162144675" + " " + "pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-1162144675" + " " + "slogan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, "Find hidden Facebook interests")), __jsx("div", {
    className: "jsx-1162144675" + " " + "auth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1162144675" + " " + "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-1162144675" + " " + "input",
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
    className: "jsx-1162144675" + " " + "error",
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
    className: "jsx-1162144675" + " " + "input",
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
    className: "jsx-1162144675" + " " + "error",
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
    className: "jsx-1162144675" + " " + "input",
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
    className: "jsx-1162144675" + " " + "error",
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
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, current === "signup" ? "Have an account already? " : "Create an account. ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-1162144675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, current === "signup" ? "Sign in" : "Sign up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1162144675",
    __self: this
  }, "#wrapper.jsx-1162144675{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}.pane.jsx-1162144675{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}.auth.jsx-1162144675{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}.details.jsx-1162144675{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}.input.jsx-1162144675{width:100%;margin:10px 0 10px 0;}.card.jsx-1162144675{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}.slogan.jsx-1162144675{color:white;font-size:18px;}#sub-actions.jsx-1162144675{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}#sub-actions.jsx-1162144675 p.jsx-1162144675{margin:0;margin-bottom:5px;}#sub-actions.jsx-1162144675 span.jsx-1162144675{color:#4e54c8;cursor:pointer;font-weight:bold;}.error.jsx-1162144675{color:red;}@media screen and (max-width:480px){#wrapper.jsx-1162144675{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.pane.jsx-1162144675{-webkit-flex:0;-ms-flex:0;flex:0;padding:20px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVBrQixBQUd3QixBQU1BLEFBU0EsQUFRQSxBQVFGLEFBS0MsQUFTQSxBQUtDLEFBUUosQUFLSyxBQU1KLEFBS2MsQUFJZixTQW5CUyxDQVdwQixDQXRDdUIsQ0FLUixBQVNFLEVBa0JBLGFBakJqQixBQWFBLEVBS21CLEdBaENuQixDQThDc0IsYUFidEIsS0FjRSx1QkEvRVcsQUFNVyxBQVNBLEFBUUEsQUEyQkEsSUF3QnRCLE9BekVhLENBb0NLLFlBbkNwQixNQW9DWSxVQUNhLHVCQUNWLGFBQ2YsRUFsQ3lCLEFBU0EsQUFRQSxBQTJCQSxtR0EzQ0osQUFTQSxBQVFBLEFBMkJELGtCQUNGLGdCQUNsQiwyREE3QzJCLEFBU2xCLEFBUUcsVUFDWixlQWpCUyxRQVNULHlCQVJBIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgc2lnbnVwU3RhcnQsIHNpZ25pblN0YXJ0IH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIFNpZ25pbihwcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBjdXJyZW50OiBcInNpZ251cFwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGVycm9yOiB7XG4gICAgICBlbWFpbDogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgaXNNYXRjaDogbnVsbCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbcHJvcHMudXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXJFcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvci4gJHtwcm9wcy51c2VyRXJyb3IubWVzc2FnZX1gLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyRXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50ID09PSBcInNpZ251cFwiKSB7XG4gICAgICBpZiAoIXN0YXRlLmVycm9yLmVtYWlsICYmICFzdGF0ZS5lcnJvci5wYXNzd29yZCAmJiBzdGF0ZS5lcnJvci5pc01hdGNoKSB7XG4gICAgICAgIGhhbmRsZVNpZ251cCh7IGVtYWlsOiBzdGF0ZS5lbWFpbCwgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJzaWduaW5cIikge1xuICAgICAgaWYgKCFzdGF0ZS5lcnJvci5lbWFpbCAmJiAhc3RhdGUuZXJyb3IucGFzc3dvcmQpIHtcbiAgICAgICAgaGFuZGxlU2lnbmluKHsgZW1haWw6IHN0YXRlLmVtYWlsLCBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGUuZXJyb3JdKTtcblxuICBjb25zdCBzZXRJbnB1dCA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoc3RhdGUuZW1haWwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhzaHNoXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBlbWFpbDogXCJBZGQgYSBjb3JyZWN0IGVtYWlsXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgcGFzc1wiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA3IGNoYXJhY3RlcnNcIixcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ251cFwiKSB7XG4gICAgICBjb25zdCBpc01hdGNoID0gc3RhdGUucGFzc3dvcmQgPT09IHN0YXRlLnJlcGVhdFBhc3N3b3JkO1xuICAgICAgY29uc29sZS5sb2coXCJtYXRjaFwiLCBpc01hdGNoKTtcblxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBpc01hdGNoOiBpc01hdGNoLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbmluXCIpIHtcbiAgICAvLyAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgLy8gICAgIC4uLnByZXZTdGF0ZSxcbiAgICAvLyAgICAgZXJyb3I6IHtcbiAgICAvLyAgICAgICAuLi5wcmV2U3RhdGUuZXJyb3IsXG4gICAgLy8gICAgICAgc2lnbmluRXJyb3I6IG51bGxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0pKTtcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWdudXAoZGV0YWlscyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbmluID0gKGRldGFpbHMpID0+IHtcbiAgICBwcm9wcy5zaWduaW4oZGV0YWlscyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUF1dGhDaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWdudXBcIikge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZVwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgY3VycmVudDogXCJzaWduaW5cIixcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWduaW5cIikge1xuICAgICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZVwiKTtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgY3VycmVudDogXCJzaWdudXBcIixcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV0dG9uVGV4dCA9ICgpID0+IHtcbiAgICBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjZmZmXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIHJldHVybiBcIlNpZ24gdXBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiU2lnbiBpblwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB7IGN1cnJlbnQgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL25ld0xvZ29XaGl0ZS5zdmdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsb2dhblwiPkZpbmQgaGlkZGVuIEZhY2Vib29rIGludGVyZXN0czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgPGgzPntjdXJyZW50ID09IFwic2lnbnVwXCIgPyBcIlNpZ24gdXBcIiA6IFwiU2lnbiBpblwifTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdGF0ZS5lcnJvci5lbWFpbCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdGF0ZS5lcnJvci5lbWFpbCA/IHN0YXRlLmVycm9yLmVtYWlsIDogXCJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN0YXRlLmVycm9yLnBhc3N3b3JkID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlLmVycm9yLnBhc3N3b3JkID8gc3RhdGUuZXJyb3IucGFzc3dvcmQgOiBcIlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGUuZXJyb3IuaXNNYXRjaCA9PT0gZmFsc2UgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBlYXRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtidXR0b25UZXh0KCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGRpdiBpZD1cInN1Yi1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cD5CeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG8gb3VyIHRlcm1zIGFuZCBjb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiXG4gICAgICAgICAgICAgICAgPyBcIkhhdmUgYW4gYWNjb3VudCBhbHJlYWR5PyBcIlxuICAgICAgICAgICAgICAgIDogXCJDcmVhdGUgYW4gYWNjb3VudC4gXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUF1dGhDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcInNpZ251cFwiID8gXCJTaWduIGluXCIgOiBcIlNpZ24gdXBcIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTU0Yzg7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRoIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsb2dhbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICM0ZTU0Yzg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYW5lIHtcbiAgICAgICAgICAgIGZsZXg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNpZ25pbi5MYXlvdXQgPSAocHJvcHMpID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxuICBsb2FkaW5nOiBzdGF0ZS51c2VyLmxvYWRpbmcsXG4gIHVzZXJFcnJvcjogc3RhdGUudXNlci5lcnJvcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNpZ251cDogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ251cFN0YXJ0KGRldGFpbHMpKSxcbiAgc2lnbmluOiAoZGV0YWlscykgPT4gZGlzcGF0Y2goc2lnbmluU3RhcnQoZGV0YWlscykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25pbik7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js */"));
}

Signin.Layout = function (props) {
  return __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
//# sourceMappingURL=signup.js.186cec0abea13288f225.hot-update.js.map