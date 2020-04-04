webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: signUp, fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, fbPaginate, getCampaigns, getAdsets, getAds, getInterestStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints */ "./api/endpoints.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");





var signUp = function signUp(email, password) {
  var url, data, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function signUp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = endpoint.SIGN_UP;
          data = {
            email: email,
            password: password
          };
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data));

        case 4:
          res = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
var fbAuthentication = function fbAuthentication(token, id, fbId) {
  var url, params, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fbAuthentication$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_AUTH;
          params = {
            token: token,
            id: id,
            fbId: fbId
          };
          _context2.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 4:
          res = _context2.sent;
          return _context2.abrupt("return", res.data);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};
var searchInterest = function searchInterest(token, keyword) {
  var limit,
      url,
      params,
      res,
      _args3 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function searchInterest$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          limit = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 500;
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_INTEREST_SEARCH(2.11);
          params = {
            q: keyword,
            type: 'adinterest',
            access_token: token,
            limit: limit
          };
          _context3.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 5:
          res = _context3.sent;
          return _context3.abrupt("return", res.data);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};
var getInterestSuggestions = function getInterestSuggestions(token, keywords) {
  var limit,
      interestSuggestions,
      response,
      url,
      params,
      page,
      _args4 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInterestSuggestions$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          limit = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 100;
          interestSuggestions = [];
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_INTEREST_SEARCH(2.11);
          params = {
            interest_list: keywords,
            type: 'adinterestsuggestion',
            access_token: token,
            limit: limit
          };
          _context4.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 6:
          response = _context4.sent;
          interestSuggestions.push.apply(interestSuggestions, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data.data));
          page = 0;

        case 9:
          if (!response.data.paging.next) {
            _context4.next = 19;
            break;
          }

          if (!(page > 5)) {
            _context4.next = 12;
            break;
          }

          return _context4.abrupt("break", 19);

        case 12:
          _context4.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(response.data.paging.next));

        case 14:
          response = _context4.sent;
          interestSuggestions.push.apply(interestSuggestions, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data.data));
          page++;
          _context4.next = 9;
          break;

        case 19:
          return _context4.abrupt("return", interestSuggestions);

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  });
};
var compileInterestSuggestions = function compileInterestSuggestions(token, keywords) {
  var limit,
      suggestions,
      dataArray,
      i,
      _args5 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function compileInterestSuggestions$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          limit = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 100;

          if (!(keywords.length > 200)) {
            _context5.next = 18;
            break;
          }

          suggestions = [];
          dataArray = Object(_utils_search__WEBPACK_IMPORTED_MODULE_4__["splitArray"])(keywords, 200);
          i = 0;

        case 5:
          if (!(i < dataArray.length)) {
            _context5.next = 17;
            break;
          }

          _context5.t0 = suggestions.push;
          _context5.t1 = suggestions;
          _context5.t2 = _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"];
          _context5.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getInterestSuggestions(token, dataArray[i], limit));

        case 11:
          _context5.t3 = _context5.sent;
          _context5.t4 = (0, _context5.t2)(_context5.t3);

          _context5.t0.apply.call(_context5.t0, _context5.t1, _context5.t4);

        case 14:
          i++;
          _context5.next = 5;
          break;

        case 17:
          return _context5.abrupt("return", suggestions);

        case 18:
          _context5.next = 20;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getInterestSuggestions(token, keywords, limit));

        case 20:
          return _context5.abrupt("return", _context5.sent);

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  });
};
var getProducts = function getProducts(shopName) {
  var url, params, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getProducts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_PRODUCTS(shopName);
          params = {
            limit: 10
          };
          _context6.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 4:
          res = _context6.sent;
          console.log(res.data);

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
};
var getAdAccounts = function getAdAccounts(fbId, token) {
  var url, headers, params, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAdAccounts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADACCOUNTS(fbId);
          headers = {
            'Authorization': token
          };
          params = {
            fbId: fbId
          };
          _context7.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers,
            params: params
          }));

        case 5:
          res = _context7.sent;
          return _context7.abrupt("return", res.data);

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  });
};
var fbPaginate = function fbPaginate(page) {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fbPaginate$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(page));

        case 2:
          res = _context8.sent;
          return _context8.abrupt("return", res.data);

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
};
var getCampaigns = function getCampaigns(accountId, token) {
  var url, headers, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getCampaigns$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_CAMPAIGNS(accountId);
          headers = {
            'Authorization': token
          };
          _context9.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers
          }));

        case 4:
          res = _context9.sent;
          return _context9.abrupt("return", res.data);

        case 6:
        case "end":
          return _context9.stop();
      }
    }
  });
};
var getAdsets = function getAdsets(camaignId, token) {
  var url, headers, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAdsets$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADSETS(camaignId);
          headers = {
            'Authorization': token
          };
          _context10.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
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
  });
};
var getAds = function getAds(adsetId, token) {
  var url, headers, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAds$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADS(adsetId);
          headers = {
            'Authorization': token
          };
          _context11.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
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
  });
};
var getInterestStats = function getInterestStats(adId, token) {
  var url, headers, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInterestStats$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_STATS(adId);
          headers = {
            'Authorization': token
          };
          _context12.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
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
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.5c8093d3fb4749960dbb.hot-update.js.map