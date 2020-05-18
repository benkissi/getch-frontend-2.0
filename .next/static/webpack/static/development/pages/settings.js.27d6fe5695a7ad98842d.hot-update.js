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
    className: "jsx-3328641424" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3328641424" + " " + "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3328641424" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Settings")), __jsx("div", {
    id: "email",
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Email"), __jsx("div", {
    id: "value",
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.user ? props.user.email : ""))), __jsx("div", {
    className: "jsx-3328641424" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "logout",
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Logout"), __jsx("div", {
    id: "button",
    className: "jsx-3328641424",
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
    className: "jsx-3328641424" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "plan",
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Plan"), __jsx("div", {
    id: "value",
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-3328641424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, props.user && props.user.plan === "PL002" ? "Life-time acess" : "Trial")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3328641424",
    __self: _this
  }, ".wrapper.jsx-3328641424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h2.jsx-3328641424{margin-bottom:50px;}#logout.jsx-3328641424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-3328641424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#logout.jsx-3328641424 #button.jsx-3328641424{margin-left:50%;}#plan.jsx-3328641424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#email.jsx-3328641424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#email.jsx-3328641424 #value.jsx-3328641424{margin-left:50%;}#plan.jsx-3328641424 #value.jsx-3328641424{margin-left:50%;}.divider.jsx-3328641424{margin-top:30px;margin-bottom:30px;width:70%;border-bottom:solid 1px #eee;}.inner.jsx-3328641424{width:100%;padding-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR3dCLEFBU00sQUFJTixBQUtBLEFBTUcsQUFJSCxBQU1BLEFBTUcsQUFJQSxBQUlBLEFBT0wsV0FDUSxLQS9CckIsQUFnQkEsQUFJQSxBQUlxQixHQXZDckIsV0ErQ0EsS0FQWSxVQUNtQiw2QkFsRFAsQUFhWCxBQUtBLEFBVUEsQUFNQSxBQWlCYixXQXJDcUIsQUFLQSxBQVVBLEFBTUEsbUVBbENGLGlCQUNOLFNBYWIsQUFLQSxBQVVBLEFBTUEsRUFqQ3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvcGFnZXMvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgdXNlckxvZ291dCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5jb25zdCBTZXR0aW5ncyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgcHJvcHMubG9nb3V0KHByb3BzLnVzZXIueFRva2VuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPGgyPlNldHRpbmdzPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgIDxwPkVtYWlsPC9wPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPHA+e3Byb3BzLnVzZXIgPyBwcm9wcy51c2VyLmVtYWlsIDogXCJcIn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImxvZ291dFwiPlxuICAgICAgICAgIDxwPkxvZ291dDwvcD5cbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBsYW5cIj5cbiAgICAgICAgICA8cD5QbGFuPC9wPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtwcm9wcy51c2VyICYmIHByb3BzLnVzZXIucGxhbiA9PT0gXCJQTDAwMlwiXG4gICAgICAgICAgICAgICAgPyBcIkxpZmUtdGltZSBhY2Vzc1wiXG4gICAgICAgICAgICAgICAgOiBcIlRyaWFsXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbG9nb3V0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjbG9nb3V0ICNidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAjcGxhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VtYWlsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjZW1haWwgI3ZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI3BsYW4gI3ZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZXR0aW5ncy5MYXlvdXQgPSBEYXNoYm9hcmRMYXlvdXQ7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGxvZ291dDogKHRva2VuKSA9PiBkaXNwYXRjaCh1c2VyTG9nb3V0KHRva2VuKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2V0dGluZ3MpO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/settings.js */"));
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
//# sourceMappingURL=settings.js.27d6fe5695a7ad98842d.hot-update.js.map