webpackHotUpdate("static/development/pages/performance.js",{

/***/ "./components/adAccount.js":
/*!*********************************!*\
  !*** ./components/adAccount.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/adAccount.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function AdAccount(props) {
  var status = function status() {
    switch (props.status) {
      case 1:
        return "ACTIVE";

      case 2:
        return "DISABLED";

      case 3:
        return "UNSETTLED";

      case 7:
        return "PENDING RISK REVIEW";

      case 8:
        return "PENDING SETTLEMENT";

      case 9:
        return "IN GRACE PERIOD";

      case 100:
        return "PENDING CLOSURE";

      case 101:
        return "CLOSED";

      case 201:
        return "ANY ACTIVE";

      case 202:
        return "ANY CLOSED";

      default:
        return "NONE";
    }
  };

  return __jsx("div", {
    id: "wrapper",
    onClick: function onClick() {
      return props.onSelect(props.accountId, props.name);
    },
    className: "jsx-80624705",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-80624705" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.name), __jsx("div", {
    className: "jsx-80624705" + " " + "id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.accountId ? props.accountId.replace("act_", "") : ""), __jsx("div", {
    className: "jsx-80624705" + " " + "_".concat(props.status),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, status()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "80624705",
    __self: this
  }, "#wrapper.jsx-80624705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;padding:5px;cursor:pointer;}.name.jsx-80624705{color:gray;font-weight:bold;}._1.jsx-80624705{color:green;}._2.jsx-80624705,._3.jsx-80624705,._7.jsx-80624705,._8.jsx-80624705,._9.jsx-80624705,._100.jsx-80624705,._101.jsx-80624705,._201.jsx-80624705,._202.jsx-80624705{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL2FkQWNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR3dCLEFBU0EsQUFLQyxBQVFGLFVBQ2QsQ0FicUIsQ0FLckIsZ0JBSkEsOENBVndCLDhFQUNBLHNCQUNKLGtCQUNOLFlBQ0csZUFDakIiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvYWRBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQWRBY2NvdW50KHByb3BzKSB7XG4gIGNvbnN0IHN0YXR1cyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHByb3BzLnN0YXR1cykge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gXCJBQ1RJVkVcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIFwiRElTQUJMRURcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiVU5TRVRUTEVEXCI7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiBcIlBFTkRJTkcgUklTSyBSRVZJRVdcIjtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIFwiUEVORElORyBTRVRUTEVNRU5UXCI7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBcIklOIEdSQUNFIFBFUklPRFwiO1xuICAgICAgY2FzZSAxMDA6XG4gICAgICAgIHJldHVybiBcIlBFTkRJTkcgQ0xPU1VSRVwiO1xuICAgICAgY2FzZSAxMDE6XG4gICAgICAgIHJldHVybiBcIkNMT1NFRFwiO1xuICAgICAgY2FzZSAyMDE6XG4gICAgICAgIHJldHVybiBcIkFOWSBBQ1RJVkVcIjtcbiAgICAgIGNhc2UgMjAyOlxuICAgICAgICByZXR1cm4gXCJBTlkgQ0xPU0VEXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJOT05FXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblNlbGVjdChwcm9wcy5hY2NvdW50SWQsIHByb3BzLm5hbWUpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9wcy5uYW1lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPlxuICAgICAgICB7cHJvcHMuYWNjb3VudElkID8gcHJvcHMuYWNjb3VudElkLnJlcGxhY2UoXCJhY3RfXCIsIFwiXCIpIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BfJHtwcm9wcy5zdGF0dXN9YH0+e3N0YXR1cygpfTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLl8xIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5fMiwgLl8zLFxuICAgICAgICAuXzcsIC5fOCxcbiAgICAgICAgLl85LCAuXzEwMCxcbiAgICAgICAgLl8xMDEsIC5fMjAxLFxuICAgICAgICAuXzIwMiB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgey8qIC5zdGF0dXN7XG4gICAgICAgICAgICBjb2xvcjpncmVlbjtcbiAgICAgICAgfSAqL31cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRBY2NvdW50O1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/adAccount.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AdAccount);

/***/ })

})
//# sourceMappingURL=performance.js.525ba1df4240b5cacbcc.hot-update.js.map