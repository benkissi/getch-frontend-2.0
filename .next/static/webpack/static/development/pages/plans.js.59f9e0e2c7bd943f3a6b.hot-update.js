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
    className: "jsx-1886694088" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1886694088" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, props.currentPlan === "PL002" ? __jsx("p", {
    id: "current",
    className: "jsx-1886694088",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 42
    }
  }, "Current Plan") : "", __jsx("div", {
    className: "jsx-1886694088" + " " + "plan-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    className: "jsx-1886694088",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("h3", {
    className: "jsx-1886694088",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, props.title), __jsx("p", {
    className: "jsx-1886694088",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.description)), __jsx("div", {
    className: "jsx-1886694088" + " " + "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-1886694088",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "$"), "59"), __jsx("div", {
    className: "jsx-1886694088" + " " + "features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, props.features.map(function (feature, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-1886694088" + " " + "feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, " ", __jsx("div", {
      className: "jsx-1886694088" + " " + "feature-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: feature.image,
      className: "jsx-1886694088",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })), __jsx("p", {
      className: "jsx-1886694088",
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
    id: "1886694088",
    __self: _this
  }, ".wrapper.jsx-1886694088{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #eee;padding:15px;width:50%;max-width:407px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.header.jsx-1886694088{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.plan-image.jsx-1886694088{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:10px;}.features.jsx-1886694088{margin-top:20px;margin-bottom:50px;}.feature.jsx-1886694088{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.feature-image.jsx-1886694088{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:50px;max-width:50px;margin-right:10px;}.feature-image.jsx-1886694088 img.jsx-1886694088{width:100%;}.plan-image.jsx-1886694088 img.jsx-1886694088{width:10%;}#current.jsx-1886694088{background:#3dcf8e;}.price.jsx-1886694088{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#4e53c8;font-weight:bold;font-size:50px;}.price.jsx-1886694088 span.jsx-1886694088{font-size:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3BsYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVrQixBQUd3QixBQVdBLEFBTUEsQUFPRyxBQUtILEFBT0EsQUFTRixBQUlELEFBSVMsQUFJTixBQVFFLFVBZmpCLENBSkEsSUFvQkEsQ0F6Q3FCLEdBNkJyQixnQkE1QkEsdUNBekJ3QixBQVdBLEFBTUMsQUFZSixBQU9BLEFBcUJJLDhFQXhERCxBQVdILGVBa0JJLEFBT0EsTUFuQlosQUF3Q1EsQ0F4RE4sVUFpQk0sR0FoQlQsVUFDTSxNQWdCbEIsVUFkb0MsZ0NBT3BDLHFCQWtCcUIsQUFPSixBQXFCRCxjQUNHLENBckJGLEVBaENqQixFQXlCQSxXQVFvQixDQXFCSCxlQUNqQixFQXJCQSIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9wbGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUmF2ZVBheW1lbnQgfSBmcm9tIFwicmVhY3QtcmF2ZXBheW1lbnRcIjtcbmltcG9ydCBSYXZlQnV0dG9uIGZyb20gXCIuL3JhdmVCdXR0b25cIjtcbmNvbnN0IFBsYW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHR4cmVmOiBcInJhdmUtMTIzNDU2XCIsXG4gICAgY3VzdG9tZXJfZW1haWw6IHByb3BzLnVzZXJFbWFpbCxcbiAgICBhbW91bnQ6IDU5LFxuICAgIFBCRlB1YktleTogcHJvY2Vzcy5lbnYuUkFWRV9QVUJfS0VZLFxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgIGNvdW50cnk6IFwiR0hcIixcbiAgICBwcm9kdWN0aW9uOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBvblBheW1lbnRNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHBvc3NpYmxlID1cbiAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktLj1cIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcbiAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIHtwcm9wcy5jdXJyZW50UGxhbiA9PT0gXCJQTDAwMlwiID8gPHAgaWQ9XCJjdXJyZW50XCI+Q3VycmVudCBQbGFuPC9wPiA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbi1pbWFnZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxuICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICA1OVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzXCI+XG4gICAgICAgIHtwcm9wcy5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ZlYXR1cmUuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFJhdmVCdXR0b25cbiAgICAgICAgZW1haWw9e3Byb3BzLnVzZXJFbWFpbH1cbiAgICAgICAgY3VycmVuY3k9XCJVU0RcIlxuICAgICAgICBjb3VudHJ5PVwiR0hcIlxuICAgICAgICByZWZlcmVuY2U9e2dldFJlZmVyZW5jZSgpfVxuICAgICAgICBhbW91bnQ9ezU5fVxuICAgICAgICByYXZlUHViS2V5PXtwcm9jZXNzLmVudi5SQVZFX1BVQl9LRVl9XG4gICAgICAgIGNsb3NlPXtvblBheW1lbnRNb2RhbENsb3NlfVxuICAgICAgICBmTmFtZT17cHJvcHMuZk5hbWV9XG4gICAgICAgIGxOYW1lPXtwcm9wcy5sTmFtZX1cbiAgICAgICAgY2FsbGJhY2s9eyhyZXNwb25zZSkgPT4gcHJvcHMudmVyaWZ5UGF5bWVudChcIkxpZmUtdGltZVwiLCByZXNwb25zZSl9XG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5jdXJyZW50UGxhbiA9PT0gXCJQTDAwMlwifVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwN3B4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGxhbi1pbWFnZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmVzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZS1pbWFnZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUtaW1hZ2UgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGFuLWltYWdlIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjdXJyZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2RjZjhlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM0ZTUzYzg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW47XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/plan.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ })

})
//# sourceMappingURL=plans.js.59f9e0e2c7bd943f3a6b.hot-update.js.map