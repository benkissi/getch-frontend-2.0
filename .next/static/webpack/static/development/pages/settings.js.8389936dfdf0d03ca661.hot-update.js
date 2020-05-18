webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/dashboardLayout.js":
/*!***************************************!*\
  !*** ./components/dashboardLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _components_sideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sideBar */ "./components/sideBar.js");
/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/onboarding */ "./components/onboarding.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header */ "./components/header.js");





var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










var DashboardLayout = function DashboardLayout(props) {
  var authFb = props.authFb,
      user = props.user,
      fbToken = props.fbToken,
      userError = props.userError,
      searchError = props.searchError;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (searchError || userError) {
      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error("There was an error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [userError, searchError]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (user == null) {
      router.push("/signup");
    }
  }, [props.user]);
  return __jsx("div", {
    className: "jsx-2941168197" + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    justify: "end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      padding: "0 20px 0 20px",
      minHeight: "100vh"
    },
    span: 24,
    className: "child-container",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2941168197" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-2941168197" + " " + "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, props.children), __jsx("footer", {
    className: "jsx-2941168197",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2941168197" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-2941168197" + " " + "footer-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2941168197",
    __self: _this
  }, ".layout.jsx-2941168197{position:relative;min-height:100vh;padding:0 200px;}.layout-body.jsx-2941168197{position:relative;}.child-container.jsx-2941168197{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-2941168197{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-2941168197{position:fixed;top:0;width:90%;left:5%;background-color:white;z-index:100;}footer.jsx-2941168197{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-2941168197{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}@media screen and (max-width:480px){.layout.jsx-2941168197{padding:10px;}.children.jsx-2941168197{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtCLEFBRzZCLEFBTUEsQUFJTCxBQUlELEFBSUcsQUFTRSxBQVVGLEFBVUEsQUFJRixXQUNiLEVBSkEsRUE3Qk0sQUFtQkcsRUFWSSxDQTNCSSxBQU1uQixHQWFZLEdBbUJJLE9BbEJOLElBbkJRLEdBc0NPLENBbEJBLFlBbkJ6QixVQXNDYyxDQWxCQSxTQVJkLEVBMkJvQixDQS9CcEIsQUFhQSxpQkFLeUIsQUFjekIsbUdBYmEsV0FDTSxpQkFDTCxZQUNJLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGF1dGhGYWNlYm9vayB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGVCYXJcIjtcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL29uYm9hcmRpbmdcIjtcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXV0aEZiLCB1c2VyLCBmYlRva2VuLCB1c2VyRXJyb3IsIHNlYXJjaEVycm9yIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoRXJyb3IgfHwgdXNlckVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yLmAsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJFcnJvciwgc2VhcmNoRXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPFJvdyBqdXN0aWZ5PVwiZW5kXCI+XG4gICAgICAgIDxDb2xcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMjBweCAwIDIwcHhcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICAgICAgICBzcGFuPXsyNH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjaGlsZC1jb250YWluZXJcIlxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8T25ib2FyZGluZyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbiAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAmY29weTsgMjAxMCAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LCBHZXRjaC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGF5b3V0LWJvZHkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGRyZW4ge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2hpbGRyZW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG4gIGZiVG9rZW46IHN0YXRlLnVzZXIuZmJUb2tlbixcbiAgdXNlckVycm9yOiBzdGF0ZS51c2VyLmVycm9yLFxuICBzZWFyY2hFcnJvcjogc3RhdGUuc2VhcmNoLmVycm9yLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYXV0aEZiOiAodG9rZW4sIGlkLCBmYklkKSA9PiBkaXNwYXRjaChhdXRoRmFjZWJvb2soeyB0b2tlbiwgaWQsIGZiSWQgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZExheW91dCk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    fbToken: state.user.fbToken,
    userError: state.user.error,
    searchError: state.search.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    authFb: function authFb(token, id, fbId) {
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["authFacebook"])({
        token: token,
        id: id,
        fbId: fbId
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardLayout));

/***/ })

})
//# sourceMappingURL=settings.js.8389936dfdf0d03ca661.hot-update.js.map