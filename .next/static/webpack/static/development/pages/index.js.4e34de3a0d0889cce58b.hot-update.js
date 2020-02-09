webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/search.js":
/*!*************************!*\
  !*** ./utils/search.js ***!
  \*************************/
/*! exports provided: addScore, getInterestNames, containsKeyword, splitArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScore", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterestNames", function() { return getInterestNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsKeyword", function() { return containsKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
var addScore = function addScore(data, score) {
  var updated = data.map(function (item) {
    if (item.hasOwnProperty('relevance')) {
      return item.relevance = item.relevance + score;
    }

    item['relevance'] = score;
    return item;
  });
  return updated;
};
var getInterestNames = function getInterestNames(data) {
  var names = data.map(function (item) {
    return item.name;
  });
  return names;
};
var containsKeyword = function containsKeyword(key, phrase) {
  var lowerPhrase = phrase.toLowerCase();
  var lowerKey = key.toLowerCase();
  return lowerPhrase.indexOf(lowerKey);
};
var splitArray = function splitArray(array, size) {
  var length = array.length;
  var setNumber = Math.ceil(length / size);
  var limit = size;
  var start = 0;
  var arraySplit = [];

  for (var i = 0; i < setNumber; i++) {
    var set = array.slice(start, limit);
    arraySplit.push(set);
    limit = limit + size;
    start = start + size;
  }

  return arraySplit;
};

/***/ })

})
//# sourceMappingURL=index.js.4e34de3a0d0889cce58b.hot-update.js.map