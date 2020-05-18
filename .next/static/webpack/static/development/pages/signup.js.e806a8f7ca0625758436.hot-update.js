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
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3138501440" + " " + "pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogoWhite.svg",
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3138501440" + " " + "slogan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, "Find hidden Facebook interests")), __jsx("div", {
    className: "jsx-3138501440" + " " + "auth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3138501440" + " " + "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, current == "signup" ? "Sign up" : "Sign in"), __jsx("div", {
    className: "jsx-3138501440" + " " + "input",
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
    className: "jsx-3138501440" + " " + "error",
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
    className: "jsx-3138501440" + " " + "input",
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
    className: "jsx-3138501440" + " " + "error",
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
    className: "jsx-3138501440" + " " + "input",
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
    className: "jsx-3138501440" + " " + "error",
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
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "By signing up, you agree to our terms and conditions"), __jsx("p", {
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, current === "signup" ? "Have an account already? " : "Create an account. ", __jsx("span", {
    onClick: handleAuthChange,
    className: "jsx-3138501440",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, current === "signup" ? "Sign in" : "Sign up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3138501440",
    __self: this
  }, "#wrapper.jsx-3138501440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100vh;}.pane.jsx-3138501440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4e54c8;-webkit-flex:1;-ms-flex:1;flex:1;}.auth.jsx-3138501440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:2;-ms-flex:2;flex:2;}.details.jsx-3138501440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40%;}.input.jsx-3138501440{width:100%;margin:10px 0 10px 0;}.card.jsx-3138501440{color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;width:30%;background-color:white;height:100px;}.slogan.jsx-3138501440{color:white;font-size:18px;}#sub-actions.jsx-3138501440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-top:10px;}#sub-actions.jsx-3138501440 p.jsx-3138501440{margin:0;margin-bottom:5px;}#sub-actions.jsx-3138501440 span.jsx-3138501440{color:#4e54c8;cursor:pointer;font-weight:bold;}.error.jsx-3138501440{color:red;}@media screen and (max-width:480px){#wrapper.jsx-3138501440{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.pane.jsx-3138501440{-webkit-flex:0;-ms-flex:0;flex:0;padding:20px 0;}.auth.jsx-3138501440{-webkit-box-pack:none;-webkit-justify-content:none;-ms-flex-pack:none;justify-content:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVBrQixBQUd3QixBQU1BLEFBU0EsQUFRQSxBQVFGLEFBS0MsQUFTQSxBQUtDLEFBUUosQUFLSyxBQU1KLEFBS2MsQUFJZixBQUtjLFNBeEJMLENBV3BCLENBdEN1QixDQUtSLEFBU0UsRUFrQkEsYUFqQmpCLEFBYUEsRUFLbUIsR0FoQ25CLENBOENtQixhQWJuQixFQWNFLDBCQS9FVyxBQU1XLEFBU0EsQUFRQSxBQTJCQSxJQXdCdEIsT0F6RWEsQ0FvQ0ssS0E4Q2xCLE9BakZGLE1Bb0NZLFVBQ2EsdUJBQ1YsYUFDZixFQWxDeUIsQUFTQSxBQVFBLEFBMkJBLG1HQTNDSixBQVNBLEFBUUEsQUEyQkQsa0JBQ0YsZ0JBQ2xCLDJEQTdDMkIsQUFTbEIsQUFRRyxVQUNaLGVBakJTLFFBU1QseUJBUkEiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL3BhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgeyBzaWdudXBTdGFydCwgc2lnbmluU3RhcnQgfSBmcm9tIFwiLi4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnNcIjtcblxuZnVuY3Rpb24gU2lnbmluKHByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGN1cnJlbnQ6IFwic2lnbnVwXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgZXJyb3I6IHtcbiAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICBpc01hdGNoOiBudWxsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMudXNlckVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yLiAke3Byb3BzLnVzZXJFcnJvci5tZXNzYWdlfWAsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLnVzZXJFcnJvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnQgPT09IFwic2lnbnVwXCIpIHtcbiAgICAgIGlmICghc3RhdGUuZXJyb3IuZW1haWwgJiYgIXN0YXRlLmVycm9yLnBhc3N3b3JkICYmIHN0YXRlLmVycm9yLmlzTWF0Y2gpIHtcbiAgICAgICAgaGFuZGxlU2lnbnVwKHsgZW1haWw6IHN0YXRlLmVtYWlsLCBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBcInNpZ25pblwiKSB7XG4gICAgICBpZiAoIXN0YXRlLmVycm9yLmVtYWlsICYmICFzdGF0ZS5lcnJvci5wYXNzd29yZCkge1xuICAgICAgICBoYW5kbGVTaWduaW4oeyBlbWFpbDogc3RhdGUuZW1haWwsIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0ZS5lcnJvcl0pO1xuXG4gIGNvbnN0IHNldElucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICghdmFsaWRhdGVFbWFpbChzdGF0ZS5lbWFpbCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaHNoc2hcIik7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIGVtYWlsOiBcIkFkZCBhIGNvcnJlY3QgZW1haWxcIixcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgICAgY29uc29sZS5sb2coXCJ3cm9uZyBwYXNzXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAgICAgICBwYXNzd29yZDogXCJQYXNzd29yZCBtdXN0IGJlIGxvbmdlciB0aGFuIDcgY2hhcmFjdGVyc1wiLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50ID09IFwic2lnbnVwXCIpIHtcbiAgICAgIGNvbnN0IGlzTWF0Y2ggPSBzdGF0ZS5wYXNzd29yZCA9PT0gc3RhdGUucmVwZWF0UGFzc3dvcmQ7XG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoXCIsIGlzTWF0Y2gpO1xuXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmVycm9yLFxuICAgICAgICAgIGlzTWF0Y2g6IGlzTWF0Y2gsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWduaW5cIikge1xuICAgIC8vICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAvLyAgICAgLi4ucHJldlN0YXRlLFxuICAgIC8vICAgICBlcnJvcjoge1xuICAgIC8vICAgICAgIC4uLnByZXZTdGF0ZS5lcnJvcixcbiAgICAvLyAgICAgICBzaWduaW5FcnJvcjogbnVsbFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSkpO1xuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWdudXAgPSAoZGV0YWlscykgPT4ge1xuICAgIHByb3BzLnNpZ251cChkZXRhaWxzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWduaW4gPSAoZGV0YWlscykgPT4ge1xuICAgIHByb3BzLnNpZ25pbihkZXRhaWxzKTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQXV0aENoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ251cFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImF1dGggY2hhbmdlXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBjdXJyZW50OiBcInNpZ25pblwiLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY3VycmVudCA9PSBcInNpZ25pblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImF1dGggY2hhbmdlXCIpO1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBjdXJyZW50OiBcInNpZ251cFwiLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidXR0b25UZXh0ID0gKCkgPT4ge1xuICAgIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIkJhcnNcIiBjb2xvcj1cIiNmZmZcIiBoZWlnaHQ9ezIwfSB3aWR0aD17NTB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmN1cnJlbnQgPT0gXCJzaWdudXBcIikge1xuICAgICAgcmV0dXJuIFwiU2lnbiB1cFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJTaWduIGluXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgY3VycmVudCB9ID0gc3RhdGU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbmV3TG9nb1doaXRlLnN2Z1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xvZ2FuXCI+RmluZCBoaWRkZW4gRmFjZWJvb2sgaW50ZXJlc3RzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICA8aDM+e2N1cnJlbnQgPT0gXCJzaWdudXBcIiA/IFwiU2lnbiB1cFwiIDogXCJTaWduIGluXCJ9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN0YXRlLmVycm9yLmVtYWlsID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlLmVycm9yLmVtYWlsID8gc3RhdGUuZXJyb3IuZW1haWwgOiBcIlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3RhdGUuZXJyb3IucGFzc3dvcmQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IucGFzc3dvcmQgPyBzdGF0ZS5lcnJvci5wYXNzd29yZCA6IFwiXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2N1cnJlbnQgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZS5lcnJvci5pc01hdGNoID09PSBmYWxzZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYXNzd29yZHMgZG8gbm90IG1hdGNoXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVwZWF0IHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW5wdXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2J1dHRvblRleHQoKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGlkPVwic3ViLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxwPkJ5IHNpZ25pbmcgdXAsIHlvdSBhZ3JlZSB0byBvdXIgdGVybXMgYW5kIGNvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2N1cnJlbnQgPT09IFwic2lnbnVwXCJcbiAgICAgICAgICAgICAgICA/IFwiSGF2ZSBhbiBhY2NvdW50IGFscmVhZHk/IFwiXG4gICAgICAgICAgICAgICAgOiBcIkNyZWF0ZSBhbiBhY2NvdW50LiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlQXV0aENoYW5nZX0+XG4gICAgICAgICAgICAgICAge2N1cnJlbnQgPT09IFwic2lnbnVwXCIgPyBcIlNpZ24gaW5cIiA6IFwiU2lnbiB1cFwifVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICN3cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNTRjODtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xvZ2FuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N1Yi1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3ViLWFjdGlvbnMgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdWItYWN0aW9ucyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzRlNTRjODtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICN3cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhbmUge1xuICAgICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXV0aCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNpZ25pbi5MYXlvdXQgPSAocHJvcHMpID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxuICBsb2FkaW5nOiBzdGF0ZS51c2VyLmxvYWRpbmcsXG4gIHVzZXJFcnJvcjogc3RhdGUudXNlci5lcnJvcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNpZ251cDogKGRldGFpbHMpID0+IGRpc3BhdGNoKHNpZ251cFN0YXJ0KGRldGFpbHMpKSxcbiAgc2lnbmluOiAoZGV0YWlscykgPT4gZGlzcGF0Y2goc2lnbmluU3RhcnQoZGV0YWlscykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25pbik7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/signup.js */"));
}

Signin.Layout = function (props) {
  return __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
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
//# sourceMappingURL=signup.js.e806a8f7ca0625758436.hot-update.js.map