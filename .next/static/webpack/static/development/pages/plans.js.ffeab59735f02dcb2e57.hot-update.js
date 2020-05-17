webpackHotUpdate("static/development/pages/plans.js",{

/***/ "./components/raveButton.js":
/*!**********************************!*\
  !*** ./components/raveButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/components/raveButton.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var RaveButton = function RaveButton(props) {
  var _jsx;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    text: props.text || "Make Payment",
    "class": props["class"] || "",
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
    className: "jsx-2318565998" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("button", (_jsx = {
    className: "".concat(props.disabled ? "disabled" : "activated"),
    disabled: props.disabled,
    onClick: payWithRave
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-2318565998" + " " + (state["class"] || "")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }), _jsx), state.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2318565998",
    __self: _this
  }, ".wrapper.jsx-2318565998{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}button.jsx-2318565998{height:40px;margin-top:auto;border:none;border-radius:4px;color:white;width:100%;text-transform:uppercase;}.activated.jsx-2318565998{background-color:#3dcf8e;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3JhdmVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNrQixBQUd3QixBQUtELEFBa0JhLFlBakJULGFBa0JELEdBakJILFlBQ00sQUFpQnBCLGtCQWhCYyxZQUNELElBVEEsT0FVYyxJQVQzQixxQkFVQSIsImZpbGUiOiIvaG9tZS9iZW5raXNzaS9wcm9qZWN0cy9nZXRjaC9nZXRjaC1mcm9udGVuZC0yLjAvY29tcG9uZW50cy9yYXZlQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFJhdmVCdXR0b24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgdGV4dDogcHJvcHMudGV4dCB8fCBcIk1ha2UgUGF5bWVudFwiLFxuICAgIGNsYXNzOiBwcm9wcy5jbGFzcyB8fCBcIlwiLFxuICAgIGN1cnJlbmN5OiBwcm9wcy5jdXJyZW5jeSB8fCBcIlVTRFwiLFxuICAgIGNvdW50cnk6IHByb3BzLmNvdW50cnkgfHwgXCJHSFwiLFxuICB9KTtcblxuICBjb25zdCBwYXlXaXRoUmF2ZSA9ICgpID0+IHtcbiAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHtcbiAgICAgIGN1c3RvbWVyX2VtYWlsOiBwcm9wcy5lbWFpbCxcbiAgICAgIGFtb3VudDogcHJvcHMuYW1vdW50LFxuICAgICAgdHhyZWY6IHByb3BzLnJlZmVyZW5jZSxcbiAgICAgIFBCRlB1YktleTogcHJvcHMucmF2ZVB1YktleSxcbiAgICAgIG9uY2xvc2U6ICgpID0+IHByb3BzLmNsb3NlKCksXG4gICAgICBjYWxsYmFjazogKHJlc3BvbnNlKSA9PiBwcm9wcy5jYWxsYmFjayhyZXNwb25zZSksXG4gICAgICBtZXRhOiBwcm9wcy5tZXRhZGF0YSB8fCBbe31dLFxuICAgICAgY3VycmVuY3k6IHN0YXRlLmN1cnJlbmN5LFxuICAgICAgY291bnRyeTogc3RhdGUuY291bnRyeSxcbiAgICAgIGN1c3RvbWVyX2ZpcnN0bmFtZTogcHJvcHMuZk5hbWUgfHwgXCJcIixcbiAgICAgIGN1c3RvbWVyX3Bob25lOiBwcm9wcy5jdXN0b21lcl9waG9uZSB8fCBcIlwiLFxuICAgICAgY3VzdG9tZXJfbGFzdG5hbWU6IHByb3BzLmxOYW1lIHx8IFwiXCIsXG4gICAgICBjdXN0b21fdGl0bGU6IHByb3BzLmN1c3RvbV90aXRsZSB8fCBcIlwiLFxuICAgICAgY3VzdG9tX2Rlc2NyaXB0aW9uOiBwcm9wcy5jdXN0b21fZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgIGN1c3RvbV9sb2dvOiBwcm9wcy5jdXN0b21fbG9nbyB8fCBcIlwiLFxuICAgICAgc3ViYWNjb3VudHM6IHByb3BzLnN1YmFjY291bnRzIHx8IFt7fV0sIC8vc3BsaXRzIHBheW1lbnRzIGludG8gc3ViYWNjb3VudHMgcHJvdmlkZWRcbiAgICAgIHBheW1lbnRfbWV0aG9kOiBwcm9wcy5wYXltZW50X21ldGhvZCB8fCBcImJvdGhcIiwgLy9mYWxscyBiYWNrIHRvIGNhcmQgYW5kIGFjY291bnQgaWYgbm9uZSBpcyBzcGVjaWZpZWRcbiAgICAgIHBheW1lbnRfcGxhbjogcHJvcHMucGF5bWVudF9wbGFuIHx8IFwiXCIsIC8vdGhlIGlkIG9mIHlvdXIgcGF5bWVudCBwbGFuXG4gICAgICByZWRpcmVjdF91cmw6IHByb3BzLnJlZGlyZWN0X3VybCB8fCBcIlwiLCAvL2NhbGxzIHRoaXMgdXJsIGFmdGVyIHN1Y2Nlc3NmdWwgcGF5bWVudFxuICAgICAgaG9zdGVkX3BheW1lbnQ6IHByb3BzLmhvc3RlZF9wYXltZW50LCAvL29wZW5zIHRoZSBtb2RhbCBpbiBhIG5ldyBwYWdlXG4gICAgICBjYW1wYWlnbl9pZDogcHJvcHMuY2FtcGFpZ25faWQgfHwgXCJcIiwgLy9hbGxvd3MgZGlzY291bnRzXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcImFjdGl2YXRlZFwifWB9XG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5jbGFzc31cbiAgICAgICAgb25DbGljaz17cGF5V2l0aFJhdmV9XG4gICAgICA+XG4gICAgICAgIHtzdGF0ZS50ZXh0fVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAge1xuICAgICAgICAgIC8qIC5kaXNhYmxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9ICovXG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RjZjhlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF2ZUJ1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/raveButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (RaveButton);

/***/ })

})
//# sourceMappingURL=plans.js.ffeab59735f02dcb2e57.hot-update.js.map