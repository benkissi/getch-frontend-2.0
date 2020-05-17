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
    className: "jsx-4287757771" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: true,
    onClick: payWithRave,
    className: "jsx-4287757771" + " " + (state["class"] || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, state.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4287757771",
    __self: _this
  }, ".wrapper.jsx-4287757771{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}button.jsx-4287757771{cursor:pointer;height:40px;margin-top:auto;background-color:#3dcf8e;border:none;border-radius:4px;color:white;width:100%;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3JhdmVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUd3QixBQUtFLGVBQ0gsWUFDSSxnQkFDUyx5QkFDYixNQVJELE1BU08sS0FScEIsYUFTYyxZQUNELFdBQ2MseUJBQzNCIiwiZmlsZSI6Ii9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9jb21wb25lbnRzL3JhdmVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUmF2ZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB0ZXh0OiBwcm9wcy50ZXh0IHx8IFwiTWFrZSBQYXltZW50XCIsXG4gICAgY2xhc3M6IHByb3BzLmNsYXNzIHx8IFwiXCIsXG4gICAgY3VycmVuY3k6IHByb3BzLmN1cnJlbmN5IHx8IFwiVVNEXCIsXG4gICAgY291bnRyeTogcHJvcHMuY291bnRyeSB8fCBcIkdIXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHBheVdpdGhSYXZlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAoe1xuICAgICAgY3VzdG9tZXJfZW1haWw6IHByb3BzLmVtYWlsLFxuICAgICAgYW1vdW50OiBwcm9wcy5hbW91bnQsXG4gICAgICB0eHJlZjogcHJvcHMucmVmZXJlbmNlLFxuICAgICAgUEJGUHViS2V5OiBwcm9wcy5yYXZlUHViS2V5LFxuICAgICAgb25jbG9zZTogKCkgPT4gcHJvcHMuY2xvc2UoKSxcbiAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2UpID0+IHByb3BzLmNhbGxiYWNrKHJlc3BvbnNlKSxcbiAgICAgIG1ldGE6IHByb3BzLm1ldGFkYXRhIHx8IFt7fV0sXG4gICAgICBjdXJyZW5jeTogc3RhdGUuY3VycmVuY3ksXG4gICAgICBjb3VudHJ5OiBzdGF0ZS5jb3VudHJ5LFxuICAgICAgY3VzdG9tZXJfZmlyc3RuYW1lOiBwcm9wcy5mTmFtZSB8fCBcIlwiLFxuICAgICAgY3VzdG9tZXJfcGhvbmU6IHByb3BzLmN1c3RvbWVyX3Bob25lIHx8IFwiXCIsXG4gICAgICBjdXN0b21lcl9sYXN0bmFtZTogcHJvcHMubE5hbWUgfHwgXCJcIixcbiAgICAgIGN1c3RvbV90aXRsZTogcHJvcHMuY3VzdG9tX3RpdGxlIHx8IFwiXCIsXG4gICAgICBjdXN0b21fZGVzY3JpcHRpb246IHByb3BzLmN1c3RvbV9kZXNjcmlwdGlvbiB8fCBcIlwiLFxuICAgICAgY3VzdG9tX2xvZ286IHByb3BzLmN1c3RvbV9sb2dvIHx8IFwiXCIsXG4gICAgICBzdWJhY2NvdW50czogcHJvcHMuc3ViYWNjb3VudHMgfHwgW3t9XSwgLy9zcGxpdHMgcGF5bWVudHMgaW50byBzdWJhY2NvdW50cyBwcm92aWRlZFxuICAgICAgcGF5bWVudF9tZXRob2Q6IHByb3BzLnBheW1lbnRfbWV0aG9kIHx8IFwiYm90aFwiLCAvL2ZhbGxzIGJhY2sgdG8gY2FyZCBhbmQgYWNjb3VudCBpZiBub25lIGlzIHNwZWNpZmllZFxuICAgICAgcGF5bWVudF9wbGFuOiBwcm9wcy5wYXltZW50X3BsYW4gfHwgXCJcIiwgLy90aGUgaWQgb2YgeW91ciBwYXltZW50IHBsYW5cbiAgICAgIHJlZGlyZWN0X3VybDogcHJvcHMucmVkaXJlY3RfdXJsIHx8IFwiXCIsIC8vY2FsbHMgdGhpcyB1cmwgYWZ0ZXIgc3VjY2Vzc2Z1bCBwYXltZW50XG4gICAgICBob3N0ZWRfcGF5bWVudDogcHJvcHMuaG9zdGVkX3BheW1lbnQsIC8vb3BlbnMgdGhlIG1vZGFsIGluIGEgbmV3IHBhZ2VcbiAgICAgIGNhbXBhaWduX2lkOiBwcm9wcy5jYW1wYWlnbl9pZCB8fCBcIlwiLCAvL2FsbG93cyBkaXNjb3VudHNcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPXtzdGF0ZS5jbGFzc30gb25DbGljaz17cGF5V2l0aFJhdmV9PlxuICAgICAgICB7c3RhdGUudGV4dH1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkY2Y4ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXZlQnV0dG9uO1xuIl19 */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/components/raveButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (RaveButton);

/***/ })

})
//# sourceMappingURL=plans.js.c8d9bb44452ece6f05a6.hot-update.js.map