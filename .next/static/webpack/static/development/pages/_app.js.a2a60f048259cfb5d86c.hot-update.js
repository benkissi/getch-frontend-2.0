webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/search/search-sagas.js":
/*!**************************************!*\
  !*** ./redux/search/search-sagas.js ***!
  \**************************************/
/*! exports provided: onSearchStart, searchSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSearchStart", function() { return onSearchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSagas", function() { return searchSagas; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-actions */ "./redux/search/search-actions.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");
/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/search */ "./utils/search.js");
/* harmony import */ var _search_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-types */ "./redux/search/search-types.js");
/* harmony import */ var _search_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-selectors */ "./redux/search/search-selectors.js");



var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getInterest),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onSearchStart),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchSagas);








function getInterest(_ref) {
  var payload, token, value, limit, data, levelOne, names, suggestions, levelTwo, allInterest, rankedList, total;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getInterest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.prev = 1;
          token = payload.token, value = payload.value, limit = payload.limit;
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 5:
          _context.next = 7;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["searchInterest"])(token, value, limit);

        case 7:
          data = _context.sent;
          levelOne = Object(_utils_search__WEBPACK_IMPORTED_MODULE_5__["addScore"])(data.data, 5);
          names = Object(_utils_search__WEBPACK_IMPORTED_MODULE_5__["getInterestNames"])(data.data);
          _context.next = 12;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["compileInterestSuggestions"])(token, names);

        case 12:
          suggestions = _context.sent;
          levelTwo = Object(_utils_search__WEBPACK_IMPORTED_MODULE_5__["addScore"])(suggestions, 3);
          allInterest = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(levelOne), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(levelTwo));
          rankedList = allInterest.map(function (interest) {
            var exist = Object(_utils_search__WEBPACK_IMPORTED_MODULE_5__["containsKeyword"])(value, interest.name);

            if (exist !== -1) {
              interest['relevance'] = interest.relevance + 3;
            }

            return interest;
          });
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchSuccess"])({
            data: rankedList,
            keyword: value
          }));

        case 18:
          _context.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(_search_selectors__WEBPACK_IMPORTED_MODULE_7__["selectInterestTotal"]);

        case 20:
          total = _context.sent;
          _context.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_3__["setInterestCount"])(total));

        case 23:
          _context.next = 25;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 25:
          _context.next = 33;
          break;

        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](1);
          _context.next = 31;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 31:
          _context.next = 33;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchFailure"])(_context.t0));

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 27]]);
}

function onSearchStart() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onSearchStart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_search_types__WEBPACK_IMPORTED_MODULE_6__["default"].START_SEARCH, getInterest);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function searchSagas() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchSagas$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(onSearchStart)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=_app.js.a2a60f048259cfb5d86c.hot-update.js.map