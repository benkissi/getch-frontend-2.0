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
    className: "jsx-3800617614" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3800617614" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Settings")), __jsx("div", {
    id: "plan",
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Plan"), __jsx("div", {
    id: "value",
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Life-time access"))), __jsx("div", {
    className: "jsx-3800617614" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "logout",
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Logout"), __jsx("div", {
    id: "button",
    className: "jsx-3800617614",
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
    className: "jsx-3800617614" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "plan",
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Plan"), __jsx("div", {
    id: "value",
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3800617614",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Life-time access"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3800617614",
    __self: _this
  }, ".wrapper.jsx-3800617614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h2.jsx-3800617614{margin-bottom:50px;}#logout.jsx-3800617614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3800617614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#logout.jsx-3800617614 #button.jsx-3800617614{margin-left:50%;}#plan.jsx-3800617614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#plan.jsx-3800617614 #value.jsx-3800617614{margin-left:50%;}.divider.jsx-3800617614{margin-top:30px;margin-bottom:30px;width:60%;border-bottom:solid 1px #eee;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR3dCLEFBUU0sQUFJTixBQU1BLEFBT0csQUFJSCxBQU9HLEFBSUEsZ0JBZGxCLEFBV0EsQUFJcUIsR0FoQ3JCLGdCQWlDWSxVQUNtQiw2QkExQ1AsQUFZWCxBQU1BLEFBV0EsQUFjTyxXQTlCQyxBQU1BLEFBV0EsNERBY3JCLE9BM0NtQixpQkFDTixTQVlZLEFBTUEsQUFXQSxFQTVCQSxpR0FZekIsQUFNQSxBQVdBLEVBNUJBIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgeyB1c2VyTG9nb3V0IH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmNvbnN0IFNldHRpbmdzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBwcm9wcy5sb2dvdXQocHJvcHMudXNlci54VG9rZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgIDxoMj5TZXR0aW5nczwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJwbGFuXCI+XG4gICAgICAgIDxwPlBsYW48L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJ2YWx1ZVwiPlxuICAgICAgICAgIDxwPkxpZmUtdGltZSBhY2Nlc3M8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJsb2dvdXRcIj5cbiAgICAgICAgPHA+TG9nb3V0PC9wPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwicGxhblwiPlxuICAgICAgICA8cD5QbGFuPC9wPlxuICAgICAgICA8ZGl2IGlkPVwidmFsdWVcIj5cbiAgICAgICAgICA8cD5MaWZlLXRpbWUgYWNjZXNzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNsb2dvdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNsb2dvdXQgI2J1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICNwbGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjcGxhbiAjdmFsdWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWU7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZXR0aW5ncy5MYXlvdXQgPSBEYXNoYm9hcmRMYXlvdXQ7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGxvZ291dDogKHRva2VuKSA9PiBkaXNwYXRjaCh1c2VyTG9nb3V0KHRva2VuKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2V0dGluZ3MpO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/settings.js */"));
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
//# sourceMappingURL=settings.js.ddee0d71cca1f921b747.hot-update.js.map