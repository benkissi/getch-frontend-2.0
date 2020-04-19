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
/* harmony import */ var react_toastify_scss_main_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify/scss/main.scss */ "./node_modules/react-toastify/scss/main.scss");
/* harmony import */ var react_toastify_scss_main_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_toastify_scss_main_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header */ "./components/header.js");








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
            console.log('fb', res);
            authFb(accessToken, user.id, userID);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var actions = [__jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      background: "#f86326",
      border: "none",
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Get life time access")];
  return __jsx("div", {
    className: "jsx-747387214" + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      position: 'relative',
      height: '100vh',
      width: "16.66666667%"
    },
    span: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_components_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 98
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      padding: '0 20px 0 20px',
      minHeight: '100vh'
    },
    span: 20,
    className: "child-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-747387214" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_16__["default"], {
    actions: actions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-747387214" + " " + "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, props.children), !fbToken && user ? __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }) : "", __jsx("footer", {
    className: "jsx-747387214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-747387214" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-747387214" + " " + "footer-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "747387214",
    __self: _this
  }, ".layout.jsx-747387214{position:relative;min-height:100vh;}.layout-body.jsx-747387214{position:relative;}.child-container.jsx-747387214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-747387214{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-747387214{position:fixed;top:0;width:81%;background-color:white;z-index:100;}footer.jsx-747387214{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-747387214{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRm9CLEFBR21DLEFBS0EsQUFJTCxBQUlELEFBSUcsQUFRRSxBQVVGLGVBakJULEFBa0JHLEVBVkksQ0F6QkksQUFLckIsR0FhYyxHQWtCSSxPQWpCUyxJQWxCM0IsR0FvQzJCLGdCQWpCWCxPQWtCQSxLQWpCaEIsS0FSQSxFQTBCc0IsQ0E5QnRCLGlCQWlCMkIsQUFjekIsbUdBYmEsV0FDTSxpQkFDTCxZQUNJLGdCQUNwQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiAgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlQmFyXCI7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nXCJcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9zY3NzL21haW4uc2Nzc1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG5cbmNvbnN0IERhc2hib2FyZExheW91dCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGF1dGhGYixcbiAgICAgICAgdXNlcixcbiAgICAgICAgZmJUb2tlbixcbiAgICAgICAgdXNlckVycm9yLFxuICAgICAgICBzZWFyY2hFcnJvclxuICAgICAgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHNlYXJjaEVycm9yIHx8IHVzZXJFcnJvcil7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yLmAsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgW3VzZXJFcnJvciwgc2VhcmNoRXJyb3JdKVxuXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZih1c2VyID09IG51bGwpe1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvc2lnbnVwXCIpO1xuICAgICAgICB9XG4gICAgICB9LCBbcHJvcHMudXNlcl0pXG5cbiAgICBjb25zdCBmYWNlQXV0aFN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMgRkIgYXV0aCBzdGFydFwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IGFzeW5jIHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4sIHVzZXJJRCB9ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZygnZmInLHJlcylcbiAgICAgICAgYXV0aEZiKGFjY2Vzc1Rva2VuLCB1c2VyLmlkLCB1c2VySUQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjZjg2MzI2XCIsIGJvcmRlcjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCJ9fT5HZXQgbGlmZSB0aW1lIGFjY2VzczwvQnV0dG9uPixcbiAgICBdXG4gcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJzEwMHZoJywgd2lkdGg6IFwiMTYuNjY2NjY2NjclXCJ9fSBzcGFuPXs0fT48U2lkZUJhci8+PC9Db2w+XG4gICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogJzAgMjBweCAwIDIwcHgnLCBtaW5IZWlnaHQ6ICcxMDB2aCd9fSBzcGFuPXsyMH0gY2xhc3NOYW1lPVwiY2hpbGQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYWN0aW9ucz17YWN0aW9uc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZHJlblwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFmYlRva2VuICYmIHVzZXIgP1xuICAgICAgICAgICAgICAgIDxPbmJvYXJkaW5nLz46IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj4mY29weTsgMjAxMCAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LCBHZXRjaC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGF5b3V0LWJvZHkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoaWxkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoaWxkcmVuIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgxJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICA8L2Rpdj5cbiApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgICBmYlRva2VuOiBzdGF0ZS51c2VyLmZiVG9rZW4sXG4gICAgdXNlckVycm9yOiBzdGF0ZS51c2VyLmVycm9yLFxuICAgIHNlYXJjaEVycm9yOiBzdGF0ZS5zZWFyY2guZXJyb3JcbiAgfSk7XG5cbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhdXRoRmI6ICh0b2tlbiwgaWQsIGZiSWQpID0+IGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7IHRva2VuLCBpZCwgZmJJZH0pKVxuICB9KTtcbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZExheW91dCkiXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
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
//# sourceMappingURL=index.js.5aee5ce5c2597227445e.hot-update.js.map