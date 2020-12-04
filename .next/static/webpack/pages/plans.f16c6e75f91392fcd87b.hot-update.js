webpackHotUpdate_N_E("pages/plans",{

/***/ "./components/plan.js":
/*!****************************!*\
  !*** ./components/plan.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raveButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raveButton */ "./components/raveButton.js");
var _this = undefined,
    _jsxFileName = "/home/ben/code/getch/getch-frontend-2.0/components/plan.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { useRavePayment } from "react-ravepayment";


var Plan = function Plan(props) {
  var onPaymentModalClose = function onPaymentModalClose() {
    console.log(true);
  };

  var getReference = function getReference() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (var i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };

  return __jsx("div", {
    className: "jsx-2434762511" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2434762511" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, props.currentPlan === "PL002" ? __jsx("p", {
    id: "current",
    className: "jsx-2434762511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 42
    }
  }, "Current Plan") : "", __jsx("div", {
    className: "jsx-2434762511" + " " + "plan-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    className: "jsx-2434762511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })), __jsx("h3", {
    className: "jsx-2434762511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.title), __jsx("p", {
    className: "jsx-2434762511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, props.description)), __jsx("div", {
    className: "jsx-2434762511" + " " + "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-2434762511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "$"), "10"), __jsx("span", {
    className: "jsx-2434762511" + " " + "period_label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "One time payment"), __jsx("div", {
    className: "jsx-2434762511" + " " + "features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, props.features.map(function (feature, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2434762511" + " " + "feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, " ", __jsx("div", {
      className: "jsx-2434762511" + " " + "feature-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: feature.image,
      className: "jsx-2434762511",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    })), __jsx("p", {
      className: "jsx-2434762511",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, feature.description));
  })), __jsx(_raveButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    email: props.userEmail,
    currency: "USD",
    country: "GH",
    reference: getReference(),
    amount: 10,
    ravePubKey: "FLWPUBK-9b6cdec462035ca1cef173f71a8331cb-X",
    close: onPaymentModalClose,
    fName: props.fName,
    lName: props.lName,
    callback: function callback(response) {
      return props.verifyPayment("Life-time", response);
    },
    disabled: props.currentPlan === "PL002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2434762511",
    __self: _this
  }, ".wrapper.jsx-2434762511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #eee;padding:15px;width:50%;max-width:407px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.header.jsx-2434762511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.plan-image.jsx-2434762511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:10px;}.features.jsx-2434762511{margin-top:20px;margin-bottom:50px;}.feature.jsx-2434762511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.feature-image.jsx-2434762511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:50px;max-width:50px;margin-right:10px;}.feature-image.jsx-2434762511 img.jsx-2434762511{width:100%;}.plan-image.jsx-2434762511 img.jsx-2434762511{width:10%;}#current.jsx-2434762511{background:#3dcf8e;padding:5px;color:white;font-weight:bold;}.price.jsx-2434762511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#4e53c8;font-weight:bold;font-size:50px;}.price.jsx-2434762511 span.jsx-2434762511{font-size:30px;}.period_label.jsx-2434762511{background-color:#4e53c8;text-align:center;color:#fafafa;width:50%;margin:auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbi9jb2RlL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3BsYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERrQixBQUd3QixBQVdBLEFBTUEsQUFPRyxBQUtILEFBT0EsQUFTRixBQUlELEFBSVMsQUFPTixBQVFFLEFBSVUsVUF0QjNCLENBSkEsSUF1QkEsQ0E1Q3FCLEdBNkJQLE1BbUJNLE1BbEJOLElBN0JkLFFBOEJtQixBQWtCSCxjQUNKLEdBbEJaLE9BbUJjLE9BM0VVLEFBV0EsQUFNQyxBQVlKLEFBT0EsQUF3QkksS0FnQkwsdUVBQ3BCLEVBNUV3QixBQVdILGVBa0JJLEFBT0EsTUFuQlosQUEyQ1EsQ0EzRE4sVUFpQk0sR0FoQlQsVUFDTSxNQWdCbEIsVUFkb0MsZ0NBT3BDLHFCQWtCcUIsQUFPSixBQXdCRCxjQUNHLENBeEJGLEVBaENqQixFQXlCQSxXQVFvQixDQXdCSCxlQUNqQixFQXhCQSIsImZpbGUiOiIvaG9tZS9iZW4vY29kZS9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9wbGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUmF2ZVBheW1lbnQgfSBmcm9tIFwicmVhY3QtcmF2ZXBheW1lbnRcIjtcbmltcG9ydCBSYXZlQnV0dG9uIGZyb20gXCIuL3JhdmVCdXR0b25cIjtcbmNvbnN0IFBsYW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb25QYXltZW50TW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRSZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBwb3NzaWJsZSA9XG4gICAgICBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LS49XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspXG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICB7cHJvcHMuY3VycmVudFBsYW4gPT09IFwiUEwwMDJcIiA/IDxwIGlkPVwiY3VycmVudFwiPkN1cnJlbnQgUGxhbjwvcD4gOiBcIlwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW4taW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cbiAgICAgICAgPHNwYW4+JDwvc3Bhbj5cbiAgICAgICAgMTBcbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGVyaW9kX2xhYmVsXCI+T25lIHRpbWUgcGF5bWVudDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAge3Byb3BzLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1pbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZmVhdHVyZS5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UmF2ZUJ1dHRvblxuICAgICAgICBlbWFpbD17cHJvcHMudXNlckVtYWlsfVxuICAgICAgICBjdXJyZW5jeT1cIlVTRFwiXG4gICAgICAgIGNvdW50cnk9XCJHSFwiXG4gICAgICAgIHJlZmVyZW5jZT17Z2V0UmVmZXJlbmNlKCl9XG4gICAgICAgIGFtb3VudD17MTB9XG4gICAgICAgIHJhdmVQdWJLZXk9e3Byb2Nlc3MuZW52LlJBVkVfUFVCX0tFWX1cbiAgICAgICAgY2xvc2U9e29uUGF5bWVudE1vZGFsQ2xvc2V9XG4gICAgICAgIGZOYW1lPXtwcm9wcy5mTmFtZX1cbiAgICAgICAgbE5hbWU9e3Byb3BzLmxOYW1lfVxuICAgICAgICBjYWxsYmFjaz17KHJlc3BvbnNlKSA9PiBwcm9wcy52ZXJpZnlQYXltZW50KFwiTGlmZS10aW1lXCIsIHJlc3BvbnNlKX1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmN1cnJlbnRQbGFuID09PSBcIlBMMDAyXCJ9XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDA3cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGFuLWltYWdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZXMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlLWltYWdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZS1pbWFnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYW4taW1hZ2UgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2N1cnJlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzZGNmOGU7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjNGU1M2M4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Ugc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlcmlvZF9sYWJlbHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1M2M4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW47XG4iXX0= */\n/*@ sourceURL=/home/ben/code/getch/getch-frontend-2.0/components/plan.js */"));
};

_c = Plan;
/* harmony default export */ __webpack_exports__["default"] = (Plan);

var _c;

$RefreshReg$(_c, "Plan");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGFuLmpzIl0sIm5hbWVzIjpbIlBsYW4iLCJwcm9wcyIsIm9uUGF5bWVudE1vZGFsQ2xvc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmVmZXJlbmNlIiwidGV4dCIsInBvc3NpYmxlIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImN1cnJlbnRQbGFuIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaW5kZXgiLCJ1c2VyRW1haWwiLCJwcm9jZXNzIiwiZk5hbWUiLCJsTmFtZSIsInJlc3BvbnNlIiwidmVyaWZ5UGF5bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLFFBQUlDLFFBQVEsR0FDVixtRUFERjs7QUFHQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekI7QUFDRUYsVUFBSSxJQUFJQyxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLFFBQVEsQ0FBQ00sTUFBcEMsQ0FBaEIsQ0FBUjtBQURGOztBQUdBLFdBQU9QLElBQVA7QUFDRCxHQVREOztBQVdBLFNBQ0U7QUFBQSx3Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxLQUFLLENBQUNhLFdBQU4sS0FBc0IsT0FBdEIsR0FBZ0M7QUFBRyxNQUFFLEVBQUMsU0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWhDLEdBQW1FLEVBRHRFLEVBRUU7QUFBQSx3Q0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRWIsS0FBSyxDQUFDYyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtkLEtBQUssQ0FBQ2UsS0FBWCxDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlmLEtBQUssQ0FBQ2dCLFdBQVYsQ0FORixDQURGLEVBU0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixPQVRGLEVBYUU7QUFBQSx3Q0FBZ0IsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFiRixFQWNFO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQixLQUFLLENBQUNpQixRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsV0FDbEI7QUFBeUIsU0FBRyxFQUFFQSxLQUE5QjtBQUFBLDBDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLEdBREgsRUFFRTtBQUFBLDBDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRCxPQUFPLENBQUNMLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUssT0FBTyxDQUFDSCxXQUFaLENBTEYsQ0FEa0I7QUFBQSxHQUFuQixDQURILENBZEYsRUEwQkUsTUFBQyxtREFBRDtBQUNFLFNBQUssRUFBRWhCLEtBQUssQ0FBQ3FCLFNBRGY7QUFFRSxZQUFRLEVBQUMsS0FGWDtBQUdFLFdBQU8sRUFBQyxJQUhWO0FBSUUsYUFBUyxFQUFFakIsWUFBWSxFQUp6QjtBQUtFLFVBQU0sRUFBRSxFQUxWO0FBTUUsY0FBVSxFQUFFa0IsNENBTmQ7QUFPRSxTQUFLLEVBQUVyQixtQkFQVDtBQVFFLFNBQUssRUFBRUQsS0FBSyxDQUFDdUIsS0FSZjtBQVNFLFNBQUssRUFBRXZCLEtBQUssQ0FBQ3dCLEtBVGY7QUFVRSxZQUFRLEVBQUUsa0JBQUNDLFFBQUQ7QUFBQSxhQUFjekIsS0FBSyxDQUFDMEIsYUFBTixDQUFvQixXQUFwQixFQUFpQ0QsUUFBakMsQ0FBZDtBQUFBLEtBVlo7QUFXRSxZQUFRLEVBQUV6QixLQUFLLENBQUNhLFdBQU4sS0FBc0IsT0FYbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRjtBQUFBO0FBQUE7QUFBQSxtNVBBREY7QUE0SEQsQ0E1SUQ7O0tBQU1kLEk7QUE4SVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYW5zLmYxNmM2ZTc1ZjkxMzkyZmNkODdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VSYXZlUGF5bWVudCB9IGZyb20gXCJyZWFjdC1yYXZlcGF5bWVudFwiO1xuaW1wb3J0IFJhdmVCdXR0b24gZnJvbSBcIi4vcmF2ZUJ1dHRvblwiO1xuY29uc3QgUGxhbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvblBheW1lbnRNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHBvc3NpYmxlID1cbiAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktLj1cIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcbiAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIHtwcm9wcy5jdXJyZW50UGxhbiA9PT0gXCJQTDAwMlwiID8gPHAgaWQ9XCJjdXJyZW50XCI+Q3VycmVudCBQbGFuPC9wPiA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbi1pbWFnZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxuICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICAxMFxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZXJpb2RfbGFiZWxcIj5PbmUgdGltZSBwYXltZW50PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICB7cHJvcHMuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtmZWF0dXJlLmltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxSYXZlQnV0dG9uXG4gICAgICAgIGVtYWlsPXtwcm9wcy51c2VyRW1haWx9XG4gICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgICAgY291bnRyeT1cIkdIXCJcbiAgICAgICAgcmVmZXJlbmNlPXtnZXRSZWZlcmVuY2UoKX1cbiAgICAgICAgYW1vdW50PXsxMH1cbiAgICAgICAgcmF2ZVB1YktleT17cHJvY2Vzcy5lbnYuUkFWRV9QVUJfS0VZfVxuICAgICAgICBjbG9zZT17b25QYXltZW50TW9kYWxDbG9zZX1cbiAgICAgICAgZk5hbWU9e3Byb3BzLmZOYW1lfVxuICAgICAgICBsTmFtZT17cHJvcHMubE5hbWV9XG4gICAgICAgIGNhbGxiYWNrPXsocmVzcG9uc2UpID0+IHByb3BzLnZlcmlmeVBheW1lbnQoXCJMaWZlLXRpbWVcIiwgcmVzcG9uc2UpfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuY3VycmVudFBsYW4gPT09IFwiUEwwMDJcIn1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDdweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYW4taW1hZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlcyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUtaW1hZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlLWltYWdlIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucGxhbi1pbWFnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAjY3VycmVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzNkY2Y4ZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM0ZTUzYzg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGVyaW9kX2xhYmVse1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTUzYzg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=