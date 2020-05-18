webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboardLayout */ "./components/dashboardLayout.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");



var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/settings.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Settings = function Settings(props) {
  var handleLogout = function handleLogout() {
    props.logout(props.user.xToken);
  };

  return __jsx("div", {
    className: "jsx-3232173935" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3232173935" + " " + "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3232173935" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Settings")), __jsx("div", {
    id: "email",
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Email"), __jsx("div", {
    id: "value",
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.user ? props.user.email : ""))), __jsx("div", {
    className: "jsx-3232173935" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "logout",
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Logout"), __jsx("div", {
    id: "button",
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleLogout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Logout"))), __jsx("div", {
    className: "jsx-3232173935" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "plan",
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Plan"), __jsx("div", {
    id: "value",
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-3232173935",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, props.user && props.user.plan === "PL002" ? "Life-time acess" : "Trial")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3232173935",
    __self: _this
  }, ".wrapper.jsx-3232173935{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h2.jsx-3232173935{margin-bottom:50px;}#logout.jsx-3232173935{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-3232173935{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#logout.jsx-3232173935 #button.jsx-3232173935{margin-left:50%;}#plan.jsx-3232173935{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#email.jsx-3232173935{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#email.jsx-3232173935 #value.jsx-3232173935{margin-left:50%;}#plan.jsx-3232173935 #value.jsx-3232173935{margin-left:50%;}.divider.jsx-3232173935{margin-top:30px;margin-bottom:30px;width:70%;border-bottom:solid 1px #eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR3dCLEFBUU0sQUFJTixBQUtBLEFBTUcsQUFJSCxBQU1BLEFBTUcsQUFJQSxBQUlBLGdCQXZCbEIsQUFnQkEsQUFJQSxBQUlxQixHQXZDckIsZ0JBd0NZLFVBQ21CLDZCQWpEUCxBQVlYLEFBS0EsQUFVQSxBQU1BLEFBaUJiLFdBckNxQixBQUtBLEFBVUEsQUFNQSxtRUFqQ0YsaUJBQ04sU0FZYixBQUtBLEFBVUEsQUFNQSxFQWhDeUIsbUdBQ3pCIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgeyB1c2VyTG9nb3V0IH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmNvbnN0IFNldHRpbmdzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBwcm9wcy5sb2dvdXQocHJvcHMudXNlci54VG9rZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8aDI+U2V0dGluZ3M8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImVtYWlsXCI+XG4gICAgICAgICAgPHA+RW1haWw8L3A+XG4gICAgICAgICAgPGRpdiBpZD1cInZhbHVlXCI+XG4gICAgICAgICAgICA8cD57cHJvcHMudXNlciA/IHByb3BzLnVzZXIuZW1haWwgOiBcIlwifTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwibG9nb3V0XCI+XG4gICAgICAgICAgPHA+TG9nb3V0PC9wPlxuICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGxhblwiPlxuICAgICAgICAgIDxwPlBsYW48L3A+XG4gICAgICAgICAgPGRpdiBpZD1cInZhbHVlXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLnVzZXIgJiYgcHJvcHMudXNlci5wbGFuID09PSBcIlBMMDAyXCJcbiAgICAgICAgICAgICAgICA/IFwiTGlmZS10aW1lIGFjZXNzXCJcbiAgICAgICAgICAgICAgICA6IFwiVHJpYWxcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbG9nb3V0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjbG9nb3V0ICNidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAjcGxhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VtYWlsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjZW1haWwgI3ZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI3BsYW4gI3ZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWVlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZXR0aW5ncy5MYXlvdXQgPSBEYXNoYm9hcmRMYXlvdXQ7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGxvZ291dDogKHRva2VuKSA9PiBkaXNwYXRjaCh1c2VyTG9nb3V0KHRva2VuKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2V0dGluZ3MpO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/settings.js */"));
};

Settings.Layout = _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_5__["default"];

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout(token) {
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_6__["userLogout"])(token));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Settings));

/***/ })

})
//# sourceMappingURL=settings.js.587fb91ed244d4eac590.hot-update.js.map