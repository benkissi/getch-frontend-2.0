webpackHotUpdate("static/development/pages/performance.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: fbAuthentication, searchInterest, getInterestSuggestions, compileInterestSuggestions, getProducts, getAdAccounts, paginateAdAccounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbAuthentication", function() { return fbAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInterest", function() { return searchInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestSuggestions", function() { return getInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileInterestSuggestions", function() { return compileInterestSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdAccounts", function() { return getAdAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateAdAccounts", function() { return paginateAdAccounts; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints */ "./api/endpoints.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/search */ "./utils/search.js");





var fbAuthentication = function fbAuthentication(token, id, fbId) {
  var url, params, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fbAuthentication$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_AUTH;
          params = {
            token: token,
            id: id,
            fbId: fbId
          };
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 4:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};
var searchInterest = function searchInterest(token, keyword) {
  var limit,
      url,
      params,
      res,
      _args2 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function searchInterest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          limit = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 500;
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_INTEREST_SEARCH(2.11);
          params = {
            q: keyword,
            type: 'adinterest',
            access_token: token,
            limit: limit
          };
          _context2.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 5:
          res = _context2.sent;
          return _context2.abrupt("return", res.data);

        case 7:
        case "end":
          return _context2.stop();
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
      _args3 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInterestSuggestions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          limit = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 100;
          interestSuggestions = [];
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].FB_INTEREST_SEARCH(2.11);
          params = {
            interest_list: keywords,
            type: 'adinterestsuggestion',
            access_token: token,
            limit: limit
          };
          _context3.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 6:
          response = _context3.sent;
          interestSuggestions.push.apply(interestSuggestions, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data.data));
          page = 0;

        case 9:
          if (!response.data.paging.next) {
            _context3.next = 19;
            break;
          }

          if (!(page > 5)) {
            _context3.next = 12;
            break;
          }

          return _context3.abrupt("break", 19);

        case 12:
          _context3.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(response.data.paging.next));

        case 14:
          response = _context3.sent;
          interestSuggestions.push.apply(interestSuggestions, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data.data));
          page++;
          _context3.next = 9;
          break;

        case 19:
          return _context3.abrupt("return", interestSuggestions);

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  });
};
var compileInterestSuggestions = function compileInterestSuggestions(token, keywords) {
  var limit,
      suggestions,
      dataArray,
      i,
      _args4 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function compileInterestSuggestions$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          limit = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 100;

          if (!(keywords.length > 200)) {
            _context4.next = 18;
            break;
          }

          suggestions = [];
          dataArray = Object(_utils_search__WEBPACK_IMPORTED_MODULE_4__["splitArray"])(keywords, 200);
          i = 0;

        case 5:
          if (!(i < dataArray.length)) {
            _context4.next = 17;
            break;
          }

          _context4.t0 = suggestions.push;
          _context4.t1 = suggestions;
          _context4.t2 = _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"];
          _context4.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getInterestSuggestions(token, dataArray[i], limit));

        case 11:
          _context4.t3 = _context4.sent;
          _context4.t4 = (0, _context4.t2)(_context4.t3);

          _context4.t0.apply.call(_context4.t0, _context4.t1, _context4.t4);

        case 14:
          i++;
          _context4.next = 5;
          break;

        case 17:
          return _context4.abrupt("return", suggestions);

        case 18:
          _context4.next = 20;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getInterestSuggestions(token, keywords, limit));

        case 20:
          return _context4.abrupt("return", _context4.sent);

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  });
};
var getProducts = function getProducts(shopName) {
  var url, params, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getProducts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_PRODUCTS(shopName);
          params = {
            limit: 10
          };
          _context5.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            params: params
          }));

        case 4:
          res = _context5.sent;
          console.log(res.data);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
};
var getAdAccounts = function getAdAccounts(fbId, token) {
  var url, headers, params, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAdAccounts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          url = _endpoints__WEBPACK_IMPORTED_MODULE_3__["default"].GET_ADACCOUNTS(fbId);
          headers = {
            'Authorization': token
          };
          params = {
            fbId: fbId
          };
          _context6.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
            headers: headers,
            params: params
          }));

        case 5:
          res = _context6.sent;
          return _context6.abrupt("return", res.data);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
};
var paginateAdAccounts = function paginateAdAccounts(page) {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function paginateAdAccounts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(page));

        case 2:
          res = _context7.sent;
          return _context7.abrupt("return", res);

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=performance.js.65be9e00f190106e2315.hot-update.js.map