webpackHotUpdate("static/development/pages/plans.js",{

/***/ "./components/raveButton.js":
/*!**********************************!*\
  !*** ./components/raveButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/raveButton.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var RaveButton = function RaveButton(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    text: props.text || "Make Payment",
    currency: props.currency || "USD",
    country: props.country || "GH"
  }),
      state = _useState[0],
      setState = _useState[1];

  var payWithRave = function payWithRave() {
    window.getpaidSetup({
      customer_email: props.email,
      amount: props.amount,
      txref: props.reference,
      PBFPubKey: props.ravePubKey,
      onclose: function onclose() {
        return props.close();
      },
      callback: function callback(response) {
        return props.callback(response);
      },
      meta: props.metadata || [{}],
      currency: state.currency,
      country: state.country,
      customer_firstname: props.fName || "",
      customer_phone: props.customer_phone || "",
      customer_lastname: props.lName || "",
      custom_title: props.custom_title || "",
      custom_description: props.custom_description || "",
      custom_logo: props.custom_logo || "",
      subaccounts: props.subaccounts || [{}],
      //splits payments into subaccounts provided
      payment_method: props.payment_method || "both",
      //falls back to card and account if none is specified
      payment_plan: props.payment_plan || "",
      //the id of your payment plan
      redirect_url: props.redirect_url || "",
      //calls this url after successful payment
      hosted_payment: props.hosted_payment,
      //opens the modal in a new page
      campaign_id: props.campaign_id || "" //allows discounts

    });
  };

  return __jsx("div", {
    className: "jsx-1033007843" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: props.disabled,
    onClick: payWithRave,
    className: "jsx-1033007843" + " " + "".concat(props.disabled ? "disabled" : "activated"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, state.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1033007843",
    __self: _this
  }, ".wrapper.jsx-1033007843{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}button.jsx-1033007843{height:40px;margin-top:auto;border:none;border-radius:4px;color:white;width:100%;text-transform:uppercase;}.disabled.jsx-1033007843{background-color:#eee;color:gray;cursor:not-allowed;}.activated.jsx-1033007843{background-color:#3dcf8e;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3JhdmVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUd3QixBQUtELEFBVVUsQUFNRyxZQWZULFVBVUwsR0FNSSxHQWZILEtBVU8sT0FURCxBQWVwQixZQUxBLE1BVGMsWUFDRCxJQVRBLE9BVWMsSUFUM0IscUJBVUEiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL2NvbXBvbmVudHMvcmF2ZUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBSYXZlQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHRleHQ6IHByb3BzLnRleHQgfHwgXCJNYWtlIFBheW1lbnRcIixcbiAgICBjdXJyZW5jeTogcHJvcHMuY3VycmVuY3kgfHwgXCJVU0RcIixcbiAgICBjb3VudHJ5OiBwcm9wcy5jb3VudHJ5IHx8IFwiR0hcIixcbiAgfSk7XG5cbiAgY29uc3QgcGF5V2l0aFJhdmUgPSAoKSA9PiB7XG4gICAgd2luZG93LmdldHBhaWRTZXR1cCh7XG4gICAgICBjdXN0b21lcl9lbWFpbDogcHJvcHMuZW1haWwsXG4gICAgICBhbW91bnQ6IHByb3BzLmFtb3VudCxcbiAgICAgIHR4cmVmOiBwcm9wcy5yZWZlcmVuY2UsXG4gICAgICBQQkZQdWJLZXk6IHByb3BzLnJhdmVQdWJLZXksXG4gICAgICBvbmNsb3NlOiAoKSA9PiBwcm9wcy5jbG9zZSgpLFxuICAgICAgY2FsbGJhY2s6IChyZXNwb25zZSkgPT4gcHJvcHMuY2FsbGJhY2socmVzcG9uc2UpLFxuICAgICAgbWV0YTogcHJvcHMubWV0YWRhdGEgfHwgW3t9XSxcbiAgICAgIGN1cnJlbmN5OiBzdGF0ZS5jdXJyZW5jeSxcbiAgICAgIGNvdW50cnk6IHN0YXRlLmNvdW50cnksXG4gICAgICBjdXN0b21lcl9maXJzdG5hbWU6IHByb3BzLmZOYW1lIHx8IFwiXCIsXG4gICAgICBjdXN0b21lcl9waG9uZTogcHJvcHMuY3VzdG9tZXJfcGhvbmUgfHwgXCJcIixcbiAgICAgIGN1c3RvbWVyX2xhc3RuYW1lOiBwcm9wcy5sTmFtZSB8fCBcIlwiLFxuICAgICAgY3VzdG9tX3RpdGxlOiBwcm9wcy5jdXN0b21fdGl0bGUgfHwgXCJcIixcbiAgICAgIGN1c3RvbV9kZXNjcmlwdGlvbjogcHJvcHMuY3VzdG9tX2Rlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgICBjdXN0b21fbG9nbzogcHJvcHMuY3VzdG9tX2xvZ28gfHwgXCJcIixcbiAgICAgIHN1YmFjY291bnRzOiBwcm9wcy5zdWJhY2NvdW50cyB8fCBbe31dLCAvL3NwbGl0cyBwYXltZW50cyBpbnRvIHN1YmFjY291bnRzIHByb3ZpZGVkXG4gICAgICBwYXltZW50X21ldGhvZDogcHJvcHMucGF5bWVudF9tZXRob2QgfHwgXCJib3RoXCIsIC8vZmFsbHMgYmFjayB0byBjYXJkIGFuZCBhY2NvdW50IGlmIG5vbmUgaXMgc3BlY2lmaWVkXG4gICAgICBwYXltZW50X3BsYW46IHByb3BzLnBheW1lbnRfcGxhbiB8fCBcIlwiLCAvL3RoZSBpZCBvZiB5b3VyIHBheW1lbnQgcGxhblxuICAgICAgcmVkaXJlY3RfdXJsOiBwcm9wcy5yZWRpcmVjdF91cmwgfHwgXCJcIiwgLy9jYWxscyB0aGlzIHVybCBhZnRlciBzdWNjZXNzZnVsIHBheW1lbnRcbiAgICAgIGhvc3RlZF9wYXltZW50OiBwcm9wcy5ob3N0ZWRfcGF5bWVudCwgLy9vcGVucyB0aGUgbW9kYWwgaW4gYSBuZXcgcGFnZVxuICAgICAgY2FtcGFpZ25faWQ6IHByb3BzLmNhbXBhaWduX2lkIHx8IFwiXCIsIC8vYWxsb3dzIGRpc2NvdW50c1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmRpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogXCJhY3RpdmF0ZWRcIn1gfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3BheVdpdGhSYXZlfVxuICAgICAgPlxuICAgICAgICB7c3RhdGUudGV4dH1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpc2FibGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RjZjhlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF2ZUJ1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/raveButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (RaveButton);

/***/ })

})
//# sourceMappingURL=plans.js.9e2d1b0322dd887b5937.hot-update.js.map