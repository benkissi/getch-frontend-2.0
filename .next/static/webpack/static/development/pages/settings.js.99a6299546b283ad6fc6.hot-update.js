webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Header = function Header(props) {
  var handleSettingsClick = function handleSettingsClick() {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/settings");
  };

  var goHome = function goHome() {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
  };

  return __jsx("div", {
    id: "wrapper",
    className: "jsx-2789595413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2789595413" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogo.svg",
    className: "jsx-2789595413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2789595413" + " " + "count",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-2789595413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "3 free search: ", __jsx("span", {
    className: "jsx-2789595413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 26
    }
  }, "You have 2 left"))), __jsx("div", {
    id: "actions",
    className: "jsx-2789595413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, props.actions ? props.actions.map(function (action, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2789595413",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, action);
  }) : "", __jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-2789595413" + " " + "profile-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-2789595413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2789595413",
    __self: _this
  }, "#wrapper.jsx-2789595413{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-2789595413{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#actions.jsx-2789595413>*.jsx-2789595413{margin:0 5px 0 5px;}.count.jsx-2789595413{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;}.count.jsx-2789595413 p.jsx-2789595413{margin:0;}.count.jsx-2789595413 span.jsx-2789595413{font-weight:bold;}.profile-wrapper.jsx-2789595413{width:50px;height:30px;}.profile-wrapper.jsx-2789595413 img.jsx-2789595413{width:100%;height:100%;cursor:pointer;}.logo.jsx-2789595413{width:100px;cursor:pointer;}.logo.jsx-2789595413 img.jsx-2789595413{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR3dCLEFBTUEsQUFLTSxBQUlOLEFBTUosQUFJUSxBQUdOLEFBS0EsQUFNQyxBQUtELFNBdEJiLEVBT2MsQUFLQSxBQVdkLENBTGlCLEtBZGpCLEVBZEEsSUFrQkEsQUFLaUIsSUFNakIsV0FMQSxvQ0FuQ2EsQUFNUSxBQVNGLFdBZEssTUFlSixnQkFkcEIsRUFlQSwwREFWQSIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVNldHRpbmdzQ2xpY2sgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvc2V0dGluZ3NcIik7XG4gIH07XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL25ld0xvZ28uc3ZnXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAzIGZyZWUgc2VhcmNoOiA8c3Bhbj5Zb3UgaGF2ZSAyIGxlZnQ8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImFjdGlvbnNcIj5cbiAgICAgICAge3Byb3BzLmFjdGlvbnNcbiAgICAgICAgICA/IHByb3BzLmFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e2FjdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtd3JhcHBlclwiIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmdzQ2xpY2t9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgICNhY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjYWN0aW9ucyA+ICoge1xuICAgICAgICAgIG1hcmdpbjogMCA1cHggMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudCBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZmlsZS13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZmlsZS13cmFwcGVyIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28gaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=settings.js.99a6299546b283ad6fc6.hot-update.js.map