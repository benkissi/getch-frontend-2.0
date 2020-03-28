webpackHotUpdate("static/development/pages/performance.js",{

/***/ "./api/endpoints.js":
/*!**************************!*\
  !*** ./api/endpoints.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var endpoints = {
  GET_PRODUCTS: function GET_PRODUCTS(shop) {
    return "".concat("http://localhost:8080/", "shopify/products/").concat(shop);
  },
  FB_AUTH: "".concat("http://localhost:8080/", "facebook/auth"),
  FB_INTEREST_SEARCH: function FB_INTEREST_SEARCH(apiVersion) {
    return "https://graph.facebook.com/v".concat(apiVersion, "/search");
  },
  GET_ADACCOUNTS: function GET_ADACCOUNTS(fbId) {
    return "".concat("http://localhost:8080/", "facebook/adaccounts/").concat(fbId);
  },
  GET_CAMPAIGNS: function GET_CAMPAIGNS(accountId) {
    return "".concat("http://localhost:8080/", "facebook/campaigns/").concat(accountId);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ })

})
//# sourceMappingURL=performance.js.64b789206515c22c6d44.hot-update.js.map