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
    className: "jsx-1074357609" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Settings")), __jsx("div", {
    id: "logout",
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Logout"), __jsx("div", {
    id: "button",
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleLogout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Logout"))), __jsx("div", {
    className: "jsx-1074357609" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "plan",
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Plan"), __jsx("div", {
    id: "value",
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-1074357609",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Life-time access"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1074357609",
    __self: _this
  }, ".wrapper.jsx-1074357609{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h2.jsx-1074357609{margin-bottom:50px;}#logout.jsx-1074357609{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#logout.jsx-1074357609 #button.jsx-1074357609{margin-left:50%;}#plan.jsx-1074357609{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#plan.jsx-1074357609 #value.jsx-1074357609{margin-left:50%;}.divider.jsx-1074357609{margin-top:30px;margin-bottom:30px;width:60%;border-bottom:solid 1px #eee;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR3dCLEFBUU0sQUFJTixBQU9HLEFBSUgsQUFPRyxBQUlBLGdCQWRsQixBQVdBLEFBSXFCLEdBMUJyQixnQkEyQlksVUFDbUIsNkJBcENQLEFBWVgsQUFXQSxBQWNPLFdBeEJDLEFBV0EsNERBY3JCLE9BckNtQixpQkFDTixTQVlZLEFBV0EsRUF0QkEsaUdBWXpCLEFBV0EsRUF0QkEiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL3BhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IHVzZXJMb2dvdXQgfSBmcm9tIFwiLi4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnNcIjtcblxuY29uc3QgU2V0dGluZ3MgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHByb3BzLmxvZ291dChwcm9wcy51c2VyLnhUb2tlbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5TZXR0aW5nczwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cImxvZ291dFwiPlxuICAgICAgICA8cD5Mb2dvdXQ8L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJidXR0b25cIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJwbGFuXCI+XG4gICAgICAgIDxwPlBsYW48L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJ2YWx1ZVwiPlxuICAgICAgICAgIDxwPkxpZmUtdGltZSBhY2Nlc3M8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2xvZ291dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2xvZ291dCAjYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI3BsYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNwbGFuICN2YWx1ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNldHRpbmdzLkxheW91dCA9IERhc2hib2FyZExheW91dDtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgbG9nb3V0OiAodG9rZW4pID0+IGRpc3BhdGNoKHVzZXJMb2dvdXQodG9rZW4pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZXR0aW5ncyk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/settings.js */"));
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
//# sourceMappingURL=settings.js.b1f7cad8e22361ef1c0a.hot-update.js.map