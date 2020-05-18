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
    className: "jsx-1641786861" + " " + "layout",
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
    className: "child-container" // centered
    ,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1641786861" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })), __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1641786861" + " " + "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, props.children), __jsx("footer", {
    className: "jsx-1641786861",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1641786861" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-1641786861" + " " + "footer-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1641786861",
    __self: _this
  }, ".layout.jsx-1641786861{position:relative;min-height:100vh;padding:0 200px;}.layout-body.jsx-1641786861{position:relative;}.child-container.jsx-1641786861{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-1641786861{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-1641786861{position:fixed;top:0;width:90%;left:5%;background-color:white;z-index:100;}footer.jsx-1641786861{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-1641786861{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}@media screen and (max-width:480px){.layout.jsx-1641786861{padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RWtCLEFBRzZCLEFBTUEsQUFJTCxBQUlELEFBSUcsQUFTRSxBQVVGLEFBVUgsVUFDWixLQTdCTSxBQW1CRyxFQVZJLENBM0JJLEFBTW5CLEdBYVksR0FtQkksT0FsQk4sSUFuQlEsR0FzQ08sQ0FsQkEsWUFuQnpCLFVBc0NjLENBbEJBLFNBUmQsRUEyQm9CLENBL0JwQixBQWFBLGlCQUt5QixBQWN6QixtR0FiYSxXQUNNLGlCQUNMLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZUJhclwiO1xuaW1wb3J0IE9uYm9hcmRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvb25ib2FyZGluZ1wiO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhdXRoRmIsIHVzZXIsIGZiVG9rZW4sIHVzZXJFcnJvciwgc2VhcmNoRXJyb3IgfSA9IHByb3BzO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hFcnJvciB8fCB1c2VyRXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IuYCwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXNlckVycm9yLCBzZWFyY2hFcnJvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIgPT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbnVwXCIpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnVzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8Um93IGp1c3RpZnk9XCJlbmRcIj5cbiAgICAgICAgey8qIDxDb2xcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTYuNjY2NjY2NjclXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzcGFuPXs0fVxuICAgICAgICA+XG4gICAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgPC9Db2w+ICovfVxuICAgICAgICA8Q29sXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIwIDIwcHggMCAyMHB4XCIsIG1pbkhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgICAgICAgc3Bhbj17MjR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hpbGQtY29udGFpbmVyXCJcbiAgICAgICAgICAvLyBjZW50ZXJlZFxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8T25ib2FyZGluZyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbiAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAmY29weTsgMjAxMCAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LCBHZXRjaC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGF5b3V0LWJvZHkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGRyZW4ge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICB1c2VyRXJyb3I6IHN0YXRlLnVzZXIuZXJyb3IsXG4gIHNlYXJjaEVycm9yOiBzdGF0ZS5zZWFyY2guZXJyb3IsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBhdXRoRmI6ICh0b2tlbiwgaWQsIGZiSWQpID0+IGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7IHRva2VuLCBpZCwgZmJJZCB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGFzaGJvYXJkTGF5b3V0KTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
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
//# sourceMappingURL=index.js.2558e3ecbc856f815de9.hot-update.js.map