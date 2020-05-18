webpackHotUpdate("static/development/pages/index.js",{

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
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-2941168197" + " " + "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, props.children), __jsx("footer", {
    className: "jsx-2941168197",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2941168197" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-2941168197" + " " + "footer-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2941168197",
    __self: _this
  }, ".layout.jsx-2941168197{position:relative;min-height:100vh;padding:0 200px;}.layout-body.jsx-2941168197{position:relative;}.child-container.jsx-2941168197{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-2941168197{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-2941168197{position:fixed;top:0;width:90%;left:5%;background-color:white;z-index:100;}footer.jsx-2941168197{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-2941168197{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}@media screen and (max-width:480px){.layout.jsx-2941168197{padding:10px;}.children.jsx-2941168197{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBRzZCLEFBTUEsQUFJTCxBQUlELEFBSUcsQUFTRSxBQVVGLEFBVUEsQUFJRixXQUNiLEVBSkEsRUE3Qk0sQUFtQkcsRUFWSSxDQTNCSSxBQU1uQixHQWFZLEdBbUJJLE9BbEJOLElBbkJRLEdBc0NPLENBbEJBLFlBbkJ6QixVQXNDYyxDQWxCQSxTQVJkLEVBMkJvQixDQS9CcEIsQUFhQSxpQkFLeUIsQUFjekIsbUdBYmEsV0FDTSxpQkFDTCxZQUNJLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGF1dGhGYWNlYm9vayB9IGZyb20gXCIuLi9yZWR1eC91c2VyL3VzZXItYWN0aW9uc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGVCYXJcIjtcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL29uYm9hcmRpbmdcIjtcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXV0aEZiLCB1c2VyLCBmYlRva2VuLCB1c2VyRXJyb3IsIHNlYXJjaEVycm9yIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoRXJyb3IgfHwgdXNlckVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yLmAsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJFcnJvciwgc2VhcmNoRXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMjBweCAwIDIwcHhcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0gc3Bhbj17MjR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE9uYm9hcmRpbmcgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG4gICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJmNvcHk7IDIwMTAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSwgR2V0Y2guXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxheW91dC1ib2R5IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkcmVuIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoaWxkcmVuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxuICBmYlRva2VuOiBzdGF0ZS51c2VyLmZiVG9rZW4sXG4gIHVzZXJFcnJvcjogc3RhdGUudXNlci5lcnJvcixcbiAgc2VhcmNoRXJyb3I6IHN0YXRlLnNlYXJjaC5lcnJvcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGF1dGhGYjogKHRva2VuLCBpZCwgZmJJZCkgPT4gZGlzcGF0Y2goYXV0aEZhY2Vib29rKHsgdG9rZW4sIGlkLCBmYklkIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEYXNoYm9hcmRMYXlvdXQpO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
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
//# sourceMappingURL=index.js.c8229f89c2674f5ad75e.hot-update.js.map