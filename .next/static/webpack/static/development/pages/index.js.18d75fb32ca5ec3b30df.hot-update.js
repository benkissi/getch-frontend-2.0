webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

  var shouldShowCount = function shouldShowCount() {
    if (props.user.plan === "PL001") {
      return true;
    } else {
      return false;
    }
  };

  return __jsx("div", {
    id: "wrapper",
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: goHome,
    className: "jsx-4191299405" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogo.svg",
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), shouldShowCount() ? __jsx("div", {
    className: "jsx-4191299405" + " " + "count",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "3 free search:", " ", __jsx("span", {
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "You have ", 3 - props.searchCount, " free search left"))) : "", __jsx("div", {
    id: "actions",
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, props.actions ? props.actions.map(function (action, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-4191299405",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, action);
  }) : "", __jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-4191299405" + " " + "profile-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4191299405",
    __self: _this
  }, "#wrapper.jsx-4191299405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-4191299405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}#actions.jsx-4191299405>*.jsx-4191299405{margin:0 5px 0 5px;}.count.jsx-4191299405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;}.count.jsx-4191299405 p.jsx-4191299405{margin:0;}.count.jsx-4191299405 span.jsx-4191299405{font-weight:bold;}.profile-wrapper.jsx-4191299405{width:50px;height:30px;}.profile-wrapper.jsx-4191299405 img.jsx-4191299405{width:100%;height:100%;cursor:pointer;}.logo.jsx-4191299405{width:100px;cursor:pointer;}.logo.jsx-4191299405 img.jsx-4191299405{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2tCLEFBR3dCLEFBTUEsQUFNTSxBQUlOLEFBS0osQUFJUSxBQUdOLEFBS0EsQUFNQyxBQUtELFNBdEJiLEVBT2MsQUFLQSxBQVdkLENBTGlCLEtBZGpCLEVBYkEsSUFpQkEsQUFLaUIsSUFNakIsV0FMQSxvQ0FuQ2EsQUFNUSxBQVVGLFdBZkssTUFnQnhCLGdCQWZBLDREQUttQixpQkFDbkIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVNldHRpbmdzQ2xpY2sgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvc2V0dGluZ3NcIik7XG4gIH07XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICBjb25zdCBzaG91bGRTaG93Q291bnQgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXIucGxhbiA9PT0gXCJQTDAwMVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBvbkNsaWNrPXtnb0hvbWV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbmV3TG9nby5zdmdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvdWxkU2hvd0NvdW50KCkgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDMgZnJlZSBzZWFyY2g6e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4+WW91IGhhdmUgezMgLSBwcm9wcy5zZWFyY2hDb3VudH0gZnJlZSBzZWFyY2ggbGVmdDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgXCJcIlxuICAgICAgKX1cblxuICAgICAgPGRpdiBpZD1cImFjdGlvbnNcIj5cbiAgICAgICAge3Byb3BzLmFjdGlvbnNcbiAgICAgICAgICA/IHByb3BzLmFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e2FjdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtd3JhcHBlclwiIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmdzQ2xpY2t9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3dyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgICNhY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAjYWN0aW9ucyA+ICoge1xuICAgICAgICAgIG1hcmdpbjogMCA1cHggMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9maWxlLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9maWxlLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFVzZXIsXG4gIHNlYXJjaENvdW50OiBzdGF0ZS5zZWFyY2guc2VhcmNoQ291bnQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    searchCount: state.search.searchCount
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.18d75fb32ca5ec3b30df.hot-update.js.map