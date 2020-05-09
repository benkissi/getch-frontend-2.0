webpackHotUpdate("static/development/pages/plans.js",{

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
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _components_sideBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sideBar */ "./components/sideBar.js");
/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/onboarding */ "./components/onboarding.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header */ "./components/header.js");








var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var DashboardLayout = function DashboardLayout(props) {
  var authFb = props.authFb,
      user = props.user,
      fbToken = props.fbToken,
      userError = props.userError,
      searchError = props.searchError;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (searchError || userError) {
      react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].error("There was an error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [userError, searchError]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (user == null) {
      router.push("/signup");
    }
  }, [props.user]);

  var faceAuthStart = function faceAuthStart() {
    console.log("#### FB auth start");
  };

  var responseFacebook = function responseFacebook(res) {
    var accessToken, userID;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function responseFacebook$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accessToken = res.accessToken, userID = res.userID;
            console.log("fb", res);
            authFb(accessToken, user.id, userID);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var goToPlans = function goToPlans() {
    Router.push("/plans");
  };

  var actions = [__jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      background: "#f86326",
      border: "none",
      color: "white"
    },
    onClick: goToPlans,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "Get life time access")];
  return __jsx("div", {
    className: "jsx-3104132821" + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    justify: "end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3104132821" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_15__["default"], {
    actions: actions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3104132821" + " " + "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, props.children), __jsx("footer", {
    className: "jsx-3104132821",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3104132821" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-3104132821" + " " + "footer-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "3104132821",
    __self: _this
  }, ".layout.jsx-3104132821{position:relative;min-height:100vh;padding:0 200px;}.layout-body.jsx-3104132821{position:relative;}.child-container.jsx-3104132821{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-3104132821{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-3104132821{position:fixed;top:0;width:90%;left:5%;background-color:white;z-index:100;}footer.jsx-3104132821{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-3104132821{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RmtCLEFBRzZCLEFBTUEsQUFJTCxBQUlELEFBSUcsQUFTRSxBQVVGLGVBbEJULEFBbUJHLEVBVkksQ0EzQkksQUFNbkIsR0FhWSxHQW1CSSxPQWxCTixJQW5CUSxHQXNDTyxDQWxCQSxZQW5CekIsVUFzQ2MsQ0FsQkEsU0FSZCxFQTJCb0IsQ0EvQnBCLEFBYUEsaUJBS3lCLEFBY3pCLG1HQWJhLFdBQ00saUJBQ0wsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvZGFzaGJvYXJkTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhdXRoRmFjZWJvb2sgfSBmcm9tIFwiLi4vcmVkdXgvdXNlci91c2VyLWFjdGlvbnNcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGVCYXJcIjtcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL29uYm9hcmRpbmdcIjtcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXV0aEZiLCB1c2VyLCBmYlRva2VuLCB1c2VyRXJyb3IsIHNlYXJjaEVycm9yIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoRXJyb3IgfHwgdXNlckVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yLmAsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJFcnJvciwgc2VhcmNoRXJyb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy51c2VyXSk7XG5cbiAgY29uc3QgZmFjZUF1dGhTdGFydCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIiMjIyMgRkIgYXV0aCBzdGFydFwiKTtcbiAgfTtcblxuICBjb25zdCByZXNwb25zZUZhY2Vib29rID0gYXN5bmMgKHJlcykgPT4ge1xuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4sIHVzZXJJRCB9ID0gcmVzO1xuICAgIGNvbnNvbGUubG9nKFwiZmJcIiwgcmVzKTtcbiAgICBhdXRoRmIoYWNjZXNzVG9rZW4sIHVzZXIuaWQsIHVzZXJJRCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1BsYW5zID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL3BsYW5zXCIpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgPEJ1dHRvblxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjg2MzI2XCIsIGJvcmRlcjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgIG9uQ2xpY2s9e2dvVG9QbGFuc31cbiAgICA+XG4gICAgICBHZXQgbGlmZSB0aW1lIGFjY2Vzc1xuICAgIDwvQnV0dG9uPixcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPFJvdyBqdXN0aWZ5PVwiZW5kXCI+XG4gICAgICAgIHsvKiA8Q29sXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjE2LjY2NjY2NjY3JVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgc3Bhbj17NH1cbiAgICAgICAgPlxuICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgIDwvQ29sPiAqL31cbiAgICAgICAgPENvbFxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMCAyMHB4IDAgMjBweFwiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fVxuICAgICAgICAgIHNwYW49ezI0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoaWxkLWNvbnRhaW5lclwiXG4gICAgICAgICAgLy8gY2VudGVyZWRcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIGFjdGlvbnM9e2FjdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE9uYm9hcmRpbmcgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG4gICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJmNvcHk7IDIwMTAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSwgR2V0Y2guXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxheW91dC1ib2R5IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkcmVuIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG4gIGZiVG9rZW46IHN0YXRlLnVzZXIuZmJUb2tlbixcbiAgdXNlckVycm9yOiBzdGF0ZS51c2VyLmVycm9yLFxuICBzZWFyY2hFcnJvcjogc3RhdGUuc2VhcmNoLmVycm9yLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYXV0aEZiOiAodG9rZW4sIGlkLCBmYklkKSA9PiBkaXNwYXRjaChhdXRoRmFjZWJvb2soeyB0b2tlbiwgaWQsIGZiSWQgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZExheW91dCk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
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
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["authFacebook"])({
        token: token,
        id: id,
        fbId: fbId
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardLayout));

/***/ })

})
//# sourceMappingURL=plans.js.05a5ab322a5a3246f26a.hot-update.js.map