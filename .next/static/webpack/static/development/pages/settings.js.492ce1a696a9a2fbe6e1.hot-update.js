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
    className: "jsx-2381566145" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2381566145" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Settings")), __jsx("div", {
    id: "email",
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Email"), __jsx("div", {
    id: "value",
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, props.user ? props.user.email : ""))), __jsx("div", {
    className: "jsx-2381566145" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "logout",
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Logout"), __jsx("div", {
    id: "button",
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleLogout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Logout"))), __jsx("div", {
    className: "jsx-2381566145" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "plan",
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Plan"), __jsx("div", {
    id: "value",
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-2381566145",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, props.user && props.user.plan === "PL002" ? "Life-time acess" : "Trial"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2381566145",
    __self: _this
  }, ".wrapper.jsx-2381566145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;width:1000%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h2.jsx-2381566145{margin-bottom:50px;}#logout.jsx-2381566145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-2381566145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#logout.jsx-2381566145 #button.jsx-2381566145{margin-left:50%;}#plan.jsx-2381566145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#email.jsx-2381566145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#email.jsx-2381566145 #value.jsx-2381566145{margin-left:50%;}#plan.jsx-2381566145 #value.jsx-2381566145{margin-left:50%;}.divider.jsx-2381566145{margin-top:30px;margin-bottom:30px;width:60%;border-bottom:solid 1px #eee;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBR3dCLEFBUU0sQUFJTixBQUtBLEFBTUcsQUFJSCxBQU1BLEFBTUcsQUFJQSxBQUlBLGdCQXZCbEIsQUFnQkEsQUFJQSxBQUlxQixHQXZDckIsZ0JBd0NZLFVBQ21CLDZCQWpEUCxBQVlYLEFBS0EsQUFVQSxBQU1BLEFBaUJPLFdBckNDLEFBS0EsQUFVQSxBQU1BLDREQWlCckIsT0FsRG1CLGlCQUNMLFNBWWQsQUFLQSxBQVVBLEFBTUEsR0FoQ3lCLG1HQUN6QiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvcGFnZXMvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgdXNlckxvZ291dCB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuXG5jb25zdCBTZXR0aW5ncyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgcHJvcHMubG9nb3V0KHByb3BzLnVzZXIueFRva2VuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICA8aDI+U2V0dGluZ3M8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiZW1haWxcIj5cbiAgICAgICAgPHA+RW1haWw8L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJ2YWx1ZVwiPlxuICAgICAgICAgIDxwPntwcm9wcy51c2VyID8gcHJvcHMudXNlci5lbWFpbCA6IFwiXCJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwibG9nb3V0XCI+XG4gICAgICAgIDxwPkxvZ291dDwvcD5cbiAgICAgICAgPGRpdiBpZD1cImJ1dHRvblwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cInBsYW5cIj5cbiAgICAgICAgPHA+UGxhbjwvcD5cbiAgICAgICAgPGRpdiBpZD1cInZhbHVlXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7cHJvcHMudXNlciAmJiBwcm9wcy51c2VyLnBsYW4gPT09IFwiUEwwMDJcIlxuICAgICAgICAgICAgICA/IFwiTGlmZS10aW1lIGFjZXNzXCJcbiAgICAgICAgICAgICAgOiBcIlRyaWFsXCJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbG9nb3V0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjbG9nb3V0ICNidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAjcGxhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VtYWlsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjZW1haWwgI3ZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI3BsYW4gI3ZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWVlO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2V0dGluZ3MuTGF5b3V0ID0gRGFzaGJvYXJkTGF5b3V0O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBsb2dvdXQ6ICh0b2tlbikgPT4gZGlzcGF0Y2godXNlckxvZ291dCh0b2tlbikpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNldHRpbmdzKTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/settings.js */"));
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
//# sourceMappingURL=settings.js.492ce1a696a9a2fbe6e1.hot-update.js.map