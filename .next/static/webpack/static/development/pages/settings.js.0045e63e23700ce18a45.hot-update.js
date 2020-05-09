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
  }, props.searchCount < 3 ? "You have ".concat(3 - props.searchCount, " free search left") : "You are out of free searches"))) : "", __jsx("div", {
    id: "actions",
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, props.actions ? props.actions.map(function (action, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-4191299405",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, action);
  }) : "", __jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-4191299405" + " " + "profile-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-4191299405",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4191299405",
    __self: _this
  }, "#wrapper.jsx-4191299405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-4191299405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}#actions.jsx-4191299405>*.jsx-4191299405{margin:0 5px 0 5px;}.count.jsx-4191299405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;}.count.jsx-4191299405 p.jsx-4191299405{margin:0;}.count.jsx-4191299405 span.jsx-4191299405{font-weight:bold;}.profile-wrapper.jsx-4191299405{width:50px;height:30px;}.profile-wrapper.jsx-4191299405 img.jsx-4191299405{width:100%;height:100%;cursor:pointer;}.logo.jsx-4191299405{width:100px;cursor:pointer;}.logo.jsx-4191299405 img.jsx-4191299405{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR3dCLEFBTUEsQUFNTSxBQUlOLEFBS0osQUFJUSxBQUdOLEFBS0EsQUFNQyxBQUtELFNBdEJiLEVBT2MsQUFLQSxBQVdkLENBTGlCLEtBZGpCLEVBYkEsSUFpQkEsQUFLaUIsSUFNakIsV0FMQSxvQ0FuQ2EsQUFNUSxBQVVGLFdBZkssTUFnQnhCLGdCQWZBLDREQUttQixpQkFDbkIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVNldHRpbmdzQ2xpY2sgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvc2V0dGluZ3NcIik7XG4gIH07XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICBjb25zdCBzaG91bGRTaG93Q291bnQgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXIucGxhbiA9PT0gXCJQTDAwMVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBvbkNsaWNrPXtnb0hvbWV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbmV3TG9nby5zdmdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvdWxkU2hvd0NvdW50KCkgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDMgZnJlZSBzZWFyY2g6e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtwcm9wcy5zZWFyY2hDb3VudCA8IDNcbiAgICAgICAgICAgICAgICA/IGBZb3UgaGF2ZSAkezMgLSBwcm9wcy5zZWFyY2hDb3VudH0gZnJlZSBzZWFyY2ggbGVmdGBcbiAgICAgICAgICAgICAgICA6IFwiWW91IGFyZSBvdXQgb2YgZnJlZSBzZWFyY2hlc1wifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuXG4gICAgICA8ZGl2IGlkPVwiYWN0aW9uc1wiPlxuICAgICAgICB7cHJvcHMuYWN0aW9uc1xuICAgICAgICAgID8gcHJvcHMuYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57YWN0aW9ufTwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS13cmFwcGVyXCIgb25DbGljaz17aGFuZGxlU2V0dGluZ3NDbGlja30+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3VzZXIuc3ZnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI2FjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgICNhY3Rpb25zID4gKiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQgc3BhbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2ZpbGUtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2ZpbGUtd3JhcHBlciBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgc2VhcmNoQ291bnQ6IHN0YXRlLnNlYXJjaC5zZWFyY2hDb3VudCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js */"));
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
//# sourceMappingURL=settings.js.0045e63e23700ce18a45.hot-update.js.map