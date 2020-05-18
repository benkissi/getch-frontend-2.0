webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/onboarding.js":
/*!**********************************!*\
  !*** ./components/onboarding.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");






var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/onboarding.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Onboarding = function Onboarding(props) {
  var authFb = props.authFb,
      user = props.user,
      fbToken = props.fbToken;

  var faceAuthStart = function faceAuthStart() {
    console.log("#### FB auth start");
  };

  var responseFacebook = function responseFacebook(res) {
    var accessToken, userID, name;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function responseFacebook$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accessToken = res.accessToken, userID = res.userID, name = res.name;
            authFb(accessToken, user.id, userID, name);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "jsx-2549769782",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    visible: !!!fbToken.token,
    centered: true,
    footer: null,
    closable: false,
    width: 800,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2549769782" + " " + "modal-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2549769782",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Almost done"), __jsx("div", {
    className: "jsx-2549769782" + " " + "fb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "jsx-2549769782",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("h3", {
    className: "jsx-2549769782",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Lets search Facebook"), __jsx("p", {
    className: "jsx-2549769782",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Connect to Facebook to begin searching for interest"), __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_7___default.a, {
    appId: "539788533190548",
    autoLoad: false,
    fields: "name,email,id",
    onClick: faceAuthStart,
    scope: "ads_management, email",
    callback: responseFacebook,
    render: function render(renderProps) {
      return __jsx("div", {
        className: "jsx-2549769782" + " " + "connect",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }
      }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        disabled: !!fbToken.token,
        type: "primary",
        onClick: renderProps.onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, "Connect Facebook"));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2549769782",
    __self: _this
  }, ".modal-inner.jsx-2549769782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-2549769782{margin-bottom:50px;}.connect.jsx-2549769782{margin-bottom:50px;}.fb.jsx-2549769782{width:50px;}.fb.jsx-2549769782 img.jsx-2549769782{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL29uYm9hcmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQixBQUd3QixBQU9NLEFBSUEsQUFJUixBQUlBLFdBSGIsQUFJQSxRQVpBLEFBSUEsdURBWHdCLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9vbmJvYXJkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInJlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzXCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBTZWxlY3QsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgYXV0aEZhY2Vib29rIH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmNvbnN0IE9uYm9hcmRpbmcgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhdXRoRmIsIHVzZXIsIGZiVG9rZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IGZhY2VBdXRoU3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCIjIyMjIEZCIGF1dGggc3RhcnRcIik7XG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IGFzeW5jIChyZXMpID0+IHtcbiAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCB1c2VySUQsIG5hbWUgfSA9IHJlcztcbiAgICBhdXRoRmIoYWNjZXNzVG9rZW4sIHVzZXIuaWQsIHVzZXJJRCwgbmFtZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNb2RhbFxuICAgICAgICB2aXNpYmxlPXshISFmYlRva2VuLnRva2VufVxuICAgICAgICBjZW50ZXJlZFxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgd2lkdGg9ezgwMH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1pbm5lclwiPlxuICAgICAgICAgIDxoMj5BbG1vc3QgZG9uZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgzPkxldHMgc2VhcmNoIEZhY2Vib29rPC9oMz5cbiAgICAgICAgICA8cD5Db25uZWN0IHRvIEZhY2Vib29rIHRvIGJlZ2luIHNlYXJjaGluZyBmb3IgaW50ZXJlc3Q8L3A+XG4gICAgICAgICAgPEZhY2Vib29rTG9naW5cbiAgICAgICAgICAgIGFwcElkPXtwcm9jZXNzLmVudi5GQl9BUFBfSUR9XG4gICAgICAgICAgICBhdXRvTG9hZD17ZmFsc2V9XG4gICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLGlkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2ZhY2VBdXRoU3RhcnR9XG4gICAgICAgICAgICBzY29wZT1cImFkc19tYW5hZ2VtZW50LCBlbWFpbFwiXG4gICAgICAgICAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va31cbiAgICAgICAgICAgIHJlbmRlcj17KHJlbmRlclByb3BzKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ubmVjdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWZiVG9rZW4udG9rZW59XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbm5lY3QgRmFjZWJvb2tcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1vZGFsLWlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbm5lY3Qge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZiIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZmJUb2tlbjogc3RhdGUudXNlci5mYlRva2VuLFxuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYXV0aEZiOiAodG9rZW4sIGlkLCBmYklkLCBuYW1lKSA9PlxuICAgIGRpc3BhdGNoKGF1dGhGYWNlYm9vayh7IHRva2VuLCBpZCwgZmJJZCwgbmFtZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoT25ib2FyZGluZyk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/onboarding.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    fbToken: state.user.fbToken,
    user: state.user.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    authFb: function authFb(token, id, fbId, name) {
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_9__["authFacebook"])({
        token: token,
        id: id,
        fbId: fbId,
        name: name
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Onboarding));

/***/ })

})
//# sourceMappingURL=index.js.4e44bd30134e62d5d13d.hot-update.js.map