webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: signUp, signIn, fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, fbPaginate, getCampaigns, getAdsets, getAds, getInterestStats, userLogout, updateSearchCount, verifyPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbAuthentication", function() { return fbAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInterest", function() { return searchInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestSuggestions", function() { return getInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileInterestSuggestions", function() { return compileInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdAccounts", function() { return getAdAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbPaginate", function() { return fbPaginate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaigns", function() { return getCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdsets", function() { return getAdsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAds", function() { return getAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestStats", function() { return getInterestStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchCount", function() { return updateSearchCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyPayment", function() { return verifyPayment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints */ "./api/endpoints.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");





var signUp = function signUp(email, password) {
  var url, data, res, token;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function signUp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("getting", email, password);
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].SIGN_UP;
          data = {
            email: email,
            password: password
          };
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data));

        case 5:
          res = _context.sent;
          token = res.headers["x-auth"].replace("Bearer ", "");
          res.data["xToken"] = token;
          return _context.abrupt("return", res.data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};
var signIn = function signIn(email, password) {
  var url, params, res, token;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function signIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("sign in api");
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].SIGN_IN;
          params = {
            email: email,
            password: password
          };
          console.log("api", params);
          _context2.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 6:
          res = _context2.sent;
          token = res.headers["x-auth"].replace("Bearer ", "");
          res.data["xToken"] = token;
          return _context2.abrupt("return", res.data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};
var fbAuthentication = function fbAuthentication(token, id, fbId, name) {
  var url, params, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fbAuthentication$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("name api", name);
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_AUTH;
          params = {
            token: token,
            id: id,
            fbId: fbId,
            name: name
          };
          _context3.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 5:
          res = _context3.sent;
          console.log("res data", res.data);
          return _context3.abrupt("return", res.data);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
};
var searchInterest = function searchInterest(token, keyword) {
  var limit,
      url,
      params,
      res,
      _args4 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function searchInterest$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          limit = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 500;
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_INTEREST_SEARCH(2.11);
          params = {
            q: keyword,
            type: "adinterest",
            access_token: token,
            limit: limit
          };
          _context4.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 5:
          res = _context4.sent;
          return _context4.abrupt("return", res.data);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, null, Promise);
};
var getInterestSuggestions = function getInterestSuggestions(token, keywords) {
  var limit,
      interestSuggestions,
      response,
      url,
      params,
      page,
      _args5 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInterestSuggestions$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          limit = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 100;
          interestSuggestions = [];
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_INTEREST_SEARCH(2.11);
          params = {
            interest_list: keywords,
            type: "adinterestsuggestion",
            access_token: token,
            limit: limit
          };
          _context5.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 6:
          response = _context5.sent;
          interestSuggestions.push.apply(interestSuggestions, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data.data));
          page = 0;

        case 9:
          if (!response.data.paging.next) {
            _context5.next = 19;
            break;
          }

          if (!(page > 5)) {
            _context5.next = 12;
            break;
          }

          return _context5.abrupt("break", 19);

        case 12:
          _context5.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(response.data.paging.next));

        case 14:
          response = _context5.sent;
          interestSuggestions.push.apply(interestSuggestions, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data.data));
          page++;
          _context5.next = 9;
          break;

        case 19:
          return _context5.abrupt("return", interestSuggestions);

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, null, Promise);
};
var compileInterestSuggestions = function compileInterestSuggestions(token, keywords) {
  var limit,
      suggestions,
      dataArray,
      i,
      _args6 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function compileInterestSuggestions$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          limit = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : 100;

          if (!(keywords.length > 200)) {
            _context6.next = 18;
            break;
          }

          suggestions = [];
          dataArray = Object(_utils_search__WEBPACK_IMPORTED_MODULE_4__["splitArray"])(keywords, 200);
          i = 0;

        case 5:
          if (!(i < dataArray.length)) {
            _context6.next = 17;
            break;
          }

          _context6.t0 = suggestions.push;
          _context6.t1 = suggestions;
          _context6.t2 = _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"];
          _context6.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getInterestSuggestions(token, dataArray[i], limit));

        case 11:
          _context6.t3 = _context6.sent;
          _context6.t4 = (0, _context6.t2)(_context6.t3);

          _context6.t0.apply.call(_context6.t0, _context6.t1, _context6.t4);

        case 14:
          i++;
          _context6.next = 5;
          break;

        case 17:
          return _context6.abrupt("return", suggestions);

        case 18:
          _context6.next = 20;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getInterestSuggestions(token, keywords, limit));

        case 20:
          return _context6.abrupt("return", _context6.sent);

        case 21:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, null, Promise);
};
var getProducts = function getProducts(shopName) {
  var url, params, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getProducts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_PRODUCTS(shopName);
          params = {
            limit: 10
          };
          _context7.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 4:
          res = _context7.sent;
          console.log(res.data);

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, null, Promise);
};
var getAdAccounts = function getAdAccounts(fbId, token) {
  var url, headers, params, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAdAccounts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADACCOUNTS(fbId);
          headers = {
            Authorization: token
          };
          params = {
            fbId: fbId
          };
          _context8.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers,
            params: params
          }));

        case 5:
          res = _context8.sent;
          return _context8.abrupt("return", res.data);

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, null, Promise);
};
var fbPaginate = function fbPaginate(page) {
  var res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fbPaginate$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(page));

        case 2:
          res = _context9.sent;
          return _context9.abrupt("return", res.data);

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, null, Promise);
};
var getCampaigns = function getCampaigns(accountId, token) {
  var url, headers, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getCampaigns$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_CAMPAIGNS(accountId);
          headers = {
            Authorization: token
          };
          _context10.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context10.sent;
          return _context10.abrupt("return", res.data);

        case 6:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, null, Promise);
};
var getAdsets = function getAdsets(camaignId, token) {
  var url, headers, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAdsets$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADSETS(camaignId);
          headers = {
            Authorization: token
          };
          _context11.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context11.sent;
          return _context11.abrupt("return", res.data);

        case 6:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, null, Promise);
};
var getAds = function getAds(adsetId, token) {
  var url, headers, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAds$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADS(adsetId);
          headers = {
            Authorization: token
          };
          _context12.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context12.sent;
          return _context12.abrupt("return", res.data);

        case 6:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, null, Promise);
};
var getInterestStats = function getInterestStats(adId, token) {
  var url, headers, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInterestStats$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_STATS(adId);
          headers = {
            Authorization: token
          };
          _context13.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context13.sent;
          return _context13.abrupt("return", res.data);

        case 6:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, null, Promise);
};
var userLogout = function userLogout(token) {
  var url, headers, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function userLogout$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].LOG_OUT;
          headers = {
            Authorization: token
          };
          _context14.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context14.sent;
          console.log("res", res);
          return _context14.abrupt("return", res.data);

        case 7:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, null, Promise);
};
var updateSearchCount = function updateSearchCount(token) {
  var url, headers, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function updateSearchCount$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE_SEARCH_COUNT;
          headers = {
            Authorization: token
          };
          _context15.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context15.sent;
          console.log("count", res);
          return _context15.abrupt("return", res.data);

        case 7:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, null, Promise);
};
var verifyPayment = function verifyPayment(token, plan, ref) {
  var url, headers, data, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function verifyPayment$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].VERIFY_PAYMENT;
          headers = {
            Authorization: token
          };
          data = {
            plan: plan,
            ref: ref
          };
          _context16.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data, {
            headers: headers
          }));

        case 5:
          res = _context16.sent;
          console.log("api", res.data);
          return _context16.abrupt("return", res.data);

        case 8:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=_app.js.e24431558831d5af1664.hot-update.js.map