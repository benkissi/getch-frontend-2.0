webpackHotUpdate("static/development/pages/plans.js",{

/***/ "./components/plan.js":
/*!****************************!*\
  !*** ./components/plan.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raveButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raveButton */ "./components/raveButton.js");
var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/plan.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { useRavePayment } from "react-ravepayment";


var Plan = function Plan(props) {
  var config = {
    txref: "rave-123456",
    customer_email: props.userEmail,
    amount: 59,
    PBFPubKey: "FLWPUBK_TEST-4ad02b10b1d5e1be389cec767e44fe59-X",
    currency: "USD",
    country: "GH",
    production: false
  };

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
    className: "jsx-984984075" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-984984075" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, props.currentPlan === "PL002" ? __jsx("p", {
    className: "jsx-984984075",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 42
    }
  }, "Current Plan") : "", __jsx("div", {
    className: "jsx-984984075" + " " + "plan-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    className: "jsx-984984075",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("h3", {
    className: "jsx-984984075",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, props.title), __jsx("p", {
    className: "jsx-984984075",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.description)), __jsx("div", {
    className: "jsx-984984075" + " " + "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-984984075",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "$"), "59"), __jsx("div", {
    className: "jsx-984984075" + " " + "features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, props.features.map(function (feature, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-984984075" + " " + "feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, " ", __jsx("div", {
      className: "jsx-984984075" + " " + "feature-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: feature.image,
      className: "jsx-984984075",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })), __jsx("p", {
      className: "jsx-984984075",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, feature.description));
  })), __jsx(_raveButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    email: props.userEmail,
    currency: "USD",
    country: "GH",
    reference: getReference(),
    amount: 59,
    ravePubKey: "FLWPUBK_TEST-4ad02b10b1d5e1be389cec767e44fe59-X",
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
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "984984075",
    __self: _this
  }, ".wrapper.jsx-984984075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #eee;padding:15px;width:50%;max-width:407px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.header.jsx-984984075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.plan-image.jsx-984984075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:10px;}.features.jsx-984984075{margin-top:20px;margin-bottom:50px;}.feature.jsx-984984075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.feature-image.jsx-984984075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:50px;max-width:50px;margin-right:10px;}.feature-image.jsx-984984075 img.jsx-984984075{width:100%;}.plan-image.jsx-984984075 img.jsx-984984075{width:10%;}.price.jsx-984984075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#4e53c8;font-weight:bold;font-size:50px;}.price.jsx-984984075 span.jsx-984984075{font-size:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3BsYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVrQixBQUd3QixBQVdBLEFBTUEsQUFPRyxBQUtILEFBT0EsQUFTRixBQUlELEFBZ0JHLEFBUUUsVUF2QmpCLENBSkEsSUE0QkEsQ0FqRHFCLG1CQUNyQix1Q0F6QndCLEFBV0EsQUFNQyxBQVlKLEFBT0EsQUE2QkksOEVBaEVELEFBV0gsZUFrQkksQUFPQSxNQW5CWixBQWdEUSxDQWhFTixVQWlCTSxHQWhCVCxVQUNNLE1BZ0JsQixVQWRvQyxnQ0FPcEMscUJBa0JxQixBQU9KLEFBNkJELGNBQ0csQ0E3QkYsRUFoQ2pCLEVBeUJBLFdBUW9CLENBNkJILGVBQ2pCLEVBN0JBIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3BsYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VSYXZlUGF5bWVudCB9IGZyb20gXCJyZWFjdC1yYXZlcGF5bWVudFwiO1xuaW1wb3J0IFJhdmVCdXR0b24gZnJvbSBcIi4vcmF2ZUJ1dHRvblwiO1xuY29uc3QgUGxhbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgdHhyZWY6IFwicmF2ZS0xMjM0NTZcIixcbiAgICBjdXN0b21lcl9lbWFpbDogcHJvcHMudXNlckVtYWlsLFxuICAgIGFtb3VudDogNTksXG4gICAgUEJGUHViS2V5OiBwcm9jZXNzLmVudi5SQVZFX1BVQl9LRVksXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgY291bnRyeTogXCJHSFwiLFxuICAgIHByb2R1Y3Rpb246IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IG9uUGF5bWVudE1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVmZXJlbmNlID0gKCkgPT4ge1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgcG9zc2libGUgPVxuICAgICAgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS0uPVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAge3Byb3BzLmN1cnJlbnRQbGFuID09PSBcIlBMMDAyXCIgPyA8cD5DdXJyZW50IFBsYW48L3A+IDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFuLWltYWdlXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgIDxzcGFuPiQ8L3NwYW4+XG4gICAgICAgIDU5XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAge3Byb3BzLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1pbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZmVhdHVyZS5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UmF2ZUJ1dHRvblxuICAgICAgICBlbWFpbD17cHJvcHMudXNlckVtYWlsfVxuICAgICAgICBjdXJyZW5jeT1cIlVTRFwiXG4gICAgICAgIGNvdW50cnk9XCJHSFwiXG4gICAgICAgIHJlZmVyZW5jZT17Z2V0UmVmZXJlbmNlKCl9XG4gICAgICAgIGFtb3VudD17NTl9XG4gICAgICAgIHJhdmVQdWJLZXk9e3Byb2Nlc3MuZW52LlJBVkVfUFVCX0tFWX1cbiAgICAgICAgY2xvc2U9e29uUGF5bWVudE1vZGFsQ2xvc2V9XG4gICAgICAgIGZOYW1lPXtwcm9wcy5mTmFtZX1cbiAgICAgICAgbE5hbWU9e3Byb3BzLmxOYW1lfVxuICAgICAgICBjYWxsYmFjaz17KHJlc3BvbnNlKSA9PiBwcm9wcy52ZXJpZnlQYXltZW50KFwiTGlmZS10aW1lXCIsIHJlc3BvbnNlKX1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmN1cnJlbnRQbGFuID09PSBcIlBMMDAyXCJ9XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDA3cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGFuLWltYWdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZXMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlLWltYWdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZS1pbWFnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYW4taW1hZ2UgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgIHtcbiAgICAgICAgICAvKiBidXR0b24ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RjZjhlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9ICovXG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzRlNTNjODtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/plan.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ })

})
//# sourceMappingURL=plans.js.84879d2e9d87e2833314.hot-update.js.map