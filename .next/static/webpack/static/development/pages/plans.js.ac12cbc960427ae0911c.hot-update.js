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
    className: "jsx-827851524" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-827851524" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, props.currentPlan === "PL002" ? __jsx("p", {
    id: "current",
    className: "jsx-827851524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 42
    }
  }, "Current Plan") : "", __jsx("div", {
    className: "jsx-827851524" + " " + "plan-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    className: "jsx-827851524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("h3", {
    className: "jsx-827851524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, props.title), __jsx("p", {
    className: "jsx-827851524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.description)), __jsx("div", {
    className: "jsx-827851524" + " " + "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-827851524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "$"), "59"), __jsx("div", {
    className: "jsx-827851524" + " " + "features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, props.features.map(function (feature, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-827851524" + " " + "feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, " ", __jsx("div", {
      className: "jsx-827851524" + " " + "feature-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: feature.image,
      className: "jsx-827851524",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })), __jsx("p", {
      className: "jsx-827851524",
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
    id: "827851524",
    __self: _this
  }, ".wrapper.jsx-827851524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #eee;padding:15px;width:50%;max-width:407px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.header.jsx-827851524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.plan-image.jsx-827851524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:10px;}.features.jsx-827851524{margin-top:20px;margin-bottom:50px;}.feature.jsx-827851524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.feature-image.jsx-827851524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:50px;max-width:50px;margin-right:10px;}.feature-image.jsx-827851524 img.jsx-827851524{width:100%;}.plan-image.jsx-827851524 img.jsx-827851524{width:10%;}#current.jsx-827851524{background:#3dcf8e;padding:5px;}.price.jsx-827851524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#4e53c8;font-weight:bold;font-size:50px;}.price.jsx-827851524 span.jsx-827851524{font-size:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3BsYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVrQixBQUd3QixBQVdBLEFBTUEsQUFPRyxBQUtILEFBT0EsQUFTRixBQUlELEFBSVMsQUFLTixBQVFFLFVBaEJqQixDQUpBLElBcUJBLENBMUNxQixHQTZCUCxZQUNkLElBN0JBLHVDQXpCd0IsQUFXQSxBQU1DLEFBWUosQUFPQSxBQXNCSSw4RUF6REQsQUFXSCxlQWtCSSxBQU9BLE1BbkJaLEFBeUNRLENBekROLFVBaUJNLEdBaEJULFVBQ00sTUFnQmxCLFVBZG9DLGdDQU9wQyxxQkFrQnFCLEFBT0osQUFzQkQsY0FDRyxDQXRCRixFQWhDakIsRUF5QkEsV0FRb0IsQ0FzQkgsZUFDakIsRUF0QkEiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvcGxhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVJhdmVQYXltZW50IH0gZnJvbSBcInJlYWN0LXJhdmVwYXltZW50XCI7XG5pbXBvcnQgUmF2ZUJ1dHRvbiBmcm9tIFwiLi9yYXZlQnV0dG9uXCI7XG5jb25zdCBQbGFuID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICB0eHJlZjogXCJyYXZlLTEyMzQ1NlwiLFxuICAgIGN1c3RvbWVyX2VtYWlsOiBwcm9wcy51c2VyRW1haWwsXG4gICAgYW1vdW50OiA1OSxcbiAgICBQQkZQdWJLZXk6IHByb2Nlc3MuZW52LlJBVkVfUFVCX0tFWSxcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICBjb3VudHJ5OiBcIkdIXCIsXG4gICAgcHJvZHVjdGlvbjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3Qgb25QYXltZW50TW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRSZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBwb3NzaWJsZSA9XG4gICAgICBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LS49XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspXG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICB7cHJvcHMuY3VycmVudFBsYW4gPT09IFwiUEwwMDJcIiA/IDxwIGlkPVwiY3VycmVudFwiPkN1cnJlbnQgUGxhbjwvcD4gOiBcIlwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW4taW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cbiAgICAgICAgPHNwYW4+JDwvc3Bhbj5cbiAgICAgICAgNTlcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICB7cHJvcHMuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtmZWF0dXJlLmltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxSYXZlQnV0dG9uXG4gICAgICAgIGVtYWlsPXtwcm9wcy51c2VyRW1haWx9XG4gICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgICAgY291bnRyeT1cIkdIXCJcbiAgICAgICAgcmVmZXJlbmNlPXtnZXRSZWZlcmVuY2UoKX1cbiAgICAgICAgYW1vdW50PXs1OX1cbiAgICAgICAgcmF2ZVB1YktleT17cHJvY2Vzcy5lbnYuUkFWRV9QVUJfS0VZfVxuICAgICAgICBjbG9zZT17b25QYXltZW50TW9kYWxDbG9zZX1cbiAgICAgICAgZk5hbWU9e3Byb3BzLmZOYW1lfVxuICAgICAgICBsTmFtZT17cHJvcHMubE5hbWV9XG4gICAgICAgIGNhbGxiYWNrPXsocmVzcG9uc2UpID0+IHByb3BzLnZlcmlmeVBheW1lbnQoXCJMaWZlLXRpbWVcIiwgcmVzcG9uc2UpfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuY3VycmVudFBsYW4gPT09IFwiUEwwMDJcIn1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDdweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYW4taW1hZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlcyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUtaW1hZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlLWltYWdlIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucGxhbi1pbWFnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAjY3VycmVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzNkY2Y4ZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzRlNTNjODtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/plan.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ })

})
//# sourceMappingURL=plans.js.ac12cbc960427ae0911c.hot-update.js.map