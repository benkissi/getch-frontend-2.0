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
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Get life time access")];
  return __jsx("div", {
    className: "jsx-747387214" + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_components_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-747387214" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_15__["default"], {
    actions: actions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-747387214" + " " + "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, props.children), !fbToken && user ? __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }) : "", __jsx("footer", {
    className: "jsx-747387214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-747387214" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-747387214" + " " + "footer-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "\xA9 2010 - ", new Date().getFullYear(), ", Getch."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "747387214",
    __self: _this
  }, ".layout.jsx-747387214{position:relative;min-height:100vh;}.layout-body.jsx-747387214{position:relative;}.child-container.jsx-747387214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.children.jsx-747387214{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.header.jsx-747387214{position:fixed;top:0;width:81%;background-color:white;z-index:100;}footer.jsx-747387214{margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;background:white;height:50px;margin-top:50px;}.footer.jsx-747387214{position:fixed;bottom:0;width:inherit;background-color:white;color:black;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRm9CLEFBR21DLEFBS0EsQUFJTCxBQUlELEFBSUcsQUFRRSxBQVVGLGVBakJULEFBa0JHLEVBVkksQ0F6QkksQUFLckIsR0FhYyxHQWtCSSxPQWpCUyxJQWxCM0IsR0FvQzJCLGdCQWpCWCxPQWtCQSxLQWpCaEIsS0FSQSxFQTBCc0IsQ0E5QnRCLGlCQWlCMkIsQUFjekIsbUdBYmEsV0FDTSxpQkFDTCxZQUNJLGdCQUNwQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9kYXNoYm9hcmRMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiAgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlQmFyXCI7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nXCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuXG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBhdXRoRmIsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGZiVG9rZW4sXG4gICAgICAgIHVzZXJFcnJvcixcbiAgICAgICAgc2VhcmNoRXJyb3JcbiAgICAgIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihzZWFyY2hFcnJvciB8fCB1c2VyRXJyb3Ipe1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvci5gLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFt1c2VyRXJyb3IsIHNlYXJjaEVycm9yXSlcblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYodXNlciA9PSBudWxsKXtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgW3Byb3BzLnVzZXJdKVxuXG4gICAgY29uc3QgZmFjZUF1dGhTdGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIEZCIGF1dGggc3RhcnRcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSBhc3luYyByZXMgPT4ge1xuICAgICAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCB1c2VySUQgfSA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coJ2ZiJyxyZXMpXG4gICAgICAgIGF1dGhGYihhY2Nlc3NUb2tlbiwgdXNlci5pZCwgdXNlcklEKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmQ6IFwiI2Y4NjMyNlwiLCBib3JkZXI6IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0+R2V0IGxpZmUgdGltZSBhY2Nlc3M8L0J1dHRvbj4sXG4gICAgXVxuIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDB2aCcsIHdpZHRoOiBcIjE2LjY2NjY2NjY3JVwifX0gc3Bhbj17NH0+PFNpZGVCYXIvPjwvQ29sPlxuICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6ICcwIDIwcHggMCAyMHB4JywgbWluSGVpZ2h0OiAnMTAwdmgnfX0gc3Bhbj17MjB9IGNsYXNzTmFtZT1cImNoaWxkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFjdGlvbnM9e2FjdGlvbnN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhZmJUb2tlbiAmJiB1c2VyID9cbiAgICAgICAgICAgICAgICA8T25ib2FyZGluZy8+OiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+JmNvcHk7IDIwMTAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSwgR2V0Y2guPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxheW91dC1ib2R5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGlsZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGlsZHJlbiB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MSU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgPC9kaXY+XG4gKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG4gICAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICAgIHVzZXJFcnJvcjogc3RhdGUudXNlci5lcnJvcixcbiAgICBzZWFyY2hFcnJvcjogc3RhdGUuc2VhcmNoLmVycm9yXG4gIH0pO1xuXG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYXV0aEZiOiAodG9rZW4sIGlkLCBmYklkKSA9PiBkaXNwYXRjaChhdXRoRmFjZWJvb2soeyB0b2tlbiwgaWQsIGZiSWR9KSlcbiAgfSk7XG4gIFxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEYXNoYm9hcmRMYXlvdXQpIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/dashboardLayout.js */"));
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
//# sourceMappingURL=index.js.7f2173cbb3c3510fb320.hot-update.js.map