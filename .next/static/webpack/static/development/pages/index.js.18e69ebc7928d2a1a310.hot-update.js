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
    if (props.user && props.user.plan === "PL001") {
      return true;
    } else {
      return false;
    }
  };

  return __jsx("div", {
    id: "wrapper",
    className: "jsx-2343109816",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: goHome,
    className: "jsx-2343109816" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/newLogo.svg",
    className: "jsx-2343109816",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), shouldShowCount() ? __jsx("div", {
    className: "jsx-2343109816" + " " + "count",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-2343109816",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "3 free search:", " ", __jsx("span", {
    className: "jsx-2343109816" + " " + "".concat(props.searchCount >= 3 ? "red" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, props.searchCount < 3 ? "You have ".concat(3 - props.searchCount, " free search left") : "You are out of free searches"))) : "", __jsx("div", {
    id: "actions",
    className: "jsx-2343109816",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, props.actions ? props.actions.map(function (action, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2343109816",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, action);
  }) : "", __jsx("div", {
    onClick: handleSettingsClick,
    className: "jsx-2343109816" + " " + "profile-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-2343109816",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2343109816",
    __self: _this
  }, "#wrapper.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:10px 0 10px 0;}#actions.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}#actions.jsx-2343109816>*.jsx-2343109816{margin:0 5px 0 5px;}.count.jsx-2343109816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;}.count.jsx-2343109816 p.jsx-2343109816{margin:0;}.count.jsx-2343109816 span.jsx-2343109816{font-weight:bold;}.profile-wrapper.jsx-2343109816{width:50px;height:30px;}.profile-wrapper.jsx-2343109816 img.jsx-2343109816{width:100%;height:100%;cursor:pointer;}.logo.jsx-2343109816{width:100px;cursor:pointer;}.logo.jsx-2343109816 img.jsx-2343109816{width:100%;}.red.jsx-2343109816{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR3dCLEFBTUEsQUFNTSxBQUlOLEFBS0osQUFJUSxBQUdOLEFBS0EsQUFNQyxBQUtELEFBSUQsU0ExQlosQ0EyQkEsQ0FwQmMsQUFLQSxBQVdkLENBTGlCLEtBZGpCLEVBYkEsSUFpQkEsQUFLaUIsSUFNakIsV0FMQSxvQ0FuQ2EsQUFNUSxBQVVGLFdBZkssTUFnQnhCLGdCQWZBLDREQUttQixpQkFDbkIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVNldHRpbmdzQ2xpY2sgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvc2V0dGluZ3NcIik7XG4gIH07XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICBjb25zdCBzaG91bGRTaG93Q291bnQgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZXIgJiYgcHJvcHMudXNlci5wbGFuID09PSBcIlBMMDAxXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIG9uQ2xpY2s9e2dvSG9tZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9uZXdMb2dvLnN2Z1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG91bGRTaG93Q291bnQoKSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgMyBmcmVlIHNlYXJjaDp7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3Byb3BzLnNlYXJjaENvdW50ID49IDMgPyBcInJlZFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAge3Byb3BzLnNlYXJjaENvdW50IDwgM1xuICAgICAgICAgICAgICAgID8gYFlvdSBoYXZlICR7MyAtIHByb3BzLnNlYXJjaENvdW50fSBmcmVlIHNlYXJjaCBsZWZ0YFxuICAgICAgICAgICAgICAgIDogXCJZb3UgYXJlIG91dCBvZiBmcmVlIHNlYXJjaGVzXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG5cbiAgICAgIDxkaXYgaWQ9XCJhY3Rpb25zXCI+XG4gICAgICAgIHtwcm9wcy5hY3Rpb25zXG4gICAgICAgICAgPyBwcm9wcy5hY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PnthY3Rpb259PC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXdyYXBwZXJcIiBvbkNsaWNrPXtoYW5kbGVTZXR0aW5nc0NsaWNrfT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdXNlci5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICN3cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAjYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgI2FjdGlvbnMgPiAqIHtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudCBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZmlsZS13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZmlsZS13cmFwcGVyIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28gaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWQge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbiAgc2VhcmNoQ291bnQ6IHN0YXRlLnNlYXJjaC5zZWFyY2hDb3VudCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/header.js */"));
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
//# sourceMappingURL=index.js.18e69ebc7928d2a1a310.hot-update.js.map