webpackHotUpdate("static/development/pages/_app.js",{

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
  GET_CAMPAIGNS: function GET_CAMPAIGNS(fbId) {
    return "".concat("http://localhost:8080/", "facebook/campaigns/").concat(fbId);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ })

})
//# sourceMappingURL=_app.js.2fbe6c4435403858e6bd.hot-update.js.map