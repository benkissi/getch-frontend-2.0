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
    return "".concat("http://localhost:9090/", "shopify/products/").concat(shop);
  },
  FB_AUTH: "".concat("http://localhost:9090/", "facebook/auth"),
  FB_INTEREST_SEARCH: function FB_INTEREST_SEARCH(apiVersion) {
    return "https://graph.facebook.com/v".concat(apiVersion, "/search");
  },
  GET_ADACCOUNTS: function GET_ADACCOUNTS(fbId) {
    return "".concat("http://localhost:9090/", "facebook/adaccounts/").concat(fbId);
  },
  GET_CAMPAIGNS: function GET_CAMPAIGNS(accountId) {
    return "".concat("http://localhost:9090/", "facebook/campaigns/").concat(accountId);
  },
  GET_ADSETS: function GET_ADSETS(campaignId) {
    return "".concat("http://localhost:9090/", "facebook/adsets/").concat(campaignId);
  },
  GET_ADS: function GET_ADS(adsetId) {
    return "".concat("http://localhost:9090/", "facebook/ads/").concat(adsetId);
  },
  GET_STATS: function GET_STATS(adId) {
    return "".concat("http://localhost:9090/", "facebook/stats/").concat(adId);
  },
  SIGN_UP: "".concat("http://localhost:9090/", "signup")
};
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ })

})
//# sourceMappingURL=_app.js.9f2ba847b87c0f3a9a7c.hot-update.js.map